import { type FC, useState } from 'react';
import logo from 'shared/assets/image/logo.svg';
import { Icon } from '@iconify/react';

const Header: FC = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpened(prev => !prev);
    };

    return (
        <div className="fixed top-0 flex h-[90px] w-full items-center justify-between bg-black text-white">
            <nav className="relative container flex h-full w-full items-center">
                <div className="mx-auto w-full">
                    <div className="relative flex items-center justify-between">
                        <div className="absolute left-0 flex items-center lg:hidden">
                            {/*// <!-- Mobile menu button-->*/}
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center rounded-md text-white hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                                aria-controls="mobile-menu"
                                aria-expanded={isMenuOpened}
                                aria-label="mobile menu"
                                onClick={toggleMenu}
                            >
                                {/*open menu*/}
                                {!isMenuOpened && (
                                    <Icon
                                        className="text-white"
                                        icon="mdi:hamburger-menu"
                                        width="24"
                                        height="24"
                                    />
                                )}
                                {/*close menu*/}
                                {isMenuOpened && (
                                    <Icon
                                        className="text-white"
                                        icon="mdi:hamburger-open"
                                        width="24"
                                        height="24"
                                    />
                                )}
                            </button>
                        </div>

                        <div className="flex flex-1 items-center justify-center md:ml-10 md:justify-start lg:ml-0 lg:justify-center">
                            <div className="flex shrink-0 items-center">
                                <img className="h-8 w-36" src={logo} alt="Company Logo" />
                            </div>
                            <div className="hidden sm:ml-6 lg:block">
                                <div className="flex space-x-4">
                                    {/*// <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->*/}
                                    <a
                                        href="#"
                                        className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                                        aria-current="page"
                                    >
                                        Dashboard
                                    </a>
                                    <a
                                        href="#"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Team
                                    </a>
                                    <a
                                        href="#"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Projects
                                    </a>
                                    <a
                                        href="#"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Calendar
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button
                                aria-label="View cart"
                                type="button"
                                className="relative rounded-full text-white hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                            >
                                <Icon icon="mdi-light:cart" width="24" height="24" />
                            </button>
                        </div>
                    </div>
                </div>

                {/*// <!-- Mobile menu, show/hide based on menu state. -->*/}

                <div
                    className="absolute top-[90px] w-full bg-black text-white shadow-lg/30 lg:hidden"
                    id="mobile-menu"
                    hidden={!isMenuOpened}
                >
                    <div className="">
                        <a
                            href="#"
                            className="block rounded-md bg-gray-800 px-3 py-2 text-base font-medium text-white"
                            aria-current="page"
                        >
                            Dashboard
                        </a>
                        <a
                            href="#"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Team
                        </a>
                        <a
                            href="#"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Projects
                        </a>
                        <a
                            href="#"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Calendar
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export { Header };
