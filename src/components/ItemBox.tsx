import React,{useState} from 'react';
import Label from './Label';
import TextInput from './TextField'

const Itembox = ({value,toogle,changeToogle,defineValue}:any) => {

    const data:any = [
        {
          id: 1,
          description: "Peru",
          code: "+51",
          image: "https://flagcdn.com/w320/pe.png"
        },
        {
          id: 2,
          description: "Brasil",
          code: "+qd",
          image: "https://flagcdn.com/w320/br.png"
        },
        {
          id: 3,
          description: "Brasil",
          code: "+56",
          image: "https://flagcdn.com/w320/pe.png"
        },
        {
          id: 4,
          description: "Brasil",
          code: "+67",
          image: "https://flagcdn.com/w320/pe.png"
        },
        {
          id: 5,
          description: "Peru",
          code: "+12",
          image: "https://flagcdn.com/w320/pe.png"
        }
      ];

    const OptionItem = ({ item,defineItem }:any) => {
        return (
          <div
          onClick={()=>defineItem(item)}
            className=" 
            rounded-l-full
            relative
            top-2
          bg-white
          hover:bg-gray-200
          cursor-pointer
        border-t border-gray-500
        px-2 py-2 
        md:72
        w-full
        flex
        text-black"
          >
            <img src={item.image} className="ml-2 w-6 h-6" alt="" />
            <div className="textos">
              <h1 className="ml-2">
                {item.description}{" "}
                <span className="text-gray-400">{item.code}</span>
              </h1>
            </div>
          </div>
        );
      };

      const OptionDefault = ({ onChange, value }:any) => {
        return (
          <div
          onClick={onChange}
            className="w-24 cursor-pointer 
          flex  
          relative
          px-2
          bg-gray-200
          rounded-l-full
          shadow-md
          "
            id="select"
          >
            <div
              className="
            px-2 py-2 
            w-full"
            >
              <div
                className="flex
            justify-around
            m-auto "
              >
                <img
                  src={value.image}
                  className="w-6 h-6"
                  alt=""
                />
                <div className="textos text-center">
                  <h1 className="titulo text-center ml-2">{value.code}</h1>
                </div>
              </div>
              <i className="fas fa-angle-down"></i>
            </div>
          </div>
        );
      };


    return (
       <div className="m-auto text-left md:pt-4 pt-4 mb-2 md:mb-0 ">
        <Label>Numero de Contacto</Label>
        <div className="m-auto flex pt-2">
          <OptionDefault value={value} onChange={changeToogle} />
          <div
            className={`
            h-12
            md:w-72
            w-full
            opciones ${toogle ? "block absolute mt-8" : "hidden "}  `}
            id="opciones"
          >
            <div className="overflow-y-scroll overflow-x-hidden h-32">
              {data.map((item) => (
                <OptionItem item={item}  defineItem={(item)=>defineValue(item)} />
              ))}
            </div>
          </div>
        
        <input type="number"
        placeholder='Numero de Contacto'
        className='outline-none shadow-md 
        w-full
        rounded-r-full	
        px-2 py-2'
        /> 
        </div>
    </div>
    );
};



Itembox.defaultProps = {
    data: [],
    defaultValue: 'Selected option',
    label: 'Unknown',
    className: '',
    required: false,
};

export default Itembox;
