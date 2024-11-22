import React from 'react';
import { motion } from 'framer-motion';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo
}

function About({ pageInfo }: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

        <motion.img 
        initial={{
            x: -200,
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
            x: 0,
        }}
        transition={{
            duration: 1.2
        }}
        src={urlFor(pageInfo?.profilePic).url()} alt='background-image'
        className="-mb-20 md:mb-0 flex-shrink-0 w-48 h-48 md:w-12 md:h-12 rounded-full block object-contain md:rounded-lg xl:w-[400px] xl:h-[500px]"
        />
        <div className='space-y-8 px-0 md:px-10'>
        <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
        </h3>
            <h4 className='text-2xl md:text-4xl font-semibold'>Who <span className='underline decoration-[#F7AB0A]/50'> am I </span>{" "}?</h4>
            <p className='text-base text-justify'>
                  {
                      pageInfo?.backgroundInformation
                  }
            </p>
        </div>
        
    </motion.div>
  )
}

export default About