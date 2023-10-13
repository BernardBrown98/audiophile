// components
import { FormInput } from './FormInput'

export const Form = () => {
    return (
        <form className="px-6 md:px-7 xl:px-12">
            <h2 className="mt-6 text-subHeader tracking-[1px] md:mt-[30px] md:text-desktopSubheader xl:mt-[54px]">
                CHECKOUT
            </h2>
            <div className="mt-8 md:mt-10">
                <h3 className="text-link tracking-[0.929px] text-nude-200">
                    BILLING DETAILS
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2">
                    <FormInput label="Name" placeholder="username" />
                    <FormInput label="Email Address" placeholder="username" />
                    <FormInput label="Phone Number" placeholder="username" />
                </div>
            </div>
        </form>
    )
}
