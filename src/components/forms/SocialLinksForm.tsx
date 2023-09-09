"use client"

import React, { FC } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import { SocialInput } from '@/components/ui/social-input'
import { useData } from '@/lib/context/LinkContext'

const socialLinksProvider: SocialLinkProviderProps[] = [
    { name: 'facebook', icon: "ph:facebook-logo-duotone", id: "f" },
    { name: 'twitter', icon: "ph:twitter-logo-duotone", id: "t" },
    { name: 'instagram', icon: "ph:instagram-logo-duotone", id: "ig" },
    { name: 'telegram', icon: "ph:telegram-logo-duotone", id: "tg" },
    { name: 'youtube', icon: "ph:youtube-logo-duotone", id: "y" },
    { name: 'email', icon: "ph:envelope-duotone", id: "e" },
    { name: 'github', icon: "ph:github-logo-duotone", id: "gh" },
    { name: 'linkedin', icon: "ph:linkedin-logo-duotone", id: "l" },
    { name: 'whatsapp', icon: "ph:whatsapp-logo-duotone", id: "w" },
]

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface SocialLinksFormProps { }

const SocialLinksForm: FC<SocialLinksFormProps> = () => {

    const { data, updateSocialInfo } = useData();

    const handleInputChange = (event: InputChangeEvent) => {
        const { name, value } = event.target;
        updateSocialInfo(name, value);
    };

    return (
        <Card className='w-full'>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Social Links</CardTitle>
                <CardDescription>
                    Coloque o link das suas redes sociais aqui.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
                {socialLinksProvider.map((link) => {
                    return (
                        <SocialInput
                            key={link.name}
                            id={link.name}
                            name={link.id}
                            icon={link.icon}
                            placeholder={`${link.name}.com/exemplo`}
                            value={data[link.id]}
                            onChange={handleInputChange}
                        />
                    );
                })}
            </CardContent>
        </Card>
    )
}

export default SocialLinksForm