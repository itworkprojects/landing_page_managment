import React from 'react';
import * as Icons from 'react-icons/fa';

type IDynamicIcon = {
    name: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLOrSVGElement>;
};
const DynamicIcon = ({ name, className, onClick }: IDynamicIcon) => {
    const IconComponent = Icons[name as keyof typeof Icons];
    return <IconComponent className={className} onClick={onClick} />;
};
export default DynamicIcon;
