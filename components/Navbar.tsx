'use cleint'
import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";


import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const NavBar = () => (
  // <header className='absolute z-10 w-full'>
  //   <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
  //     <Link href='/' className='flex items-center justify-center'>
  //       <Image
  //         src='/logo.jpg'
  //         alt='logo'
  //         width={60}
  //         height={18}
  //         className='object-contain'
  //       />
  //     </Link>

  //     <CustomButton
  //       title='Sign in'
  //       btnType='button'
  //       containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
  //     />
  //   </nav>
  // </header>
  <Disclosure as="nav" className="bg-white shadow">
    {({ open }) => (
      <>
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative flex justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
              <div className="flex items-center flex-shrink-0">
                <Image 
                  className="w-auto h-8"
                  src="/logo.jpg"
                  alt="logo"
                  width={60}
                  height={18}
                />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                <a
                  href="#"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-primary-blue"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
                >
                  Search
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
                >
                  Auction Sites
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
                >
                  Watch List
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
                >
                  Apprraisal by VIN
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 border-transparent hover:text-primary-blue hover:border-gray-300 text-amber-400"
                >
                  Resources
                </a>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="relative flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://api.dicebear.com/7.x/initials/svg?seed=Victor%20Prado"
                      alt=""
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Your Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Purchases
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Sign out
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="pt-2 pb-4 space-y-1">
            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
            <Disclosure.Button
              as="a"
              href="#"
              className="block py-2 pl-3 pr-4 text-base font-medium border-l-4 text-amber-700 border-primary-blue bg-amber-50"
            >
              Dashboard
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href="#"
              className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            >
              Serch
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href="#"
              className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            >
              Auction Sites
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href="#"
              className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            >
              Watch List
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href="#"
              className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            >
              Appraisal by VIN
            </Disclosure.Button>

          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

export default NavBar;
