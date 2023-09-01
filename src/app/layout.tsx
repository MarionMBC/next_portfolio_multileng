"use client"
import {useState} from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar/NavBar'
const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'MarionMBC',
//   description: 'Hecho con :3 por MarionMBC',
// }


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  const [darkToggle, setDarkToggle] = useState(false)

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`inter.className dark:bg-gray-900 bg-white ${darkToggle && 'dark'}`}>
      <NavBar setDarkToggle={setDarkToggle} darkToggle={darkToggle} />
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
      {children}
      </body>
    </html>
  )
}
