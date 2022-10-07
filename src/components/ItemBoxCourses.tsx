import React from 'react';

type IItemBoxCourses = {
    value: string;
    name: string;
    defaultValue: string;
    data: IOption[];
    label: string;
    onChange: React.FormEventHandler<HTMLSelectElement>;
    classNameGeneral?: string;
    required?: boolean;
    classNameInput?: string;
};

type IOption = {
    key?: number;
    id?: number;
    description: string;
};

const ItemBoxCourses = ({
    value,
    name,
    label,
    defaultValue,
    classNameGeneral,
    data,
    required,
    onChange,
    classNameInput,
}: IItemBoxCourses) => {
    const ItemBoxOption = ({ key, description }: IOption) => {
        return (
            <option key={key} value={key} >
                {description}
            </option>
        );
    };

    return (
        <div className={classNameGeneral}>
            <label className='font-MLight text-white font-bold 
            text-left'>
             {label} <span className="text-danger-700">{required ? '*' : null}</span>
            </label>
            <select
                className={
                    `
                    block
                    font-RMedium
                    px-6 py-2
                    mt-2
                    text-gray-700
                    bg-white 
                    bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded-full
                    transition
                    ease-in-out
                    focus:text-gray-700 
                    focus:bg-white focus:border-blue-600
                    focus:outline-none ` + classNameInput
                }
                aria-label="Default select example"
                value={value}
                name={name}
                onChange={onChange}
            >
                <option value="">{defaultValue}</option>
                {data.map((item: IOption) => (
                    <ItemBoxOption key={item.id} description={item.description} />
                ))}
            </select>
        </div>
    );
};

ItemBoxCourses.defaultProps = {
    data: [],
    defaultValue: 'Selected option',
    label: 'Unknown',
    className: '',
    required: false,
};

export default ItemBoxCourses;