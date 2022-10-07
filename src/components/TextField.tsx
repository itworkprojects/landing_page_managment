import React from 'react'
import Label from "./Label"
type ITextInput = {
    placeholder: string
    value: string
    label: string
    type: React.HTMLInputTypeAttribute
    name: string
    required: boolean
    onChange: React.FormEventHandler<HTMLInputElement>
    classNameBox?: string
    disabled?:boolean
    classNameInput?: string
}
const TextInput = ({
    type,
    placeholder,
    label,
    onChange,
    name,
    required,
    disabled,
    value,
    classNameBox,
    classNameInput,
}: ITextInput) => {
    return (
        <div className={`flex flex-col mt-6 ` + classNameBox}>
            <Label>
                {label}
            </Label>
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                name={name}
                required={required}
                className={
                    `
                border-2 
                outline:none
                shadow-md
                focus:outline-none
                text-gray-700
                font-RMedium
                bg-white
                leading-tight
                px-2 p-2 
                rounded-2xl 
                disabled:opacity-80
                -z-40
                ` + classNameInput
                }
                disabled={disabled}
            />
        </div>
    )
}

TextInput.defaultProps = {
    placeholder: 'Required placeholder',
    type: 'text',
    required: false,
    disabled:false
}

export default TextInput
