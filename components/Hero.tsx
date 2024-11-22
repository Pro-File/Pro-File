import React from 'react'
import Link from 'next/link'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'
import BackgroundCircles from './BackgroundCircles'

type Props = {
    pageInfo: PageInfo
}

function Hero({ pageInfo }: Props) {
    const [text] = useTypewriter({
        words: [
            `Hi, My name is ${pageInfo?.name}`,
            "I eat-sleep-code and repeat",
            "<Javascript Enthusiast />"
        ],
        loop: true,
        delaySpeed: 2000
    })
  return (
    <div className='h-screen flex flex-col space-y-6 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img 
        className='relative rounded-full h-48 w-48 mx-auto object-cover'
        src={ urlFor(pageInfo?.heroImage).url()} 
        alt='background-image' />
        <div className='z-20'>
              <h2 className='text-sm uppercase font-mono font-bold text-gray-400 pb-2 tracking-[5px] md:tracking-[15px]'>
                  {pageInfo?.role}
              </h2>
        <h1 className='text-2xl md:text-5xl lg:text-6xl xl:text-5xl font-semibold scroll-px-10'>
            <span className='mr-3 leading-relaxed'>{text}</span>
            <Cursor cursorColor="green"/>
        </h1>

        <div className="pt-5">
            <Link href="#about">
            <button className='heroButton'>About</button>
            </Link>
            <Link href="#experience">
            <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#skills">
            <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects">
            <button className='heroButton'>Projects</button>
            </Link>
                  <Link href="#contact">
                      <button className='heroButton'>Contact</button>
                  </Link>
        </div>
        </div>
    </div>
  )
}

export default Hero