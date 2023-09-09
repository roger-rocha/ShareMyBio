import React from 'react'
import { Skeleton } from './ui/skeleton'

export default function IframeLoader() {
    return (
        <div className="p-2 h-full w-full space-y-8  max-w-lg mx-auto overflow-y-scroll hide_scrollbar pt-2">
            <div className="flex justify-between  items-center">
                <Skeleton className="h-[30px] w-[200px] rounded-2xl" />
                <div className='flex items-center gap-3'>
                    <Skeleton className="h-[30px] w-[30px] rounded-full" />
                    <Skeleton className="h-[30px] w-[30px] rounded-full" />
                </div>
            </div>
            <ul className="space-y-2">
                <Skeleton className="h-[100px] w-full rounded-2xl" />
                <Skeleton className="h-[100px] w-full rounded-2xl" />
                <Skeleton className="h-[100px] w-full rounded-2xl" />
            </ul>
        </div>
    )
}
