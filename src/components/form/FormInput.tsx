interface FormInputProps {
    placeholder: string
    label: string
}

export const FormInput = ({ placeholder, label }: FormInputProps) => {
    return (
        <div className="flex flex-col">
            <label className="text-label">{label}</label>
            <input
                className="mt-[9px] rounded-lg border border-[#CFCFCF] px-6 py-[18px] text-formInput placeholder:opacity-60 focus:border"
                placeholder={placeholder}
                type="text"
            />
        </div>
    )
}
