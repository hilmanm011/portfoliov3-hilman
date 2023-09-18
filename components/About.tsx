'use client'
import { motion } from "framer-motion"
type Props = {}

const About = (props: Props) => {
  return (
    <motion.div 
    initial={{
      opacity: 0
    }}
    whileInView={{
      opacity: 1
    }}
    transition={{
      duration: 1.5
    }}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About
      </h3>
        <motion.img
        initial={{
          x: -200,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        viewport={{
          once: true
        }}
        src="https://i.ibb.co/z8mVmJ7/fotor-2023-5-28-23-24-19.png"
        className="-mb-20 mt-10 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />

        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold sm:text-5xl">Here is a{" "}
          <span className="underline decoration-[#F7AB8A]">title</span>{" "}
          background 
          </h4>
          <p className="text-sm">
          I am a web developer with 1+ years of experience in Programmer. I have a strong foundation in front-end & back-end development and am skilled in creating user-friendly and responsive web applications using React and its ecosystem. I have experience working on a variety of projects, including building and maintaining single page applications, integrating with REST APIs, and implementing responsive design principles. I am also proficient in using tools such as npm, and Git for development and deployment. In addition to my technical skills, I am able to work effectively with cross-functional teams and am comfortable taking on new challenges and learning new technologies as needed.

          I am always looking to improve my skills and stay up-to-date with the latest best practices in web development. I am excited to continue growing as a developer and making meaningful contributions to projects and teams.
          </p>
        </div>
    </motion.div>
  )
}

export default About