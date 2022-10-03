import React from 'react'

type ITextInput = {
    placeholder: string
    value: string
    label: string
    type: React.HTMLInputTypeAttribute
    name: string
    required: boolean
    onChange: React.FormEventHandler<HTMLInputElement>
    classNameBox?: string
    classNameInput?: string
}
const TextInput = ({
    type,
    placeholder,
    label,
    onChange,
    name,
    required,
    value,
    classNameBox,
    classNameInput,
}: ITextInput) => {
    return (
        <div className={`flex flex-col mt-6 ` + classNameBox}>
            <label className='text-gray-300 font-bold text-left'>
                {label}
            </label>
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
                shadow appearance-none 
                outline:none
                focus:outline-none
                text-gray-700
                font-RMedium
                bg-white
                leading-tight
                px-2 p-2 
                rounded-2xl ` + classNameInput
                }
            />
        </div>
    )
}

TextInput.defaultProps = {
    placeholder: 'Required placeholder',
    type: 'text',
    required: false,
}

export default TextInput
