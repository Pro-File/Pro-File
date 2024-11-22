import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import { Skill as SkillType } from '../typings';

type Props = {
  skill: SkillType[]
}

function Skills({ skill }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
      <h3 className='absolute top-32 uppercase tracking-[3px] text-gray-500 text-md'>
        Hover over a skill to view current profieciency
      </h3>

      <div className='absolute top-52 md:top-48 grid grid-cols-4 gap-4'>
        {
          skill && skill?.slice(0, skill?.length / 2)?.map((item) => {
            return <SkillCard key={item._id} skill={item} />
          })
        }
        {
          skill && skill?.slice(skill?.length / 2, skill?.length)?.map((item) => {
            return <SkillCard key={item._id} skill={item} />
          })
        }
      </div>

    </motion.div>
  )
}

export default Skills