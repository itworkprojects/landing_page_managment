import React, { PureComponent } from 'react';
import Unknown from "../assets/unknown.png"
import NavbarTopImage from "../assets/NavbarTopImage.png"

import TopResponsive from "../assets/TopResponsive.png"
import MenuResponsive from "../assets/MenuResponsive.png"
import LogoCompany from "../assets/LogoCompany.png"
const Navbar = () => {

    const [search, setSearch] = React.useState('');

    const ImageLogo =()=>{
        return(
            <div>
                <img src={LogoCompany}
                className="relative w-auto h-24 -z-45 "
                alt=""  />
            </div>
        )
    }

    const Button =({children}:any)=>{
        return(
            <button 
            className='px-2 py-2 bg-white 
            rounded-lg
            text-black font-bold'>
                {children}
            </button>
        )
    }

    const NavLink =({text}:any)=>{
        return(
            <div className='mx-2'>
                <li className='transition ease-in-out
                font-MLight
                delay-150
                text-white font-bold text-2xl z-10'>
                    {text}
                </li>
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
                    <Button>Nuevo</Button>
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

    const [toogle,setToogle]=React.useState(false)

    return ( 
        <nav className="relative z-0">   
            <BoxImageTop/>
           <div  className="absolute
                md:hidden  top-0 w-full 
                mt-2
                ">

                <img src={MenuResponsive}
               
                />
                <span 
                onClick={()=>setToogle(!toogle)}
                className='absolute top-0 text-xl text-white 
                cursor-pointer
                mt-1.5
                font-bold right-0 mr-2'>Menú</span>
           </div>
           
           <div className={ `absolute top-10 
           duration-300 
           ${toogle ? "block" : "hidden"}
           right-0 
           bg-gray-300 w-36  `}>
                <ul>
                
                        <a 
                        className='bg-purple-500 
                        block
                        px-2 py-2 
                        font-MBold
                        text-white border-b
                        border-white'
                        href="www.facebook.com">Inicios</a>
                      <a 
                        className='bg-purple-500 
                        block
                        px-2 py-2 
                        font-MBold
                        text-white border-b
                        border-white'
                        href="www.facebook.com">Cursos</a>
                     <a 
                        className='bg-purple-500 
                        block
                        px-2 py-2 
                        font-MBold
                        text-white border-b
                        border-white'
                        href="www.facebook.com">Blog</a>
                      <a 
                        className='bg-purple-500 
                        block
                        px-2 py-2 
                        font-MBold
                        text-white 
                        border-white'
                        href="www.facebook.com">Contactos</a>
                </ul>
           </div>

            <div className='w-3/4 m-auto z-8'>
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