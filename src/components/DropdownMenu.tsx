import clsx from 'clsx'
// svgs
import Arrow from '../assets/shared/desktop/icon-arrow-right.svg'
// imgs
import Headphones from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import Speakers from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import Earphones from '../assets/shared/desktop/image-category-thumbnail-earphones.png'

interface DropdownMenuProps {
    isActive: boolean
    isDropDown: boolean
}

export const DropdownMenu = ({ isActive, isDropDown }: DropdownMenuProps) => {
    const dropdownClasses = clsx(
        'z-40 flex w-full flex-col items-center gap-[68px] rounded-b-lg bg-white md:flex-row md:gap-[10px] xl:gap-[30px]',
        {
            // styles for non-dropodwn menu
            'my-[120px] max-w-[1100px] md:my-24 xl:mt-32': !isDropDown,
            // styles for dropdown menu when its not active
            'fixed top-[-750px] px-6 pb-[35px] pt-[84px] transition-all ease-in-out md:px-10 md:pb-[67px] md:pt-[108px]':
                isDropDown,
            // styles for dropdown menu when its not active

            'translate-y-[839px] md:top-[-251px] md:translate-y-[340px]':
                isActive && isDropDown,
        }
    )

    return (
        <nav className={dropdownClasses}>
            <div className="relative flex h-[165px] w-full flex-col items-center justify-end rounded-lg bg-offWhite-100">
                <img
                    className="absolute bottom-0 flex h-[165px] -translate-y-1/3"
                    src={Headphones}
                    alt=""
                />
                <h3 className="mb-[17px] text-menu">HEADPHONES</h3>
                <div className="mb-6 flex cursor-pointer gap-[13.32px]">
                    <p className="text-shop opacity-50">SHOP</p>
                    <img className="h-[10px] self-center" src={Arrow} alt="" />
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
                    <img className="h-[10px] self-center" src={Arrow} alt="" />
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
                    <img className="h-[10px] self-center" src={Arrow} alt="" />
                </div>
            </div>
        </nav>
    )
}
