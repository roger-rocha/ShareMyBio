const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const ts=require('typescript');
const context={exports:{},URL};
vm.runInNewContext(ts.transpileModule(fs.readFileSync('src/lib/profile.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,context);
const {safeWebUrl,validateProfile}=context.exports;
test('rejects active, relative, credential-bearing and obfuscated URLs',()=>{
 for(const u of ['javascript:alert(1)','data:text/html,test','//evil.example','https://user:password@example.com','https:\\evil.example','https://example.com\n',null,{}])assert.equal(safeWebUrl(u),undefined);
 assert.equal(safeWebUrl('https://example.com/a?q=1'),'https://example.com/a?q=1');
 assert.equal(safeWebUrl('http://example.com'),'http://example.com/');
});
test('rejects malformed or oversized shared profiles',()=>{
 for(const p of [null,[],{n:{}},{n:'x'.repeat(2049)},{ls:{}},{ls:Array(51).fill({})},{ls:[{u:'https://example.com',l:1}]}])assert.equal(validateProfile(p),null);
 const p=validateProfile({n:'Visitor',e:'visitor@example.com',ls:[{l:'Site',u:'https://example.com'}],injected:'javascript:alert(1)'});
 assert.equal(p.n,'Visitor');assert.equal(p.injected,undefined);assert.equal(p.ls.length,1);
});
