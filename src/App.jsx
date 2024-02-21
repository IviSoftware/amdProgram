import { useState, useEffect } from 'react'
import './App.css'
import {RowTable} from './assets/Components/RowTable'
import { BtnMenu } from './assets/Components/BtnMenu'

const sectionsEnum = {
  1: 'pre-congreso',
  2: 'curso',
}

function App() {

  const [sectionState,setSectionState] = useState(true)
  const [section,setSection] = useState(sectionsEnum[2])

  useEffect(()=>{
    setSection(sectionsEnum[sectionState ? 2 : 1])
  },[sectionState])


  return (
    <>
        <section className='w-full flex justify-center items-center gap-5 mb-5 mt-2'>
            <div>
              <BtnMenu type="congreso" setSectionState={setSectionState}>Curso para médicos generales</BtnMenu>
             <h3 className={`mb-4 mt-6 text-center ${section === 'curso' ? 'opacity-1' : 'opacity-0'}`}><b>8 DE ABRIL</b></h3>  
            </div>
            <div>
              <BtnMenu type="pre" setSectionState={setSectionState}>Pre-Congreso</BtnMenu>
              <h3 className={`mb-4 mt-6 text-center ${section === 'pre-congreso' ? 'opacity-1' : 'opacity-0'}`}><b>9 DE ABRIL</b></h3>
            </div>
        </section>
        

        <div className='w-full flex flex-col items-center'>
        {section === 'curso' && <>
              
              <section className='grid grid-cols-1 grid-rows-7 gap-5 md:w-3/5 '>
                <div className='bg-custom-blue p-5'><h2 className='text-white text-center'>CENTRO DE CONVENCIONES Y AUDITORIO CINIA GONZÁLEZ DIEZ, HOSPITAL ESPAÑOL </h2></div>
                <RowTable hour="9:00 AM - 09:30 AM" doctor="Dra. Alejandra Rosales " theme="HISTORIA CLÍNICA" />
                <RowTable hour="9:30 AM - 10:00 AM" doctor="Dra. Gabriela Ortega" theme="LESIONES ELEMENTALES" />
                <RowTable hour="10:00 AM - 10:30 AM" doctor="Dra. Rebeca Rodríguez" theme="ACNÉ" />
                <RowTable hour="10:30AM - 11:00 AM" doctor="Dra. Susana Canalizo" theme="DERMATITIS ATÓPICA" />
                <RowTable hour="11:00 AM - 11:30 AM" doctor="Dra. Alejandra Rosales" theme="MELASMA" />
                <RowTable hour="11:30AM - 12:00 AM" doctor="Dra. Gabriela Ortega" theme="FARMACODERMIAS" />
              </section>
              <div className='bg-custom-blue md:rounded-full
              w-full md:w-3/5 flex flex-col items-center gap-2 md:grid md:grid-cols-3 md:justify-items-start md:p-5'><p className='text-white'>12:00 PM - 01:00 PM</p><h2 className='text-white text-center'>COMIDA</h2></div>
              <section className='grid grid-cols-1 grid-rows-4 gap-12 md:w-3/5 mt-8'>
                  <RowTable hour="01:00 PM - 01:30 PM" doctor="Dra. Rebeca Rodríguez" theme="FOTOPROTECCIÓN" />
                  <RowTable hour="01:30PM - 02:00 PM" doctor="Dra. Susana Canalizo"  theme="CORTICOESTROPEO" />
                  <RowTable hour="02:00 PM - 02:30 PM" doctor="Dra. Alejandra Rosales" theme="URTICARIA" />
                  <RowTable hour="02:30 PM - 03:00 PM" doctor="Dra. Gabriela Ortega" theme="PRURIGO" />
              </section>
        </> } 

        {section === 'pre-congreso' && <>
            <section className='grid grid-cols-1 grid-rows-8 gap-5 md:w-3/5 '>
                <div className='bg-custom-blue p-5'><h2 className='text-white text-center'>CENTRO DE CONVENCIONES Y AUDITORIO CINIA GONZÁLEZ DIEZ, HOSPITAL ESPAÑOL </h2></div>
                <RowTable hour="9:00 AM - 9:30 AM" doctor="Dr. Francisco Pérez Atamoroz" theme="TOXINA BOTULÍNICA" />
                <RowTable hour="9:30 AM - 9:45 AM" doctor={["Preguntas y respuestas", <br />, "Dr. Francisco Pérez Atamoros"]}   />
                <RowTable hour="9:45 AM - 10:15 AM" doctor="Dr. José Luis López Estebaranz" theme="RELLENOS" />
                <RowTable hour="10:15 AM - 10:30 AM" doctor={["Preguntas y respuestas",<br />,"Dr. José Luis López Estebaranz"]} />
                <RowTable hour="10:30 AM - 11:15 AM" doctor="Dr. Diego del Ojo" theme="HIDROXIPATITA" />
                <RowTable hour="11:15 AM - 11:30 AM" doctor={["Preguntas y respuestas",<br/>,"Dr. Diego del Ojo"]} />
                <RowTable hour="11:30 PM - 12:00 PM" doctor="Mesa redonda"  />
            </section>
            <div className='bg-custom-blue md:rounded-full p-2 w-full md:w-3/5 flex flex-col items-center gap-2 md:grid md:grid-cols-3 md:justify-items-start md:p-5'><p className='text-white'>12:00 PM - 01:00 PM</p><h2 className='text-white text-center'>COMIDA</h2></div>
            <section className='grid grid-cols-1 grid-rows-3 gap-12 md:w-3/5 mt-8'>
                <RowTable hour="01:00 PM - 2:00 PM" doctor="Dr. Francisco Pérez Atamoroz" theme="PRÁCTICA" />
                <RowTable hour="2:00 PM - 03:00 PM" doctor="Dr. José Luis López Estebaranz"  theme="PRÁCTICA" />
                <RowTable hour="03:00 PM - 04:00 PM" doctor="Dr. Francisco Pérez Atamoroz" theme="PRÁCTICA" />
            </section>
        </> } 
        </div>
    </>
  )
}

export default App
