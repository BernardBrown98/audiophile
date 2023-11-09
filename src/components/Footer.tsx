// router components
import { NavLink } from 'react-router-dom'

// components
import { Links } from './Links'

// icons & logo
import Logo from '../svgs/logo.svg'
import { ReactComponent as Facebook } from '../svgs/icon-facebook.svg'
import { ReactComponent as Twitter } from '../svgs/icon-twitter.svg'
import { ReactComponent as Instagram } from '../svgs/icon-instagram.svg'

export const Footer = () => {
    return (
        <div className="flex w-full max-w-[1100px] flex-col text-white">
            <span className="ml-6 h-[4px] w-[100px] self-center border-0 bg-nude-200 md:ml-[39px] md:self-start"></span>
            <div className="relative mt-[52px] flex flex-col gap-12 px-6 md:px-[39px] xl:mt-[75px]">
                <NavLink to="/">
                    <img
                        className="mx-auto h-[25px] w-[143px] cursor-pointer md:mx-[unset]"
                        src={Logo}
                        alt="udiophile logo"
                    />
                </NavLink>
                <ul className="flex flex-col items-center gap-4 text-link md:mt-8 md:flex-row md:gap-8 xl:absolute xl:right-0 xl:mt-0">
                    <Links />
                </ul>
                <p className="max-w-[689px] text-center text-p opacity-50 md:mb-[32px] md:text-start xl:mb-2 xl:max-w-[540px]">
                    Audiophile is an all in one stop to fulfill your audio
                    needs. We're a small team of music lovers and sound
                    specialists who are devoted to helping you get the most out
                    of personal audio. Come and visit our demo facility - we’re
                    open 7 days a week.
                </p>
                <p className="text-center text-p opacity-50 md:text-start">
                    Copyright 2023. All Rights Reserved
                </p>
                <div className="mx-auto flex flex-row items-center gap-5 md:absolute md:bottom-0 md:right-[39px] xl:bottom-[52px]">
                    <Facebook className="cursor-pointer fill-white transition-all ease-in-out hover:-translate-y-1 hover:scale-110 hover:fill-nude-200" />
                    <Twitter className="cursor-pointer fill-white transition-all ease-in-out hover:-translate-y-1 hover:scale-110 hover:fill-nude-200" />
                    <Instagram className="cursor-pointer fill-white transition-all ease-in-out hover:-translate-y-1 hover:scale-110 hover:fill-nude-200" />
                </div>
            </div>
        </div>
    )
}
