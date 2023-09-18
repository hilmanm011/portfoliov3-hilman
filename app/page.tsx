import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import { NextPage } from 'next'

const Home: NextPage = ()=>{
  return (
    <main className="bg-[rgba(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden z-0">
      {/* header */}
      <Header />

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      {/* Skill */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/* Project */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      {/* Contact Us */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
    </main>
  )
}

export default Home