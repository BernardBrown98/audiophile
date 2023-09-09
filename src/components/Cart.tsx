export const Cart = () => {
    return (
        <div className="fixed top-[113px] z-40 flex h-full max-h-[486px] w-full flex-col items-center px-6 ">
            <div className="h-full w-full max-w-[377px] rounded-lg bg-white px-[28px]">
                <div className="mt-8 flex flex-row justify-between">
                    <h3 className="text-price">{`CART (2)`}</h3>
                    <p className="cursor-pointer text-p underline opacity-50 hover:text-nude-200 hover:opacity-100">
                        Remove all
                    </p>
                </div>

                <div className="mt-8">
                    <div className="flex flex-row">
                        <img
                            className=" h-[64px] rounded-lg object-cover"
                            src="./assets/cart/image-xx59-headphones.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
