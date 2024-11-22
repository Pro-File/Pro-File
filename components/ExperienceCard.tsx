import React from 'react'
import {motion} from 'framer-motion';
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    experience: Experience;
}

function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col rounded-lg itens-center space-y-5 flex-shrink-0 
    w-[420px] md:w-[600px] xl:w-[600px] snap-center bg-[#292929] p-10 
    hover:opacity-40 cursor-pointer transition-opacity duration-200 
    overflow-hidden'>
        <motion.img
        initial={{
            y: -120,
            opacity: 0,
        }}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1.2}}
        className='w-24 h-24 mx-8 rounded-full xl:w-[80px] xl:h-[80px] object-cover object-center'
        alt='logo'
              src={urlFor(experience?.companyImage).url()}
        />
        <div className='px-0 md:px-10'>
              {/* <h4 className='text-4xl font-light'>CEO Tech Burner</h4> */}
              <p className='font-bold text-2xl mt-1'>{experience?.company}</p>
            <div className='flex space-x-2 my-2'>
                  {
                      experience && experience?.technologies?.map((tech) => {
                          return <img
                              key={tech._id}
                              className='h-8 w-8 rounded-full'
                              src={urlFor(tech?.image).url()}
                              alt='stack-icon' />
                      })
                  }

            </div>
              <p className=' py-4 text-gray-300'>
                  {new Date(experience?.dateStarted).toDateString()} - {experience?.isCurrentlyWorkingHere ? 'Present' : new Date(experience?.dateEnded).toDateString()}
              </p>
              <ul className='list-disc space-y-2 ml-5 text-md max-h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80'>
                  {
                      experience && experience?.points?.map((point, i) => {
                          return <li key={i}>{point}</li>
                      })
                  }
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard