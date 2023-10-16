// components
import { useState } from 'react'
import { FormInput } from './FormInput'

type input = {
    [name: string]: string
}

export const Form = () => {
    const [inputs, setInput] = useState<input>({})
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(inputs)
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name
        const value = event.target.value
        setInput((prevInput) => {
            return { ...prevInput, [name]: value }
        })
    }
    console.log(inputs)

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-lg bg-white p-[24px_24px_30px] shadow-lg md:p-[30px_27px] xl:p-[54px_48px_48px]"
        >
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
                    />
                    <FormInput
                        name="email"
                        label="Email Address"
                        placeholder="kenwill@mail.com"
                        handleChange={handleChange}
                        value={inputs.email || ''}
                    />
                    <FormInput
                        name="number"
                        label="Phone Number"
                        placeholder="+1 786-222-0123"
                        handleChange={handleChange}
                        value={inputs.number || ''}
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
        </form>
    )
}
