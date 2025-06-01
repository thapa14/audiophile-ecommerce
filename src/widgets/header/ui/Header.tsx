import {type FC, useState} from "react";
import logo from "shared/assets/image/logo.svg"
import {Icon} from "@iconify/react";

const Header: FC = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpened((prev) => !prev)
    }

    return <div className="w-full h-[90px] bg-black text-white fixed top-0 flex items-center justify-between">
        <nav className="w-full h-full flex items-center relative">
            <div className="mx-auto w-full px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between">

                    <div className="absolute inset-y-5 left-0 flex items-center md:hidden">
                        {/*// <!-- Mobile menu button-->*/}
                        <button type="button"
                                className="relative inline-flex items-center justify-center rounded-md text-white hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                                aria-controls="mobile-menu"
                                aria-expanded={isMenuOpened}
                                aria-label="mobile menu"
                                onClick={toggleMenu}
                        >
                            {/*open menu*/}
                            {!isMenuOpened &&
                                <Icon className="text-white" icon="mdi:hamburger-menu" width="24" height="24"/>}
                            {/*close menu*/}
                            {isMenuOpened && <Icon className="text-white" icon="mdi:hamburger-open" width="24" height="24"/>}
                        </button>
                    </div>

                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img className="h-8 w-36"
                                 src={logo}
                                 alt="Your Company"/>
                        </div>
                        <div className="hidden sm:ml-6 md:block">
                            <div className="flex space-x-4">
                                {/*// <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->*/}
                                <a href="#" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                                   aria-current="page">Dashboard</a>
                                <a href="#"
                                   className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                                <a href="#"
                                   className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                                <a href="#"
                                   className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                            </div>
                        </div>
                    </div>

                    <div
                        className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                            aria-label="View cart"
                            type="button"
                            className="relative rounded-full  text-white hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                            <Icon icon="mdi-light:cart" width="24" height="24"/>
                        </button>
                    </div>
                </div>
            </div>

            {/*// <!-- Mobile menu, show/hide based on menu state. -->*/}

            <div className="lg:hidden absolute top-[90px] w-full bg-black text-white" id="mobile-menu" hidden={!isMenuOpened}>
                <div className="">
                    <a href="#" className="block rounded-md bg-gray-800 px-3 py-2 text-base font-medium text-white"
                       aria-current="page">Dashboard</a>
                    <a href="#"
                       className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                    <a href="#"
                       className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                    <a href="#"
                       className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                </div>
            </div>
        </nav>

    </div>

}

export {Header}
//
// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
//
// const navigation = [
//     { name: 'Dashboard', href: '#', current: true },
//     { name: 'Team', href: '#', current: false },
//     { name: 'Projects', href: '#', current: false },
//     { name: 'Calendar', href: '#', current: false },
// ]
//
// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }
//
// export default function Example() {
//     return (
//         <Disclosure as="nav" className="bg-gray-800">
//             <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//                 <div className="relative flex h-16 items-center justify-between">
//                     <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                         {/* Mobile menu button*/}
//                         <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
//                             <span className="absolute -inset-0.5" />
//                             <span className="sr-only">Open main menu</span>
//                             <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
//                             <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
//                         </DisclosureButton>
//                     </div>
//                     <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                         <div className="flex shrink-0 items-center">
//                             <img
//                                 alt="Your Company"
//                                 src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
//                                 className="h-8 w-auto"
//                             />
//                         </div>
//                         <div className="hidden sm:ml-6 sm:block">
//                             <div className="flex space-x-4">
//                                 {navigation.map((item) => (
//                                     <a
//                                         key={item.name}
//                                         href={item.href}
//                                         aria-current={item.current ? 'page' : undefined}
//                                         className={classNames(
//                                             item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                                             'rounded-md px-3 py-2 text-sm font-medium',
//                                         )}
//                                     >
//                                         {item.name}
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                         <button
//                             type="button"
//                             className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
//                         >
//                             <span className="absolute -inset-1.5" />
//                             <span className="sr-only">View notifications</span>
//                             <BellIcon aria-hidden="true" className="size-6" />
//                         </button>
//
//                         {/* Profile dropdown */}
//                         <Menu as="div" className="relative ml-3">
//                             <div>
//                                 <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
//                                     <span className="absolute -inset-1.5" />
//                                     <span className="sr-only">Open user menu</span>
//                                     <img
//                                         alt=""
//                                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                                         className="size-8 rounded-full"
//                                     />
//                                 </MenuButton>
//                             </div>
//                             <MenuItems
//                                 transition
//                                 className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
//                             >
//                                 <MenuItem>
//                                     <a
//                                         href="#"
//                                         className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
//                                     >
//                                         Your Profile
//                                     </a>
//                                 </MenuItem>
//                                 <MenuItem>
//                                     <a
//                                         href="#"
//                                         className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
//                                     >
//                                         Settings
//                                     </a>
//                                 </MenuItem>
//                                 <MenuItem>
//                                     <a
//                                         href="#"
//                                         className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
//                                     >
//                                         Sign out
//                                     </a>
//                                 </MenuItem>
//                             </MenuItems>
//                         </Menu>
//                     </div>
//                 </div>
//             </div>
//
//             <DisclosurePanel className="sm:hidden">
//                 <div className="space-y-1 px-2 pt-2 pb-3">
//                     {navigation.map((item) => (
//                         <DisclosureButton
//                             key={item.name}
//                             as="a"
//                             href={item.href}
//                             aria-current={item.current ? 'page' : undefined}
//                             className={classNames(
//                                 item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                                 'block rounded-md px-3 py-2 text-base font-medium',
//                             )}
//                         >
//                             {item.name}
//                         </DisclosureButton>
//                     ))}
//                 </div>
//             </DisclosurePanel>
//         </Disclosure>
//     )
// }
//
//
// export {Header}