'use client'

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
  DiReact,
} from 'react-icons/di'
import {BiDownload, BiLogoPhp, BiLogoRedux} from 'react-icons/bi'


import {SiExpress, SiFirebase, SiGithub, SiLinkedin, SiTailwindcss} from 'react-icons/si'
import img2 from '../../public/images/code1.svg'
import syncpro from '../../public/images/syncpro.webp'
import alura from '../../public/images/alura.png'
import fazt from '../../public/images/fazt.png'
import uno from '../../public/images/Group 4.png'
import healthfiles from '../../public/images/healthfiles.png'
import {CustomTimeLine} from "@/app/components/timeline/timeline";
import MyComponent from "@/app/contact/page";
import {FiFigma} from "react-icons/fi";
import {TbBrandReactNative} from "react-icons/tb";



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

              <div className='mt-5 relative'>
                <a
                  href={'/Marion Bustamante-CV-SPA.pdf'}
                  target={'_blank'}
                  className='flex w-48 space-x-2 items-center justify-center px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-700 cursor-pointer'
                >
                  <p>
                    Download CV
                  </p>
                  <BiDownload className='inline-block ms-2'/>

                </a>
              </div>
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
        <Image className={'w-72'} alt={''} src={syncpro}/>
        <div className={'p-5 flex flex-col items-center sm:items-start space-y-3 justify-center'}>
          <p className={'text-xl font-medium'}>Syncpro</p>
          <text className={''}>Enterprise Resource Planning (ERP) system that allows efficient and secure management of businesses.</text>
          <div className={'flex space-x-2 items-center cursor-pointer z-40 text-custom-yellow'}>
            <DiReact className={'text-4xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>
            <SiTailwindcss className={'text-4xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>
            <DiMysql className={'text-4xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>
            <SiFirebase className={'text-3xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>
            <DiNodejs className={'text-4xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>
            <SiExpress className={'text-4xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>
            <BiLogoRedux className={'text-4xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>
          </div>
        </div>
      </section>
      <section className='px-5 lg:px-40 mb-16 flex flex-col sm:flex-row items-center justify-items-center sm:justify-start'>
        <Image className={'w-72'} alt={''} src={fazt}/>
        <div className={'p-5 flex flex-col items-center sm:items-start space-y-3 justify-center'}>
          <p className={'text-xl font-medium'}>Fazt Delivery</p>
          <text className={''}>The first web application that allows you to order clothes from your favorite stores, shirts, pants, dresses, shoes, accessories and more, in one place, shopping has never been so easy!
          </text>
          <div className={'flex space-x-2 cursor-pointer items-center z-40 text-custom-yellow'}>
            <BiLogoPhp className={'text-4xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>
            <DiBootstrap className={'text-4xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>
            <DiJavascript className={'text-4xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>
            <FiFigma className={'text-3xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>
            <DiMysql className={'text-4xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>
          </div>
        </div>
      </section>
      <section className='px-5 lg:px-40 mb-16 flex flex-col sm:flex-row items-center justify-items-center sm:justify-start'>
        <Image className={'w-72'} alt={''} src={healthfiles}/>
        <div className={'p-5 flex flex-col items-center sm:items-start space-y-3 justify-center'}>
          <p className={'text-xl font-medium'}>HealthFiles</p>
          <text className={''}>
            HealthFiles is a react native application that allows you to manage your medical records, appointments, prescriptions and more, in one place, managing your health has never been so easy!
          </text>
          <div className={'flex space-x-2 cursor-pointer items-center z-40 text-custom-yellow'}>
            <DiReact className={'text-4xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>
            <SiFirebase className={'text-3xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>
            <DiNodejs className={'text-4xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>
            <SiExpress className={'text-4xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>
            <FiFigma className={'text-3xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>
            <DiMysql className={'text-4xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>
          </div>
        </div>
      </section>
      <section className='px-5 lg:px-40 mb-16 flex flex-col sm:flex-row items-center justify-items-center sm:justify-start'>
        <Image className={'w-72'} alt={''} src={uno}/>
        <div className={'p-5 flex flex-col items-center sm:items-start space-y-3 justify-center'}>
          <p className={'text-xl font-medium'}>UNO Trivia</p>
          <text className={''}>
            UNO Trivia is an interactive web app that allows you to win a personalized certificate with your photo and send it to your phone number through the WhatsApp API.
          </text>
          <div className={'flex space-x-2 cursor-pointer items-center z-40 text-custom-yellow'}>
            <DiReact className={'text-4xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>
            <SiFirebase className={'text-3xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>
            <FiFigma className={'text-3xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>
            <DiMysql className={'text-4xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>

          </div>
        </div>
      </section>
      <section className='px-5 lg:px-40 mb-16 flex flex-col sm:flex-row items-center justify-items-center sm:justify-start'>
        <Image className={'w-72'} alt={''} src={alura}/>
        <div className={'p-5 flex flex-col items-center sm:items-start space-y-3 justify-center'}>
          <p className={'text-xl font-medium'}>Alura Encrypter</p>
          <text className={''}>React Text Encrypter.</text>
          <div className={'flex space-x-2 cursor-pointer z-40 text-custom-yellow'}>
            <DiReact className={'text-4xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>
            <SiTailwindcss className={'text-4xl hover:text-cyan-300 hover:scale-105 transition-all ease-in-out'}/>
          </div>
        </div>
      </section>


      <p className='px-5 my-16 mb-10 lg:px-40 text-2xl text-black dark:text-cyan-300'>Education</p>
      <section className='px-5 my-10 flex flex-col items-center '>
        <CustomTimeLine/>
      </section>

      <section>
        <MyComponent/>
      </section>


    </main>
  )
}
