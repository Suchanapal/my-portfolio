import Image from 'next/image'
import Hero from '@/components/main/Hero'
import Skills from '@/components/main/Skills'
import Parallax from '@/components/sub/parallax/Parallax'
import '@/app/app.scss'
import Contact from '@/components/main/contact/Contact'

import Projects from '@/components/main/Projects'

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <section><Hero/></section>
        <Skills/>
        <section id='Services'><Parallax/></section>
       <section  id='project'><Projects/></section> 
        <section><Contact/></section>
      
        </div>
    </main>
  )
}
