import Image from 'next/image'
import {AiFillGithub} from 'react-icons/ai'
import {
  DiBootstrap,
  DiCss3,
  DiHtml5,
  DiJavascript,
  DiMsqlServer,
  DiMysql,
  DiNodejs,
  DiPython,
  DiReact
} from 'react-icons/di'
import {SiFirebase, SiGithub, SiLinkedin, SiTailwindcss} from 'react-icons/si'
import img2 from './assets/img/code1.svg'
import syncpro from './assets/img/syncpro.webp'
import {CustomTimeLine} from "@/app/components/timeline/timeline";
// import syncro from './assets/img/1.png'
// import journal from './assets/img/2.png'
// import alura from './assets/img/3.png'

// import NavBar from './components/NavBar/NavBar'

export default function Home() {

  return (
    <main className="h-fit overflow-hidden bg-white dark:bg-gray-900 dark:text-white">

      <div className='px-5 mt-10 lg:px-40'>
        <div className='grid-cols-1 grid md:grid-cols-2 items-center justify-between'>
          <div className=''>
            <p className='text-5xl mb-5 dark:text-cyan-300'>
              Hi
            </p>
            <section className='border-l-2 mt-4 lg:text-2xl border-black ps-2 dark:border-white'>
              <p className='break-words'>
                My name is Marion Bustamante, I&apos;m a <span className='text-cyan-300'>systems engineering </span>
                student and a <span className='text-cyan-300'>full-stack developer</span>.
                I&apos;m from Francisco Morazán, Honduras. I have developed several
                software solutions. I am deeply passionate about software development.
              </p>
              <p className='break-words mt-2'>
                Over the past two years, I have gained extensive <span className='text-cyan-300'>experience</span>.
                working
                with a broad range of web technologies, which has equipped
                me with valuable skills for approaching new challenges
                and creating innovative solutions in the future.
              </p>
            </section>


          </div>
          <div>

            <Image alt='' className="text-white font-bold py-2 px-4 animate-floating" src={img2}/>
          </div>

        </div>

        <p className='text-2xl mt-[53px] mb-10 dark:text-cyan-300 self-center'>
          Technologies
        </p>
        <div className="relative flex overflow-x-hidden text-2xl lg:text-4xl">
          <div className="animate-marquee py-4 flex whitespace-nowrap transition-all">
            <AiFillGithub
              className='mx-4 lg:mx-10 cursor-pointer hover:text-cyan-300 hover:scale-150 transition-all easy-in-out'/>
            <DiReact
              className='mx-4 lg:mx-10 cursor-pointer hover:text-cyan-300 hover:scale-150 transition-all easy-in-out'/>
            <DiMsqlServer
              className='mx-4 lg:mx-10 cursor-pointer hover:text-cyan-300 hover:scale-150 transition-all easy-in-out'/>
            <DiMysql
              className='mx-4 lg:mx-10 cursor-pointer hover:text-cyan-300 hover:scale-150 transition-all easy-in-out'/>
            <DiHtml5
              className='mx-4 lg:mx-10 cursor-pointer hover:text-cyan-300 hover:scale-150 transition-all easy-in-out'/>
            <DiCss3
              className='mx-4 lg:mx-10 cursor-pointer hover:text-cyan-300 hover:scale-150 transition-all easy-in-out'/>
            <DiBootstrap
              className='mx-4 lg:mx-10 cursor-pointer hover:text-cyan-300 hover:scale-150 transition-all easy-in-out'/>
            <DiNodejs
              className='mx-4 lg:mx-10 cursor-pointer hover:text-cyan-300 hover:scale-150 transition-all easy-in-out'/>
            <DiJavascript
              className='mx-4 lg:mx-10 cursor-pointer hover:text-cyan-300 hover:scale-150 transition-all easy-in-out'/>
            <DiPython
              className='mx-4 lg:mx-10 cursor-pointer hover:text-cyan-300 hover:scale-150 transition-all easy-in-out'/>
            <SiTailwindcss
              className='mx-4 lg:mx-10 cursor-pointer hover:text-cyan-300 hover:scale-150 transition-all easy-in-out'/>
            <SiFirebase
              className='mx-4 lg:mx-10 cursor-pointer hover:text-cyan-300 hover:scale-150 transition-all easy-in-out'/>

          </div>
          <div className="absolute top-0 py-4 flex animate-marquee2 whitespace-nowrap transition-all">
            <AiFillGithub
              className='mx-4 lg:mx-10 cursor-pointer hover:text-cyan-300 hover:scale-150 transition-all easy-in-out'/>
            <DiReact
              className='mx-4 lg:mx-10 cursor-pointer hover:text-cyan-300 hover:scale-150 transition-all easy-in-out'/>
            <DiMsqlServer
              className='mx-4 lg:mx-10 cursor-pointer hover:text-cyan-300 hover:scale-150 transition-all easy-in-out'/>
            <DiMysql
              className='mx-4 lg:mx-10 cursor-pointer hover:text-cyan-300 hover:scale-150 transition-all easy-in-out'/>
            <DiHtml5
              className='mx-4 lg:mx-10 cursor-pointer hover:text-cyan-300 hover:scale-150 transition-all easy-in-out'/>
            <DiCss3
              className='mx-4 lg:mx-10 cursor-pointer hover:text-cyan-300 hover:scale-150 transition-all easy-in-out'/>
            <DiBootstrap
              className='mx-4 lg:mx-10 cursor-pointer hover:text-cyan-300 hover:scale-150 transition-all easy-in-out'/>
            <DiNodejs
              className='mx-4 lg:mx-10 cursor-pointer hover:text-cyan-300 hover:scale-150 transition-all easy-in-out'/>
            <DiJavascript
              className='mx-4 lg:mx-10 cursor-pointer hover:text-cyan-300 hover:scale-150 transition-all easy-in-out'/>
            <DiPython
              className='mx-4 lg:mx-10 cursor-pointer hover:text-cyan-300 hover:scale-150 transition-all easy-in-out'/>
            <SiTailwindcss
              className='mx-4 lg:mx-10 cursor-pointer hover:text-cyan-300 hover:scale-150 transition-all easy-in-out'/>
            <SiFirebase
              className='mx-4 lg:mx-10 cursor-pointer hover:text-cyan-300 hover:scale-150 transition-all easy-in-out'/>
          </div>

        </div>
      </div>
      <p className='px-5 mt-10 mb-16 lg:px-40 text-2xl text-black dark:text-cyan-300'>Projects</p>


      <section className='px-5 lg:px-40 mb-16 flex flex-col sm:flex-row items-center justify-items-center sm:justify-start'>
        <Image loading={'eager'} className={'w-72'} src={syncpro} alt={''}/>
        <div className={'p-5 flex flex-col space-y-3 justify-center'}>
          <p className={'text-xl font-medium'}>Syncpro</p>
          <text className={''}>Enterprise Resource Planning (ERP) system that allows efficient and secure management of businesses.</text>
          <div className={'flex space-x-2 cursor-pointer z-40 text-custom-yellow'}>
            <DiReact className={'text-4xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>
            <SiTailwindcss className={'text-4xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>
            <DiMsqlServer className={'text-4xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>
            <SiFirebase className={'text-4xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>

          </div>
        </div>
      </section>


      <p className='px-5 my-16 mb-10 lg:px-40 text-2xl text-black dark:text-cyan-300'>Education</p>
      <section className='px-5 my-10 flex flex-col items-center '>
        <CustomTimeLine/>
      </section>


    </main>
  )
}
