// components
import { DropdownMenu } from './DropdownMenu'
// svgs
import Hamburger from '../assets/shared/tablet/icon-hamburger.svg'
import Logo from '../assets/shared/desktop/logo.svg'
import Cart from '../assets/shared/desktop/icon-cart.svg'

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
                        src={Hamburger}
                        className="cursor-pointer xl:hidden"
                        alt=""
                        onClick={handleClick}
                    />
                    <img
                        src={Logo}
                        className="absolute left-1/2 -translate-x-1/2 cursor-pointer md:static md:ml-[42px] md:translate-x-0 xl:ml-0"
                        alt=""
                    />
                    <ul className="absolute left-1/2 hidden -translate-x-1/2 gap-[34px] text-link xl:flex">
                        <li className="cursor-pointer hover:text-nude-200">
                            HOME
                        </li>
                        <li className="cursor-pointer hover:text-nude-200">
                            HEADPHONES
                        </li>
                        <li className="cursor-pointer hover:text-nude-200">
                            SPEAKERS
                        </li>
                        <li className="cursor-pointer hover:text-nude-200">
                            EARPHONES
                        </li>
                    </ul>
                    <img
                        src={Cart}
                        className="absolute right-6 cursor-pointer md:right-[39px]"
                        alt=""
                    />
                </div>
                <span className="absolute bottom-0 left-0 right-0 mx-auto h-[1px] max-w-[1100px] border-0 bg-offBlack-200 md:w-[calc(100%-78px)]"></span>
            </nav>
            {/* dropdown menu */}
            <DropdownMenu isActive={isActive} isDropDown={true} />
            {/* <nav className={dropdownClasses}>
                <div className="relative flex h-[165px] w-full flex-col items-center justify-end rounded-lg bg-offWhite-100">
                    <img
                        className="absolute bottom-0 flex h-[165px] -translate-y-1/3"
                        src={Headphones}
                        alt=""
                    />
                    <h3 className="mb-[17px] text-menu">HEADPHONES</h3>
                    <div className="mb-6 flex cursor-pointer gap-[13.32px]">
                        <p className="text-shop opacity-50">SHOP</p>
                        <img
                            className="h-[10px] self-center"
                            src={Arrow}
                            alt=""
                        />
                    </div>
                </div>
                <div className="relative flex h-[165px] w-full flex-col items-center justify-end rounded-lg bg-offWhite-100">
                    <img
                        className="absolute bottom-0 flex h-[165px] -translate-y-1/3"
                        src={Speakers}
                        alt=""
                    />
                    <h3 className="mb-[17px] text-menu">SPEAKERS</h3>
                    <div className="mb-6 flex cursor-pointer gap-[13.32px]">
                        <p className="text-shop opacity-50">SHOP</p>
                        <img
                            className="h-[10px] self-center"
                            src={Arrow}
                            alt=""
                        />
                    </div>
                </div>
                <div className="relative flex h-[165px] w-full flex-col items-center justify-end rounded-lg bg-offWhite-100">
                    <img
                        className="absolute bottom-0 flex h-[165px] -translate-y-1/3"
                        src={Earphones}
                        alt=""
                    />
                    <h3 className="mb-[17px] text-menu">EARPHONES</h3>
                    <div className="mb-6 flex cursor-pointer gap-[13.32px]">
                        <p className="text-shop opacity-50">SHOP</p>
                        <img
                            className="h-[10px] self-center"
                            src={Arrow}
                            alt=""
                        />
                    </div>
                </div>
            </nav> */}
        </>
    )
}
