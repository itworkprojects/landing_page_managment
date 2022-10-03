import React, { PureComponent } from 'react';
import Unknown from "../assets/unknown.png"

const Navbar = () => {

    const [search, setSearch] = React.useState('');

    const ImageLogo =()=>{
        return(
            <div>
                <img src={Unknown}
                className="w-24 h-24"
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
                <li className='transition ease-in-out delay-150
                text-white font-bold text-lg'>
                    {text}
                </li>
            </div>
        )
    }   

    const BoxLink =()=>{
        return(
            <div className='hidden md:block'>
                <ul className='
                            flex flex-wrap 
                            gap-4
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

    return ( 
        <nav className="relative m-6">   
            <div className='w-3/4 m-auto flex justify-between items-center'>
                <ImageLogo/>
                <img src={Unknown}
                    className="md:hidden w-12 h-12"
                    alt=""  />
                <BoxLink/>
            </div>
        </nav>
     );
}
 
export default Navbar;