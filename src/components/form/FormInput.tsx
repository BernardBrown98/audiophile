interface FormInputProps {
    type?: 'password' | 'radio' | 'email'
    checked?: boolean
    className?: string
    placeholder: string
    label: string
    name: string
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormInput = ({
    type,
    checked,
    className,
    placeholder,
    label,
    handleChange,
    name,
    value,
}: FormInputProps) => {
    return type !== 'radio' ? (
        // type !== 'radio' ...
        <label className={`flex flex-col text-label ${className}`}>
            {label}
            <input
                value={value}
                name={name}
                className="mt-[9px] rounded-lg border border-[#CFCFCF] px-6 py-[18px] text-formInput placeholder:opacity-60 focus:border"
                onChange={handleChange}
                placeholder={placeholder}
                type={type}
                checked={checked}
            />
        </label>
    ) : (
        // type === 'radio' ...
        <label
            className={`radio circle flex rounded-lg border px-6 py-[18px] text-formInput ${
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
    )
}
