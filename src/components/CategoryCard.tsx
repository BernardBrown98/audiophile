import clsx from 'clsx'

interface CategoryCardProps {
    children: React.ReactNode
    newProduct?: true
    productTitle: string
    orderReversed?: true
    mobileImg: string
    tabletImg: string
    desktopImg: string
}

export const CategoryCard = ({
    children,
    newProduct,
    productTitle,
    orderReversed,
    mobileImg,
    tabletImg,
    desktopImg,
}: CategoryCardProps) => {
    const pcitureClasses = clsx(
        'flex w-full flex-col items-center rounded-lg bg-offWhite-300 xl:w-1/2',
        { 'xl:order-last': orderReversed }
    )

    return (
        <div className="mt-16 flex w-full flex-col md:mt-[120px] xl:mt-[160px] xl:flex-row xl:gap-[125px]">
            <picture className={pcitureClasses}>
                <source srcSet={desktopImg} media="(min-width: 1280px)" />
                <source srcSet={tabletImg} media="(min-width: 768px)" />
                <img
                    className="h-[352px] w-auto rounded-lg object-cover xl:h-[560px]"
                    src={mobileImg}
                    alt="category card img"
                />
            </picture>
            <div className="mt-8 flex flex-col items-center text-center md:mt-[52px] xl:mt-0 xl:w-1/2 xl:items-start xl:justify-center xl:text-start">
                {newProduct && (
                    <h2 className="mb-6 max-w-[384px] text-newProduct text-nude-200 md:mb-4">
                        NEW PRODUCT
                    </h2>
                )}
                <h3 className="mb-6 max-w-[384px] text-subHeader md:mb-8 md:text-tabletSubHeader xl:max-w-[300px]">
                    {productTitle}
                </h3>
                <p className="mb-6 max-w-[573px] text-p opacity-50 xl:mb-10 xl:max-w-[445px]">
                    {children}
                </p>
                <button className="bg-nude-200 px-[31.5px] py-[15px] text-shop text-white transition-all ease-in-out hover:bg-nude-100">
                    SEE PRODUCT
                </button>
            </div>
        </div>
    )
}
