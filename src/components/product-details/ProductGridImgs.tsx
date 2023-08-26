interface ProdcutGridImgsProps {
    DesktopGridGallery1: string
    TabletGridGallery1: string
    MobileGridGallery1: string
    DesktopGridGallery2: string
    TabletGridGallery2: string
    MobileGridGallery2: string
    DesktopGridGallery3: string
    TabletGridGallery3: string
    MobileGridGallery3: string
}

export const ProductGridImgs = ({
    DesktopGridGallery1,
    TabletGridGallery1,
    MobileGridGallery1,
    DesktopGridGallery2,
    TabletGridGallery2,
    MobileGridGallery2,
    DesktopGridGallery3,
    TabletGridGallery3,
    MobileGridGallery3,
}: ProdcutGridImgsProps) => {
    return (
        <div className="mt-[88px] grid grid-cols-1 grid-rows-[repeat(2,_174px)_368px] gap-5 md:grid-cols-2 md:grid-rows-[repeat(2,_174px)] xl:grid-rows-[repeat(2,280px)]">
            <picture className="max-h-full w-full rounded-lg">
                <source
                    srcSet={DesktopGridGallery1}
                    media="(min-width: 1280px)"
                />
                <source
                    srcSet={TabletGridGallery1}
                    media="(min-width: 768px)"
                />
                <img
                    className="h-full max-h-full w-full rounded-lg object-cover"
                    src={MobileGridGallery1}
                    alt="Product img"
                />
            </picture>
            <picture className="max-h-full w-full rounded-lg">
                <source
                    srcSet={DesktopGridGallery2}
                    media="(min-width: 1280px)"
                />
                <source
                    srcSet={TabletGridGallery2}
                    media="(min-width: 768px)"
                />
                <img
                    className=" h-full max-h-full w-full rounded-lg object-cover"
                    src={MobileGridGallery2}
                    alt="Product img"
                />
            </picture>
            <picture className="max-h-full w-full rounded-lg md:col-start-2 md:row-span-2 md:row-end-3">
                <source
                    srcSet={DesktopGridGallery3}
                    media="(min-width: 1280px)"
                />
                <source
                    srcSet={TabletGridGallery3}
                    media="(min-width: 768px)"
                />
                <img
                    className="h-full max-h-full w-full rounded-lg object-cover"
                    src={MobileGridGallery3}
                    alt="Product img"
                />
            </picture>
        </div>
    )
}
