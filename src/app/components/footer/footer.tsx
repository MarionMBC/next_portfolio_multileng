"use client"

import Link from "next/link";
import {useState} from "react";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";

interface Props {
  setDarkToggle: (darkToogle: boolean) => void;
  darkToggle: boolean;
}

const Footer = ({ setDarkToggle, darkToggle } : Props ) => {
  const [mode, setMode] = useState(0);
  return (
    <div className="z-[9999] ">
      <footer id="footer" className="z-[9999] dark:bg-gray-900 pt-14">
          <div className="z-[9999] w-full relative px-6 flex flex-col items-center justify-between">
            <div className="z-[9999] relative flex items-center mb-6 ">
              <a target={'_blank'} href="https://github.com/MarionMBC" className={'relative z-50'}>

                  <AiFillGithub className="z-[9999] relative footer-icon text-black ease-in-out transition-all dark:text-white w-10 h-10 hover:text-cyan-300 dark:hover:text-cyan-300"/>
              </a>
              <a target={'_blank'} href="https://www.linkedin.com/in/melchisedec-bustamante/">

                  <AiFillLinkedin className="z-[9999] pl-4 ease-in-out transition-all relative footer-icon text-black hover:text-cyan-300 w-14 h-14 cursor-pointer dark:text-white dark:hover:text-cyan-300"/>

              </a>
            </div>
          </div>
        <div className="py-16 flex flex-col justify-center items-center">
          <p
            className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">{new Date().getFullYear()} Marion
            Bustamante. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
