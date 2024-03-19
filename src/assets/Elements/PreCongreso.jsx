import React from 'react'
import {RowTable} from '../Components/RowTable'
import {ContainerRows} from '../Components/ContainerRows'

function PreCongreso() {
  return ( <>
    <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>CENTRO DE CONVENCIONES Y AUDITORIO CINIA GONZÁLEZ DIEZ, HOSPITAL ESPAÑOL </h2></div>
    <ContainerRows rows={7}>
        <RowTable hour="9:00 AM - 9:30 AM" doctor="Dr. Francisco Pérez Atamoroz" theme="TOXINA BOTULÍNICA" />
        <RowTable hour="9:30 AM - 9:45 AM" doctor={["Preguntas y respuestas", <br />, "Dr. Francisco Pérez Atamoros"]}   />
        <RowTable hour="9:45 AM - 10:15 AM" doctor="Dr. José Luis López Estebaranz" theme="RELLENOS" />
        <RowTable hour="10:15 AM - 10:30 AM" doctor={["Preguntas y respuestas",<br />,"Dr. José Luis López Estebaranz"]} />
        <RowTable hour="10:30 AM - 11:15 AM" doctor="Dr. Diego del Ojo" theme="HIDROXIPATITA" />
        <RowTable hour="11:15 AM - 11:30 AM" doctor={["Preguntas y respuestas",<br/>,"Dr. Diego del Ojo"]} />
        <RowTable hour="11:30 AM - 12:00 PM" doctor="Mesa redonda"  />
    </ContainerRows>

    <div className='bg-custom-blue md:rounded-full mb-6 mt-6 p-2 w-full md:w-3/5 flex flex-col items-center gap-2 md:grid md:grid-cols-3 md:justify-items-start md:p-5'><p className='text-white'>12:00 PM - 01:00 PM</p><h2 className='text-white text-center'>COMIDA</h2></div>
    
    <ContainerRows rows={3}>
        <RowTable hour="01:00 PM - 2:00 PM" doctor="Dr. Francisco Pérez Atamoroz" theme="PRÁCTICA" />
        <RowTable hour="2:00 PM - 03:00 PM" doctor="Dr. José Luis López Estebaranz"  theme="PRÁCTICA" />
        <RowTable hour="03:00 PM - 04:00 PM" doctor="Dr. Francisco Pérez Atamoroz" theme="PRÁCTICA" />
    </ContainerRows>
    </>)
}

export {PreCongreso}