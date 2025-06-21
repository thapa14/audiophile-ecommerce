import { Icon } from '@iconify/react';
import { useCartContext } from 'entities/cart';
import { ProductCategoryList } from 'features/product-category-list';
import { type FC } from 'react';
import { Link } from 'react-router';
import logo from '/assets/logo/logo.svg';
import { navEnums } from 'shared/config';
import { useHeader } from 'widgets/header/modal';

const Header: FC = () => {
    const { isMenuOpened, toggleMenu, setIsMenuOpened, navigateToHome } = useHeader();
    const { showCart, cartItems } = useCartContext();

    const cartLength = cartItems.length;

    return (
        <div className="border-stroke fixed top-0 z-50 flex h-[90px] w-full items-center justify-between border-b-[0.5px] bg-black text-white">
            <div className="relative h-full w-full">
                <nav className="container flex h-full items-center">
                    <div className="mx-auto w-full">
                        <div className="relative flex items-center justify-between">
                            <div className="absolute left-0 flex items-center lg:hidden">
                                {/*// <!-- Mobile menu button-->*/}
                                <button
                                    type="button"
                                    className="relative inline-flex cursor-pointer items-center justify-center rounded-md text-white"
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

                            <div className="flex flex-1 items-center justify-center md:ml-10 md:justify-start lg:ml-0 lg:justify-start">
                                <div className="flex shrink-0 items-center">
                                    <img
                                        className="h-8 w-36 cursor-pointer"
                                        src={logo}
                                        alt="Company Logo"
                                        onClick={navigateToHome}
                                    />
                                </div>
                                <div className="hidden sm:ml-6 lg:block">
                                    <div className="flex space-x-4">
                                        {/*// <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->*/}
                                        {Object.entries(navEnums).map(([name, link], index) => {
                                            return (
                                                <Link
                                                    to={link}
                                                    className="hover:text-peru rounded-md px-3 py-2 text-sm font-medium text-white capitalize"
                                                    aria-current="page"
                                                    key={index}
                                                >
                                                    {name}
                                                </Link>
                                            );
                                        })}
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
                                    {Boolean(cartLength) && (
                                        <div className="bg-peru absolute -top-1 -right-1 h-4 w-4 rounded-full text-xs font-bold text-white">
                                            {cartLength}
                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
                {/*// <!-- Mobile menu, show/hide based on menu state. -->*/}

                <div
                    className="fixed inset-0 top-[90px] z-50 bg-black/50 backdrop-opacity-50"
                    // className="absolute top-[90px] w-full bg-white py-6 text-black shadow-lg/30 md:py-15 lg:hidden"
                    id="mobile-menu"
                    hidden={!isMenuOpened}
                    onClick={() => {
                        setIsMenuOpened(false);
                    }}
                >
                    <div
                        className="max-h-[80vh] overflow-scroll bg-white text-black md:overflow-hidden md:p-15"
                        onClick={e => {
                            e.stopPropagation();
                        }}
                    >
                        <ProductCategoryList toggleMenu={toggleMenu} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Header };
