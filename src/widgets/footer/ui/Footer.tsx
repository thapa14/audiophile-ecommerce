import { Icon } from '@iconify/react';
import type { FC } from 'react';
import { Link } from 'react-router';
import logo from '/assets/logo/logo.svg';
import { navEnums } from 'shared/config/navEnums';

const Footer: FC = () => {
    return (
        <div className="w-full self-end bg-black text-white">
            <div className="container grid grid-cols-2 gap-y-12 py-8 md:gap-y-8 lg:gap-y-9">
                <div className="order-1 col-span-2 flex justify-center md:justify-start lg:col-span-1">
                    <img className="h-8 w-36" src={logo} alt="Company Logo" />
                </div>
                <div className="order-2 col-span-2 flex flex-col items-center justify-center gap-4 uppercase md:flex-row md:justify-start lg:col-span-1 lg:justify-end">
                    {/*// <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->*/}

                    {Object.entries(navEnums).map(([name, link], index) => {
                        return (
                            <Link
                                to={link}
                                className="sub-title hover:text-peru rounded-md"
                                aria-current="page"
                                key={index}
                            >
                                {name}
                            </Link>
                        );
                    })}
                </div>
                <p className="order-3 col-span-2 text-center opacity-50 md:text-start lg:col-span-1">
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team
                    of music lovers and sound specialists who are devoted to helping you get the
                    most out of personal audio. Come and visit our demo facility - we’re open 7 days
                    a week.
                </p>

                <p className="lg- order-4 col-span-2 text-center opacity-50 md:col-span-1 md:mt-12 md:text-start lg:order-5 lg:mt-5">
                    Copyright 2021. All Rights Reserved
                </p>

                <div className="order-5 col-span-2 flex justify-center gap-2 self-end md:col-span-1 md:mt-12 md:justify-end lg:order-4">
                    <Icon icon="uil:facebook" width="24" height="24" />
                    <Icon icon="mdi:twitter" width="24" height="24" />
                    <Icon icon="mdi:instagram" width="24" height="24" />
                </div>
            </div>
        </div>
    );
};

export { Footer };
