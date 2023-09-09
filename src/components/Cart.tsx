import { ItemCounter } from './interactables/ItemCounter'

export const Cart = () => {
    return (
        <div className="fixed top-[113px] z-50 flex min-h-[486px] w-full flex-col items-center px-6">
            <div className="h-full w-full max-w-[377px] rounded-lg bg-white px-[28px]">
                <div className="mb-8 mt-8 flex flex-row justify-between">
                    <h3 className="text-price">{`CART (2)`}</h3>
                    <p className="cursor-pointer text-p underline opacity-50 hover:text-nude-200 hover:opacity-100">
                        Remove all
                    </p>
                </div>
                <section className="flex max-h-[256px] flex-col gap-8 overflow-y-scroll">
                    <div>
                        <div className="flex flex-row items-center">
                            <img
                                className=" mr-4 h-[64px] rounded-lg object-cover"
                                src="./assets/cart/image-xx59-headphones.jpg"
                                alt=""
                            />
                            <div className="mr-auto flex flex-col">
                                <h4 className="text-p ">XX99 MKII</h4>
                                <p className="text-p font-bold opacity-50">
                                    $2,999
                                </p>
                            </div>
                            <ItemCounter />
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-row items-center">
                            <img
                                className=" mr-4 h-[64px] rounded-lg object-cover"
                                src="./assets/cart/image-xx59-headphones.jpg"
                                alt=""
                            />
                            <div className="mr-auto flex flex-col">
                                <h4 className="text-p ">XX99 MKII</h4>
                                <p className="text-p font-bold opacity-50">
                                    $2,999
                                </p>
                            </div>
                            <ItemCounter />
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-row items-center">
                            <img
                                className=" mr-4 h-[64px] rounded-lg object-cover"
                                src="./assets/cart/image-xx59-headphones.jpg"
                                alt=""
                            />
                            <div className="mr-auto flex flex-col">
                                <h4 className="text-p ">XX99 MKII</h4>
                                <p className="text-p font-bold opacity-50">
                                    $2,999
                                </p>
                            </div>
                            <ItemCounter />
                        </div>
                    </div>
                </section>

                <div className="mt-8 flex flex-row justify-between">
                    <p className="text-p opacity-50">TOTAL</p>
                    <p className="text-p font-bold">$5,937</p>
                </div>
                <button className="mb-[31px] mt-6 w-full bg-nude-200 py-[15px] text-shop text-white transition-all ease-in-out hover:bg-nude-100">
                    SEE PRODUCT
                </button>
            </div>
        </div>
    )
}
