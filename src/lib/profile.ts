const textFields = ["i", "n", "d", "f", "t", "ig", "m", "tg", "w", "y", "e", "gh", "l", "bg"] as const;

export function safeWebUrl(value: unknown): string | undefined {
  if (typeof value !== "string" || value.length > 2048 || /[\\\x00-\x20\x7f]/.test(value)) return undefined;
  try {
    const url = new URL(value);
    if (!["https:", "http:"].includes(url.protocol) || url.username || url.password) return undefined;
    return url.href;
  } catch { return undefined; }
}

export function validateProfile(value: unknown): Acc | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const input = value as Record<string, unknown>;
  const profile: Acc = {};
  for (const key of textFields) {
    const text = input[key];
    if (text === undefined) continue;
    if (typeof text !== "string" || text.length > 2048) return null;
    profile[key] = text;
  }
  if (input.ls !== undefined) {
    if (!Array.isArray(input.ls) || input.ls.length > 50) return null;
    profile.ls = [];
    for (const link of input.ls) {
      if (!link || typeof link !== "object" || Array.isArray(link)) return null;
      if (![link.l, link.u, link.i ?? ""].every(v => typeof v === "string" && v.length <= 2048)) return null;
      profile.ls.push({ id: profile.ls.length, l: link.l, u: link.u, i: link.i ?? "" });
    }
  }
  return profile;
}
