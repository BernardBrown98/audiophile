// hooks
import { NavLink } from 'react-router-dom'

// components
import { DropdownMenu } from './DropdownMenu'
import { Links } from './Links'
// svgs
import Hamburger from '../svgs/icon-hamburger.svg'
import Close from '../svgs/icon-close.svg'
import Logo from '../svgs/logo.svg'
import Cart from '../svgs/icon-cart.svg'

interface HeaderProps {
    isActive: boolean
    handleClick: () => void
}

export const Header = ({ isActive, handleClick }: HeaderProps) => {
    return (
        <>
            {/* navbar */}
            <nav className="fixed z-50 grid h-[89px] w-full bg-black text-white">
                <div className="relative mx-auto flex w-full max-w-[1178px] items-center px-6 md:px-[39px]">
                    <img
                        src={!isActive ? Hamburger : Close}
                        className="w aspect-square cursor-pointer xl:hidden"
                        alt="hamburger menu"
                        onClick={handleClick}
                    />
                    <NavLink to="/">
                        <img
                            src={Logo}
                            className="absolute left-1/2 -translate-x-1/2 cursor-pointer md:static md:ml-[42px] md:translate-x-0 xl:ml-0"
                            alt="audiophile logo"
                        />
                    </NavLink>

                    <ul className="absolute left-1/2 hidden -translate-x-1/2 gap-[34px] text-link xl:flex">
                        <Links />
                    </ul>
                    <img
                        src={Cart}
                        className="absolute right-6 cursor-pointer md:right-[39px]"
                        alt="shopping cart icon"
                    />
                </div>
                <span className="absolute bottom-0 left-0 right-0 mx-auto h-[1px] max-w-[1100px] border-0 bg-offBlack-200 md:w-[calc(100%-78px)]"></span>
            </nav>
            {/* dropdown menu */}
            <DropdownMenu
                isActive={isActive}
                isDropDown={true}
                handleClick={handleClick}
            />
        </>
    )
}
