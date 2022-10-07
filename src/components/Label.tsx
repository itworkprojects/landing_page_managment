import React, { PureComponent } from 'react'

const Label = ({children}:any) => {
    return ( 
        <label className='font-MLight text-white font-bold text-left mb-2'>
        {children}
        </label>

     );
}
 
export default Label;