// components
import { ProductDetails } from '../components/ProductDetails'
import { DropdownMenu } from '../components/DropdownMenu'
import { ModelGear } from '../components/ModelGear'
// product imgs
import Mobile from '../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg'
import Tablet from '../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg'
import Desktop from '../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'

export const XX99MarkII = () => {
    return (
        <main className="flex flex-col items-center px-6 md:px-10">
            <div className="w-full max-w-[1100px]">
                <ProductDetails
                    newProduct
                    productTitle="XX99 Mark II Headphones"
                    mobileImg={Mobile}
                    tabletImg={Tablet}
                    desktopImg={Desktop}
                    price={2999}
                >
                    The new XX99 Mark II headphones is the pinnacle of pristine
                    audio. It redefines your premium headphone experience by
                    reproducing the balanced depth and precision of
                    studio-quality sound.
                </ProductDetails>
            </div>
            <div className="mt-[100px] flex w-full flex-col items-center">
                <DropdownMenu isDropDown={false} />
                <ModelGear />
            </div>
        </main>
    )
}
