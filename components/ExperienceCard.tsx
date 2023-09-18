/* eslint-disable @next/next/no-img-element */
'use client'

import { motion } from "framer-motion"

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img 
            initial={{
                y: -100,
                opacity: 0
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src="https://i.ibb.co/z8mVmJ7/fotor-2023-5-28-23-24-19.png" 
            alt="" 
        />

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Developer</h4>
            <p className="font-bold text-2xl mt-1">EGOGHUB</p>
            <div className="flex space-x-2 my-2">
                <img 
                className="h-10 w-10 rounded-full"
                src="https://i.ibb.co/Br7ht3W/javascript.png" 
                alt="" 
                />
                <img 
                className="h-10 w-10 rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" 
                alt="" 
                />
                <img 
                className="h-10 w-10 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJh5cKAJXII8Ckgufw5ynbD0O1N2bbcrhq-1St0XbR1Ki1GHRSF-7G4HBBCDyBzFHlRvE&usqp=CAU" 
                alt="" 
                />
                <img 
                className="h-10 w-10 rounded-full"
                src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp" 
                alt="" 
                />
            </div>
            <p className="uppercase py-5 text-gray-300">started work ... end...</p>

            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Summary Points Summary Points Summary Points Summary Points Summary Points</li>
                <li>Summary Points Summary Points Summary Points Summary Points Summary Points</li>
                <li>Summary Points Summary Points Summary Points Summary Points Summary Points</li>
            </ul>

        </div>
    </article>
  )
}

export default ExperienceCard