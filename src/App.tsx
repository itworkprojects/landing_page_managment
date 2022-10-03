import React,{ useState } from 'react'
import Navbar from './layouts/Navbar'
import TextInput from './components/TextField'
function App() {
  const [count, setCount] = useState(0)

  const TitleLeader =()=>{
    return(
      <div className='relative -left-40 text-white s w-[450px] m-auto'>
        <h1 className='text-3xl font-bold'>Haste Experto en SAP y asegura tu futuro profesional!</h1>
        <p className='font-regular text-lg'>INcluye Temarios & Certificados Oficiales</p>
      </div>
    )
  }

  const [form, setForm] = React.useState({
    firstName:"",
    lastName:"",
    email:"",
    phoneContact:"",
    nacionality:"",
    timeAvaiable:""
  });

  const FormRegister =()=>{
    const handleChange = (e: any) => {
      const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      setForm({
          ...form,
          [e.target.name]:value
      })
  }
    return(
      <form className='items-center  self-center relative justify-content-center '>
          <div className='flex flex-col m-auto md:flex-row gap-12'>
            <TextInput
            placeholder="Primer Nombre"
            value={form.firstName}
            onChange={handleChange}
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
              <TextInput
            placeholder="Tleofno de COntacto*"
            value={form.email}
            onChange={handleChange}
            label={"Telefono de Concato "}
            name={"phone"}
            required
            />
      </form>
    )
  }

  return (
    <div className="flex flex-col bg-primary relative
    opacity-90 text-center
    w-full h-screen">
          <Navbar/>
          <div className='mt-2'>
            <TitleLeader/>
          </div>
          <div className='relative -left-40 mt-20
          flex flex-col 
          text-center self-center'>
            <h1 className='w-[650px] text-orange-300 font-bold text-4xl'>Registrate y accede a nuestras ofertas en SAP</h1>
            <FormRegister/>
          </div>
          
    </div>
  )
}

export default App
