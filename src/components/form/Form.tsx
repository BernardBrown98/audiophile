// components
import { Summary } from './Summary'
import { FormInput } from './FormInput'
// hooks
import { useState } from 'react'
// svgs
import CashOnDelivery from '../../svgs/icon-cash-on-delivery.svg'

type Input = {
    [name: string]: string
}

type Validation = {
    [index: string]: (input: string) => boolean
}

export const Form = () => {
    const [inputs, setInput] = useState<Input>({ payment: 'e-money' })
    const isEMoney = inputs.payment === 'e-money'

    const validations: Validation = {
        email: (input: string): boolean => /^\S+@\S+\.\S+$/.test(input),
        number: (input: string): boolean =>
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
                input
            ),
        zip: (input: string): boolean =>
            /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(input),
        eNumber: (input: string): boolean => /\d{9}/.test(input),
        ePin: (input: string): boolean => /\d{4}/.test(input),
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name
        const value = event.target.value

        setInput((prevInput) => {
            return { ...prevInput, [name]: value }
        })
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mb-[97px] flex flex-col md:mb-[116px] xl:mb-[140px] xl:flex-row xl:gap-[30px]"
        >
            <div className="grow rounded-lg bg-white p-[24px_24px_30px] shadow-lg md:p-[30px_27px] xl:p-[54px_48px_48px]">
                <h2 className="text-subHeader tracking-[1px]  md:text-desktopSubheader">
                    CHECKOUT
                </h2>
                <div className="mt-8 md:mt-10">
                    <h3 className="text-link tracking-[0.929px] text-nude-200">
                        BILLING DETAILS
                    </h3>
                    <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2">
                        <FormInput
                            name="name"
                            label="Name"
                            placeholder="Ken Williams"
                            handleChange={handleChange}
                            value={inputs.name || ''}
                            errorMsg="Invalid Name"
                        />
                        <FormInput
                            name="email"
                            type="email"
                            label="Email Address"
                            placeholder="kenwill@mail.com"
                            handleChange={handleChange}
                            value={inputs.email || ''}
                            errorMsg="Wrong Format"
                            hasError={!validations.email(inputs.email)}
                        />
                        <FormInput
                            name="number"
                            type="tel"
                            label="Phone Number"
                            placeholder="+1 786-222-0123"
                            handleChange={handleChange}
                            value={inputs.number || ''}
                            errorMsg="Invalid Number"
                            hasError={!validations.number(inputs.number)}
                        />
                        {/* <FormInput label="Email Address" placeholder="username" /> */}
                        {/* <FormInput label="Phone Number" placeholder="username" /> */}
                    </div>
                </div>
                <div className="mt-8 md:mt-10">
                    <h3 className="text-link tracking-[0.929px] text-nude-200">
                        SHIPPING INFO
                    </h3>
                    <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2">
                        <FormInput
                            className="md:col-[span_2]"
                            name="address"
                            label="Your Address"
                            placeholder="1800 Mcnab Avenue"
                            handleChange={handleChange}
                            value={inputs.address || ''}
                        />
                        <FormInput
                            name="zip"
                            label="ZIP Code"
                            placeholder="32382"
                            handleChange={handleChange}
                            value={inputs.zip || ''}
                            errorMsg="Wrong Format"
                            hasError={!validations.zip(inputs.zip)}
                        />
                        <FormInput
                            name="city"
                            label="City"
                            placeholder="Delray"
                            handleChange={handleChange}
                            value={inputs.city || ''}
                        />
                        <FormInput
                            name="country"
                            label="Country"
                            placeholder="United States"
                            handleChange={handleChange}
                            value={inputs.country || ''}
                        />
                        {/* <FormInput label="Email Address" placeholder="username" /> */}
                        {/* <FormInput label="Phone Number" placeholder="username" /> */}
                    </div>
                </div>
                <div className="mt-8 md:mt-10">
                    <h3 className="text-link tracking-[0.929px] text-nude-200">
                        PAYMENT DETAILS
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <h4 className="mt-4 text-label">Payment Method</h4>
                        <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-6 ">
                            <FormInput
                                name="payment"
                                label="e-Money"
                                handleChange={handleChange}
                                value={'e-money'}
                                type="radio"
                                checked={isEMoney}
                            />
                            <FormInput
                                name="payment"
                                label="Cash On Delivery"
                                handleChange={handleChange}
                                value={'cash'}
                                type="radio"
                                checked={!isEMoney}
                            />
                            {/* <FormInput label="Email Address" placeholder="username" /> */}
                            {/* <FormInput label="Phone Number" placeholder="username" /> */}
                        </div>
                    </div>
                    {isEMoney && (
                        <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-6">
                            <FormInput
                                name="eNumber"
                                type="number"
                                label="e-Money Number"
                                placeholder="736421993"
                                handleChange={handleChange}
                                value={inputs.eNumber?.slice(0, 9) || ''}
                                errorMsg="Wrong Format"
                                hasError={!validations.eNumber(inputs.eNumber)}
                            />
                            <FormInput
                                name="ePin"
                                type="number"
                                label="e-Money PIN"
                                placeholder="3256"
                                handleChange={handleChange}
                                value={inputs.ePin?.slice(0, 4) || ''}
                                errorMsg="Wrong Format"
                                hasError={!validations.ePin(inputs.ePin)}
                            />
                            {/* <FormInput label="Email Address" placeholder="username" /> */}
                            {/* <FormInput label="Phone Number" placeholder="username" /> */}
                        </div>
                    )}
                    {!isEMoney && (
                        <div className="mt-[30px] flex items-center gap-8">
                            <img src={CashOnDelivery} alt="" />
                            <p className="text-p opacity-60">
                                The ‘Cash on Delivery’ option enables you to pay
                                in cash when our delivery courier arrives at
                                your residence. Just make sure your address is
                                correct so that your order will not be
                                cancelled.
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <Summary isEMoney={isEMoney} />
        </form>
    )
}
