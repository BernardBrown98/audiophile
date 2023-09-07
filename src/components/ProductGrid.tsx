// router components
import { Link } from 'react-router-dom'
// zx9 imgs
import ZX9MobileSpeaker from '/assets/home/mobile/image-speaker-zx9.png'
import ZX9TabletSpeaker from '/assets/home/tablet/image-speaker-zx9.png'
import ZX9DesktopSpeaker from '/assets/home/desktop/image-speaker-zx9.png'
// zx7 speakers
import ZX7MobileSpeaker from '/assets/home/mobile/image-speaker-zx7.jpg'
import ZX7TabletSpeaker from '/assets/home/tablet/image-speaker-zx7.jpg'
import ZX7DesktopSpeaker from '/assets/home/desktop/image-speaker-zx7.jpg'
// yx1 earphones
import YX1MobileEarphones from '/assets/home/mobile/image-earphones-yx1.jpg'
import YX1TabletEarphones from '/assets/home/tablet/image-earphones-yx1.jpg'
import YX1DesktopEarphones from '/assets/home/desktop/image-earphones-yx1.jpg'

export const ProductGrid = () => {
    return (
        <>
            <div className="mx-auto mb-[120px] flex w-full max-w-[1100px] flex-col items-center gap-6 md:mb-24 md:gap-[32px] xl:mb-[150px] xl:gap-12">
                {/* zx9 speaker */}
                <div className="relative flex h-[600px] w-full justify-center overflow-hidden rounded-lg bg-nude-200 md:h-[720px] xl:h-[560px] xl:justify-end xl:pr-[95px]">
                    <div className="absolute flex w-full justify-center xl:bottom-0 xl:translate-x-[-150px]">
                        <i
                            style={
                                {
                                    '--mobile': `url(${ZX9MobileSpeaker})`,
                                    '--tablet': `url(${ZX9TabletSpeaker})`,
                                    '--desktop': `url(${ZX9DesktopSpeaker})`,
                                } as React.CSSProperties
                            }
                            className="absolute top-[70px] z-40 h-[200px] w-[165px] bg-[url:--mobile] bg-contain bg-no-repeat md:h-[220px] md:w-[180px] md:bg-[url:--tablet] xl:bottom-[-12px] xl:top-[unset] xl:h-[475px] xl:w-[390px] xl:bg-[url--desktop]"
                        ></i>
                        <div className="absolute top-[40px] z-0 aspect-square w-[275px] rounded-[50%] border border-white opacity-30 md:top-[-45px] md:w-[470px] xl:bottom-[-75px] xl:top-[unset] xl:w-[472px]"></div>
                        <div className="absolute top-[17px] z-0 aspect-square w-[320px] rounded-[50%] border border-white opacity-30 md:top-[-80px] md:w-[540px] xl:bottom-[-110px] xl:top-[unset] xl:w-[542px]"></div>
                        <div className="absolute top-[-100px] z-0 aspect-square w-[555px] rounded-[50%] border border-white opacity-30 md:top-[-280px] md:w-[940px] xl:bottom-[-350px] xl:top-[unset] xl:w-[944px]"></div>
                    </div>

                    <div className="z-40 mb-[55px] flex max-w-[349px] flex-col items-center justify-end gap-6 text-center text-white md:gap-0 xl:mb-0 xl:items-start xl:justify-center xl:text-start">
                        <h2 className="text-mobileHeader md:mb-6 md:text-desktopHeader ">
                            ZX9 <br />
                            SPEAKER
                        </h2>
                        <p className="text-p opacity-75 md:mb-10">
                            Upgrade to premium speakers that are phenomenally
                            built to deliver truly remarkable sound.
                        </p>
                        <Link
                            to="/speakers/zx9"
                            className="bg-black px-[31.5px] py-[15px] text-shop transition-all ease-in-out hover:bg-offBlack-200"
                        >
                            SEE PRODUCT
                        </Link>
                    </div>
                </div>
                {/* zx7 speaker */}
                <div
                    style={
                        {
                            '--mobile': `url(${ZX7MobileSpeaker})`,
                            '--tablet': `url(${ZX7TabletSpeaker})`,
                            '--desktop': `url(${ZX7DesktopSpeaker})`,
                        } as React.CSSProperties
                    }
                    className="h-[320px] w-full rounded-lg bg-[url:--mobile] bg-cover bg-center bg-no-repeat md:bg-[url:--tablet] xl:bg-[url:--desktop]"
                >
                    <div className="flex h-full flex-col items-start justify-center gap-8 pl-6 text-black md:pl-[62px]">
                        <h3 className="text-subHeader md:mb-6">ZX7 SPEAKER</h3>
                        <Link
                            to="/speakers/zx7"
                            className="border-[1.5px] border-black px-[31.5px] py-[15px] text-shop transition-all ease-in-out hover:bg-black hover:text-white"
                        >
                            SEE PRODUCT
                        </Link>
                    </div>
                </div>
                {/* yx1 earphones */}
                <div className="flex w-full flex-col gap-6 md:flex-row md:gap-[11px] xl:gap-[30px]">
                    <i
                        style={
                            {
                                '--mobile': `url(${YX1MobileEarphones})`,
                                '--tablet': `url(${YX1TabletEarphones})`,
                                '--desktop': `url(${YX1DesktopEarphones})`,
                            } as React.CSSProperties
                        }
                        className="h-[200px] w-full rounded-lg bg-[url:--mobile] bg-cover bg-center bg-no-repeat md:w-1/2 md:bg-[url:tablet] xl:bg-[url:--desktop]"
                    ></i>
                    <div className="flex h-[200px] flex-col items-start justify-center gap-8 rounded-lg bg-offWhite-100 pl-6 text-black md:w-1/2 md:pl-[42px] xl:pl-[96px]">
                        <h3 className="text-subHeader md:mb-6">
                            YX1 EARPHONES
                        </h3>
                        <Link
                            to="/earphones/yx1"
                            className="border-[1.5px] border-black px-[31.5px] py-[15px] text-shop transition-all ease-in-out hover:bg-black hover:text-white"
                        >
                            SEE PRODUCT
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
