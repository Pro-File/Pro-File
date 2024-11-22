import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    directionLeft?: Boolean;
    skill: Skill
}

function SkillCard({ directionLeft, skill }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <img
                src={urlFor(skill?.image).url()}
                alt='skill-icon'
                className='rounded-full border border-gray-500 object-cover w-16 h-16
                md:w-20 md:h-20 filter group-hover:grayscale 
                transition duration-300 ease-in-out '
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 
            ease-in-out group-hover:bg-white h-20 w-20 md:w-20 md:h-20 
            rounded-full z-100'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-2xl font-bold text-black opacity-100'>{
                        skill?.progress
                    }%</p>
                </div>
            </div>

        </div>
    )
}

export default SkillCard