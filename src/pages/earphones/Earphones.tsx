// components
import { CategoryCard } from '../../components/CategoryCard'
import { DropdownMenu } from '../../components/DropdownMenu'
import { ModelGear } from '../../components/ModelGear'

// data
import data from '../../data/products.json'
export const Earphones = () => {
    return (
        <>
            <header className="md:text-tabletSubheader flex h-[102px] w-full flex-col justify-center bg-black text-center text-subHeader text-white md:h-[235px]">
                <h1>EARPHONES</h1>
            </header>
            <main className="flex flex-col items-center px-6 md:px-10">
                <div className="flex w-full max-w-[1100px] flex-col items-center">
                    {data.earphones.map((item, index) => (
                        <CategoryCard
                            key={item.id}
                            newProduct={item.newProduct}
                            productTitle={item.productName}
                            mobileImg={item.imgs.categoryMobile}
                            tabletImg={item.imgs.categoryTablet}
                            desktopImg={item.imgs.categoryDesktop}
                            productLink={item.link}
                            orderReversed={index % 2 === 0 ? false : true}
                        >
                            {item.description}
                        </CategoryCard>
                    ))}
                </div>
                <div className="mt-[100px] flex w-full flex-col items-center">
                    <DropdownMenu isDropDown={false} />
                    <ModelGear />
                </div>
            </main>
        </>
    )
}
