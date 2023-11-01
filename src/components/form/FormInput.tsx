interface FormInputProps {
    type?: 'tel' | 'radio' | 'email' | 'number'
    checked?: boolean
    className?: string
    placeholder?: string
    label: string
    errorMsg?: string
    name: string
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    error?: boolean
    maxLength?: number
}

export const FormInput = ({
    type,
    checked,
    className,
    placeholder,
    label,
    errorMsg,
    handleChange,
    name,
    value,
    error,
}: FormInputProps) => {
    return type !== 'radio' ? (
        // type !== 'radio' ...
        <label
            className={`group relative flex cursor-pointer flex-col text-label ${className} ${
                error && value === '' && 'text-black'
            } ${error && value !== '' && 'text-error focus-within:text-black'}`}
        >
            {label}

            <input
                value={value}
                name={name}
                className={`group peer mt-[9px] cursor-pointer rounded-lg border-[1.7px] border-[#CFCFCF]  px-6 py-[18px] text-formInput text-black caret-nude-200 outline-none placeholder:opacity-60  focus:border-nude-200 active:border-nude-200 ${
                    error && value !== '' ? 'border-error' : 'border-[#CFCFCF]'
                }`}
                onChange={handleChange}
                placeholder={placeholder}
                type={type}
                checked={checked}
                required
            />
            {error && (
                <span className="absolute right-0 text-error peer-placeholder-shown:hidden peer-focus:hidden">
                    {errorMsg}
                </span>
            )}
        </label>
    ) : (
        // type === 'radio' ...
        <div>
            <label
                className={`radio circle flex cursor-pointer items-center rounded-lg border py-[18px] pl-4 text-formInput hover:border-nude-200 ${
                    checked && 'border-nude-200'
                }`}
            >
                <span className="relative mr-4 h-[20px] w-[20px] rounded-[50%] border-2">
                    {checked && (
                        <span className="absolute left-1/2 top-1/2 h-[10px] w-[10px] translate-x-[-50%] translate-y-[-50%] rounded-[50%] bg-nude-200"></span>
                    )}
                </span>
                <input
                    value={value}
                    name="payment"
                    className="hidden"
                    onChange={handleChange}
                    // placeholder={placeholder}
                    type={'radio'}
                    checked={checked}
                />
                {label}
            </label>
        </div>
    )
}
