interface FormInputProps {
    className?: string
    placeholder: string
    label: string
    name: string
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormInput = ({
    className,
    placeholder,
    label,
    handleChange,
    name,
    value,
}: FormInputProps) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <label className="text-label">{label}</label>
            <input
                value={value}
                name={name}
                className="mt-[9px] rounded-lg border border-[#CFCFCF] px-6 py-[18px] text-formInput placeholder:opacity-60 focus:border"
                onChange={handleChange}
                placeholder={placeholder}
                type="text"
            />
        </div>
    )
}
