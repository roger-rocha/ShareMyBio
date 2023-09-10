"use client"

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button, buttonVariants } from '@/components/ui/button'
import { LinkIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function ShortnerButton() {

    // const { data } = useData()
    // const [inputLink, setInputLink] = React.useState<string>("")
    // const [isShortUrl, setIsShortUrl] = React.useState<boolean>(false)
    // const [isLoading, setIsLoading] = React.useState<boolean>(false)
    // const [hasCopied, setHasCopied] = React.useState<boolean>(false)


    // const copyToClipboard = React.useCallback(async () => {
    //     const url = inputLink;
    //     navigator.clipboard.writeText(url)
    // }, [inputLink]);

    // async function handleShortLink() {
    //     try {
    //         setIsLoading(true)
    //         const getShortLink = await ShortWithBitly(inputLink)
    //         setInputLink(getShortLink)
    //         setIsLoading(false)
    //         setIsShortUrl(true)
    //     } catch (error) {
    //         setIsLoading(false)
    //         error instanceof Error
    //             ? toast.error(error.message)
    //             : toast.error("Something went wrong. Please try again later.");
    //     }
    // }

    // React.useEffect(() => {

    //     //  use in local development  
    //     // const url = `https://linknode.vercel.app/1?data=${encodeData(data)}`;

    //     const url = `${window.location.origin}/1?data=${encodeData(data)}`;
    //     setInputLink(url)
    //     setIsShortUrl(false)
    //     setHasCopied(false)
    // }, [data])

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='w-full'>
                    <LinkIcon className='mr-2 h-4 w-4' />
                    Encurtar URL
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[450px]" showClose={false}>
                <CardHeader className='px-0'>
                    <CardTitle>Dub.co</CardTitle>
                    <CardDescription>
                        Encurte seu link em dub.co e tenha vários outros controles com ele.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 p-0">
                    <Link
                        target='_blank'
                        href="http://dub.co/"
                        className={cn(buttonVariants(), 'w-full')}
                    >
                        Visitar site
                    </Link>
                </CardContent>
            </DialogContent>
        </Dialog>

    )
}
