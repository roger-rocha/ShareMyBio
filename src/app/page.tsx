import React from 'react'
import Link from "next/link"
import AdditionalLinksForm from '@/components/forms/AdditionalLinksForm'
import ProfileForm from '@/components/forms/ProfileForm'
import SocialLinksForm from '@/components/forms/SocialLinksForm'
import MobileMockup from '@/components/MobileMockup'
import PreviewButton from '@/components/buttons/PreviewButton'
import DemoData from '@/components/buttons/DemoData'
import { buttonVariants } from '@/components/ui/button'
import Publish from '@/components/buttons/Publish'
import {Github, Heart} from 'lucide-react'
import ShortnerButton from '@/components/buttons/ShortnerButton'
import Background from '@/components/background/Background'

export const siteConfig = {
  name: "Share My Bio - seus links em um só lugar.",
  description: "Share My Bio é uma alternativa gratuita ao link tree.",
  ogImage: "https://linknode.vercel.app/og-image.png",
  url: "https://share-my-bio.vercel.app/",
}

export default function Home() {
  return (
    <main className='relative grid lg:grid-cols-3 h-screen px-2 lg:px-0 md:container'>
      <section className='lg:col-span-2 flex flex-col items-center justify-center py-6 lg:px-20 gap-6 h-screen'>
        <div className='overflow-y-auto w-full hide_scrollbar flex flex-col gap-5 pb-20 lg:pb-0'>

          <ProfileForm />
          <SocialLinksForm />
          <AdditionalLinksForm />

          <Background />

          <div className='grid grid-cols-2 md:grid-cols-4 gap-2 justify-center items-center w-full '>
            <DemoData />
            <Publish />
            <Link
              target='_blank'
              href="https://www.rogerocha.com/"
              className={buttonVariants()}>
              <Heart className='mr-2 h-4 w-4' />
                Feito por R.R
            </Link>
          </div>
        </div>
      </section>

      <section className='hidden lg:flex justify-end items-center'>
        <MobileMockup />
      </section>

      <div className='lg:hidden'>
        <PreviewButton />
      </div>

    </main>
  )
}
