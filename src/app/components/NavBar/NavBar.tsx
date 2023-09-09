"use client";

import {Fragment, useState} from "react";
import Link from "next/link";
import {Disclosure} from "@headlessui/react";
import {HiX, HiMenu} from "react-icons/hi"; // Corregir nombres de íconos
import "./NavBar.css";

const navigation = [
  {name: "Home", to: "/", current: true},
  {name: "Contact", to: "/contact", current: false},
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  setDarkToggle: (darkToggle: boolean) => void;
  darkToggle: boolean;
}

export default function NavBar({setDarkToggle, darkToggle}: Props) {
  const [activeTab, setActiveTab] = useState(navigation[0].name); // Estado para mantener la pestaña activa

  return (
    <Disclosure as="nav" className="bg-white dark:bg-gray-900 z-[99999]">
      {({open}) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 z-50 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button
                  className="inline-flex z-40 items-center justify-center rounded-md p-2 text-black hover:bg-cyan-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiX className="block h-6 w-6 dark:text-white" aria-hidden="true"/>
                  ) : (
                    <HiMenu className="block h-6 w-6 dark:text-white" aria-hidden="true"/>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="text-black self-center text-2xl font-medium dark:text-white">
                  Marion<span className="text-cyan-500 dark:text-cyan-300">MBC</span>
                </div>
                <div className="absolute right-0">
                  <label className="toggleDarkBtn">
                    <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)}/>
                    <span className="slideBtnTg round"></span>
                  </label>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4  items-center justify-between">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.to}
                        onClick={() => setActiveTab(item.name)} // Actualiza la pestaña activa al hacer clic
                        className={classNames(
                          item.name === activeTab
                            ? "bg-cyan-300 text-gray-900 z-[9999]"
                            : "text-black hover:bg-black z-[9999] hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black",
                          "relative rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.name === activeTab ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="justify-self-end">{/* ... (resto del código) */}</div>
                  </div>
                </div>
              </div>
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden z-50">
            <div className="space-y-1 px-2 pb-3 pt-2 z-[9999] bg-white dark:bg-gray-900">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.to}
                  onClick={() => setActiveTab(item.name)} // Actualiza la pestaña activa al hacer clic
                  className={classNames(
                    item.name === activeTab
                      ? "bg-cyan-300 text-gray-900 z-50"
                      : "text-black hover:bg-black z-50 hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black",
                    "block relative rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.name === activeTab ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
