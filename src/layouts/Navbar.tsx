import React, { PureComponent } from 'react';
import Unknown from "../assets/unknown.png"
import NavbarTopImage from "../assets/NavbarTopImage.png"

import TopResponsive from "../assets/TopResponsive.png"
import MenuResponsive from "../assets/MenuResponsive.png"
import LogoCompany from "../assets/LogoCompany.png"
import DynamicIcon from "../components/DynamicIcon"
const Navbar = ({toogle,setToogle}:any) => {


    const ImageLogo =()=>{
        return(
            <div>
                <img src={LogoCompany}
                className="relative w-auto h-16 md:h-24 -z-45 "
                alt=""  />
            </div>
        )
    }


    const NavLink =({text,onClick}:any)=>{
        return(
            <div className='mx-2'>
                <li className='transition ease-in-out
                font-MLight
                delay-150
                text-white font-bold text-2xl z-10'>
                    <a 
                    onClick={onClick}
                    className='cursor-pointer'>{text}</a>
                </li>
            </div>
        )
    }   
    const IconClose=()=>{
        return(
            <div className=' absolute top-12 inline-flex 
            bg-gray-700
            items-center px-2 py-2 
        rounded-full shadow-xl cursor-pointer'>
            <DynamicIcon
                name="FaPlus"
                onClick={()=>setToogle(!toogle)}
                className=' 
                rotate-45
                text-xl text-white 
                cursor-pointer
                mt-1.5
                w-8
                h-8
                '
                />
        </div>
        )
    }

    const BoxLink =()=>{
        return(
            <div className='hidden md:block z-10'>
                <ul className='
                            flex flex-wrap 
                            gap-12
                            items-center'>
                    <NavLink text="Inicios"/>
                    <NavLink text="Cursos"/>
                    <NavLink text="Blog"/>
                    <NavLink text="Contactos"/>
                </ul>
            </div>
        )
    }

    const BoxImageTop=()=>{
        return(
               <div className='z-4'>
                 <img src={NavbarTopImage}
                className="hidden md:block absolute top-0 w-full md:w-2/3 
                m-auto h-[150px] md:right-40 "
                />
                <img src={TopResponsive}
                className="block
                md:hidden absolute top-0 w-full 
                m-auto h-[180px]  "
                />
               </div>
        )
    }


    return ( 
        <nav className="relative  "  >   
            <BoxImageTop/>
           <div  className="absolute
                md:hidden  top-0 w-full 
                mt-2
                ">

                <img src={MenuResponsive}
                />

                <DynamicIcon
                name="FaBars"
                onClick={()=>setToogle(!toogle)}
                className='absolute top-12 text-xl text-white 
                cursor-pointer
                mt-1.5
                w-12
                h-12
                 right-0 mr-4'
                />
                
           </div>
           
           <div className={ `absolute 
          duration-300
           flex 
           flex-col
           w-full
           h-screen
           z-40
           items-center
           bg-gray-800
           ${toogle ? " block" : "hidden"}
             z-8 `}>
                <IconClose/>
                <ul className='w-full self-center  m-40 space-y-12'>
                        <a 
                        className='
                        block
                        px-2 py-2
                        mx-10
                        font-MBold
                        text-white border-b
                        border-white'
                        href="www.facebook.com">Inicios</a>
                      <a 
                        className='
                        block
                        px-2 py-2 
                        mx-10
                        font-MBold
                        text-white 
                        border-b
                        border-white
                        '
                        href="www.facebook.com">Cursos</a>
                     <a 
                        className='
                        block
                        px-2 py-2 
                        mx-10
                        font-MBold
                        text-white border-b
                        border-white'
                        href="www.facebook.com">Blog</a>
                      <a 
                        className='
                        block
                        px-2 py-2 
                        font-MBold
                        mx-10
                        text-white  border-b
                        border-white'
                        href="www.facebook.com">Contactos</a>
                </ul>
           </div>

            <div className='w-3/4 m-auto -z-8'>
                <div className='mt-14 flex  justify-between items-center z-26'>
                <ImageLogo/>
                {/* <img src={Unknown}
                    className="md:hidden w-12 h-12"
                    alt=""  /> */}
                <BoxLink/>
                </div>
            </div>
            
        </nav>
     );
}
 
export default Navbar;