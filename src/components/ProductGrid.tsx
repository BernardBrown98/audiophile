import clsx from 'clsx'

// imgs
import MobileSpeaker from '../assets/home/mobile/image-speaker-zx9.png'
import TabletSpeaker from '../assets/home/tablet/image-speaker-zx9.png'
import DesktopSpeaker from '../assets/home/desktop/image-speaker-zx9.png'

export const ProductGrid = () => {
    return (
        <>
            <div className="relative mb-10 flex h-[600px] w-full max-w-[1100px] justify-center overflow-hidden rounded-lg bg-nude-200 md:h-[720px] xl:h-[560px] xl:justify-end xl:pr-[95px]">
                <div className="absolute flex w-full justify-center xl:bottom-0 xl:translate-x-[-150px]">
                    <i
                        style={
                            {
                                '--mobile': `url(${MobileSpeaker})`,
                                '--tablet': `url(${TabletSpeaker})`,
                                '--desktop': `url(${DesktopSpeaker})`,
                            } as React.CSSProperties
                        }
                        className="absolute top-[70px] z-50 h-[200px] w-[165px] bg-[url:--mobile] bg-contain bg-no-repeat md:h-[220px] md:w-[180px] md:bg-[url:--tablet] xl:bottom-[-12px] xl:top-[unset] xl:h-[475px] xl:w-[390px] xl:bg-[url--desktop]"
                    ></i>
                    <div className="absolute top-[40px] z-0 aspect-square w-[275px] rounded-[50%] border border-white opacity-30 md:top-[-45px] md:w-[470px] xl:bottom-[-75px] xl:top-[unset] xl:w-[472px]"></div>
                    <div className="absolute top-[17px] z-0 aspect-square w-[320px] rounded-[50%] border border-white opacity-30 md:top-[-80px] md:w-[540px] xl:bottom-[-110px] xl:top-[unset] xl:w-[542px]"></div>
                    <div className="absolute top-[-100px] z-0 aspect-square w-[555px] rounded-[50%] border border-white opacity-30 md:top-[-280px] md:w-[940px] xl:bottom-[-350px] xl:top-[unset] xl:w-[944px]"></div>
                </div>

                <div className="z-50 mb-[55px] flex max-w-[349px] flex-col items-center justify-end gap-6 text-center text-white md:gap-0 xl:mb-0 xl:items-start xl:justify-center xl:text-start">
                    <h1 className="text-mobileHeader md:mb-6 md:text-desktopHeader ">
                        ZX9 <br />
                        SPEAKER
                    </h1>
                    <p className="text-p md:mb-10">
                        Upgrade to premium speakers that are phenomenally built
                        to deliver truly remarkable sound.
                    </p>
                    <button className="bg-black px-[31.5px] py-[15px] text-shop transition-all ease-in-out hover:bg-offBlack-200">
                        SEE PRODUCT
                    </button>
                </div>
            </div>
        </>
    )
}
