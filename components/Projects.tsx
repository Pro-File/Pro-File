import React from "react";
import { motion } from 'framer-motion';
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
    project: Project[]
};

const Projects = ({ project }: Props) => {
    return (
        <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
                {project && project?.map((item, i) => (
                    <div key={item._id} className="relative md:top-24 w-screen 
                    flex-shrink-0 flex flex-col space-y-2 items-center 
                    justify-center p-6 md:p-44 h-screen">
                        <motion.img
                            initial={{
                                y: -300,
                                opacity: 0
                            }}
                            className="md:w-96 md:h-96"
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            src={urlFor(item?.image).url()}
                            alt=""
                        />

                        <div className="space-y-8 px-0 md:p-10 max-w-6xl">
                            <h4 className="text-xl md:text-3xl font-semibold text-center">
                                {" "}
                                <span className="underline decoration-[#FFD700]/50">
                                    Case Study {i + 1} of {project?.length}:{" "}
                                </span>{" "}
                                {item?.title}
                            </h4>

                            <div className="flex items-center rounded-full space-x-4 justify-center">
                                {
                                    item && item?.technologies?.map((item) => {
                                        return <img
                                            className="h-10 w-10"
                                            key={item?._id}
                                            src={urlFor(item?.image).url()}
                                            alt="stack-icon"
                                        />
                                    })
                                }
                            </div>

                            <p className="text-md text-center md:text-lg md:text-left">
                                {
                                    item?.summary
                                }
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#FFD700]/10 left-0 h-[500px] -skew-y-12 " />
        </div>
    );
};

export default Projects;