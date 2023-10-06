import { useNavigate } from 'react-router-dom'

export const Checkout = () => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center px-6 md:px-10">
            <div className="w-full max-w-[1100px]">
                <p
                    onClick={() => navigate(-1)}
                    className="mb-6 mt-4 cursor-pointer text-p opacity-50 md:mt-[33px] xl:mb-14 xl:mt-[79px]"
                >
                    Go Back
                </p>
                <form className="px-6 md:px-7 xl:px-12">
                    <h2 className="mt-6 text-subHeader  md:mt-[30px] md:text-desktopSubheader xl:mt-[54px]">
                        CHECKOUT
                    </h2>
                    <h3 className="mt-8 text-nude-200 md:mt-10">
                        BILLING DETAILS
                    </h3>
                </form>
            </div>
        </div>
    )
}
