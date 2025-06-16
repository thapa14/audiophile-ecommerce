import { Icon } from '@iconify/react';
import { useCartContext } from 'entities/cart/modal/cartContext';
import { type FC } from 'react';
import { Link } from 'react-router';
import logo from 'shared/assets/logo/logo.svg';
import { useHeader } from 'widgets/header/modal';

const Header: FC = () => {
    const { isMenuOpened, toggleMenu } = useHeader();
    const { showCart } = useCartContext();

    return (
        <div className="border-stroke fixed top-0 z-50 flex h-[90px] w-full items-center justify-between border-b-[0.5px] bg-black text-white">
            <nav className="relative container flex h-full items-center">
                <div className="mx-auto w-full">
                    <div className="relative flex items-center justify-between">
                        <div className="absolute left-0 flex items-center lg:hidden">
                            {/*// <!-- Mobile menu button-->*/}
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center rounded-md text-white hover:bg-gray-700 hover:text-white"
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
                                    <Link
                                        to="/"
                                        className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                                        aria-current="page"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        to="/headphones"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Headphones
                                    </Link>
                                    <Link
                                        to="/earphones"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Earphones
                                    </Link>
                                    <Link
                                        to="/speakers"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Speakers
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button
                                aria-label="View cart"
                                type="button"
                                className="hover:text-peru relative cursor-pointer rounded-full text-white"
                                onClick={() => {
                                    showCart();
                                }}
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
                        <Link
                            to="/"
                            className="block rounded-md bg-gray-800 px-3 py-2 text-base font-medium text-white"
                            aria-current="page"
                        >
                            Home
                        </Link>
                        <Link
                            to="/headphones"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Headphones
                        </Link>
                        <Link
                            to="/earphones"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Earphones
                        </Link>
                        <Link
                            to="speakers"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Speakers
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export { Header };
