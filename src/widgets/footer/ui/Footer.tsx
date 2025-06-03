import type { FC } from 'react';
import logo from 'shared/assets/logo/logo.svg';
import { Icon } from '@iconify/react';

const Footer: FC = () => {
    return (
        <div className="w-full self-end bg-black text-white">
            <div className="container grid grid-cols-2 gap-9 py-8">
                <div className="order-1 col-span-2 flex justify-center md:justify-start lg:col-span-1">
                    <img className="h-8 w-36" src={logo} alt="Company Logo" />
                </div>
                <div className="order-2 col-span-2 flex flex-col items-center justify-center gap-4 uppercase md:flex-row md:justify-start lg:col-span-1 lg:justify-end">
                    {/*// <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->*/}
                    <a href="#" className="sub-title rounded-md" aria-current="page">
                        Dashboard
                    </a>
                    <a href="#" className="sub-title rounded-md">
                        Team
                    </a>
                    <a href="#" className="sub-title rounded-md">
                        Projects
                    </a>
                    <a href="#" className="sub-title rounded-md">
                        Calendar
                    </a>
                </div>
                <p className="order-3 col-span-2 text-center opacity-50 md:text-start lg:col-span-1">
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team
                    of music lovers and sound specialists who are devoted to helping you get the
                    most out of personal audio. Come and visit our demo facility - we’re open 7 days
                    a week.
                </p>

                <p className="order-4 col-span-2 text-center opacity-50 md:col-span-1 md:text-start lg:order-5">
                    Copyright 2021. All Rights Reserved
                </p>

                <div className="order-5 col-span-2 flex justify-center gap-2 self-end md:col-span-1 md:justify-end lg:order-4">
                    <Icon icon="uil:facebook" width="24" height="24" />
                    <Icon icon="mdi:twitter" width="24" height="24" />
                    <Icon icon="mdi:instagram" width="24" height="24" />
                </div>
            </div>
        </div>
    );
};

export { Footer };
