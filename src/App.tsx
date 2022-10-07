import React,{ useState } from 'react'
import Navbar from './layouts/Navbar'
import TextInput from './components/TextField'
import ImagePerson from "./assets/Persons.png"
import BottomImage from "./assets/BottomImage.png"
import Itembox from './components/ItemBox'
import ItemboxCourses from "./components/ItemBoxCourses"
function App() {

  const TitleLeader =()=>{
    return(
      <div className='relative md:-left-40 text-white md:w-[500px] m-auto z-8'>
        <h1 className='text-xl md:text-3xl font-bold font-MBold'>Haste Experto en SAP y asegura tu futuro profesional!</h1>
        <p className='font-regular text-md mt-2 font-MLight'>Incluye Temarios & Certificados Oficiales</p>
      </div>
    )
  }

  const [form, setForm] = React.useState({
    firstName:"",
    lastName:"",
    email:"",
    phoneContact:"",
    nacionality:"",
    timeAvaiable:"",
    animal:""
  });


  const handleChange = (e: any) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm({
        ...form,
        [e.target.name]:value
    })
}

  const [value,setValue]=React.useState({
    code:"51",
    image: "https://flagcdn.com/w320/pe.png"
  })
  const [toogle, setToogle] = useState(false);
  const [toogleItemBox, setToogleItemBox] = useState(false);


  const establishValues=(item:any)=>{
    setValue(item)
    setToogleItemBox(false)
    setForm({
      ...form,["nacionality"]:item
    })
    // console.log(JSON.stringify(item))
  }
const data = [
  { id: 1, description: 'Mañana' },
  { id: 2, description: 'Tarde' },
  { id: 3, description: 'Noche' },

];



  return (
    <div className={`flex flex-col
    opacity-90 text-center relative
    bg-center
    bg-fixed
    md:bg-contain
    md:bg-repeat
    bg-[url('./assets/GradientFill.png')]
    w-full 
    ${toogle ? " overflow-y-hidden h-screen " : "overflow-auto md:h-screen"}
   
    `}>
          <Navbar toogle={toogle} setToogle={setToogle}/>
            <div className='mt-14 md:mt-2 z-8 '>
              <TitleLeader/>
            </div>
            
    
          <div className='relative 
          mt-4
          flex 
          flex-col 
          md:right-80
          my-8
          md:w-1/2 
          z-10
          text-center self-center'>
            <h1 className='text-orange-300 font-bold text-xl mx-4 md:text-3xl mt-4
             font-MLight'>Registrate y accede a nuestras ofertas en SAP</h1>
            <form className='items-center  
            self-center relative justify-content-center w-3/4 md:w-auto '>
          <div className='flex flex-col m-auto md:flex-row md:gap-12'>
            <TextInput
            placeholder="Primer Nombre"
            value={form.firstName}
            onChange={handleChange}
            classNameInput={"w-full"}
            label={"Primer Nombre"}
            name={"firstName"}
            required
            />
            <TextInput
            placeholder="Apellido"
            value={form.lastName}
            onChange={handleChange}
            label={"Apellido "}
            name={"lastName"}
            required
            />
          </div>
          <TextInput
            placeholder="Correo electronico*"
            value={form.email}
            onChange={handleChange}
            label={"Correo electronico "}
            name={"email"}
            required
            />
              <Itembox
              value={value}
              toogle={toogleItemBox}
              changeToogle={()=>setToogleItemBox(!toogleItemBox)}
              defineValue={(item:any)=>establishValues(item)}
              />
             <div className=' flex flex-col m-auto md:flex-row md:gap-12'>
             <TextInput
            placeholder="Nacionalidad"
            value={form.nacionality}
            classNameInput={"font-bold"}
            onChange={handleChange}
            label={"Nacionalidad"}
            name={"nacionality"}
            disabled
            required
            />
            <ItemboxCourses
              data={data}
              required
              name={'turn'}
              value={data.turn}
              label={'Turno'}
              classNameGeneral={"mt-6 text-left"}
              classNameInput={"w-full md:w-[200px]"}
              defaultValue={'Seleccione Turno'}
              onChange={handleChange}
            />
         
          </div>
          <button className='
            font-MBold
            cursor-pointer
            focus:outline-none
            px-4 py-2 rounded-full
            md:mt-8
            mt-12
            w-full
            md:w-32

            bg-button_welcome
           font-bold shadow-md'>
            Enviar
          </button>
      </form>
          </div>
          
        <img 
        className='hidden md:block absolute bottom-0 right-40 z-10 w-[800px] h-[650px]'
        src={ImagePerson}

        alt=""
        />
    <img src={BottomImage}
                className="absolute bottom-0 
                w-full
                md:w-4/5 
                m-auto h-[100px] right-30 z-8"
                /> 
    </div>
  )
}

export default App
