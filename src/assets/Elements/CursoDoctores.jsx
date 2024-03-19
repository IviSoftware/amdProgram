import React from 'react'
import {RowTable} from '../Components/RowTable'

function CursoDoctores() {
  return ( <>
    <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>CENTRO DE CONVENCIONES Y AUDITORIO CINIA GONZÁLEZ DIEZ, HOSPITAL ESPAÑOL </h2></div>
    <section className='grid grid-cols-1 grid-rows-7 gap-4 md:w-3/5 '>
      <RowTable hour="09:00 AM - 09:30 AM" doctor="Dra. Alejandra Rosales " theme="HISTORIA CLÍNICA" />
      <RowTable hour="09:30 AM - 10:00 AM" doctor="Dra. Gabriela Ortega" theme="LESIONES ELEMENTALES" />
      <RowTable hour="10:00 AM - 10:30 AM" doctor="Dra. Rebeca Rodríguez" theme="ACNÉ" />
      <RowTable hour="10:30AM - 11:00 AM" doctor="Dra. Susana Canalizo" theme="DERMATITIS ATÓPICA" />
      <RowTable hour="11:00 AM - 11:30 AM" doctor="Dra. Alejandra Rosales" theme="MELASMA" />
      <RowTable hour="11:30AM - 12:00 AM" doctor="Dra. Gabriela Ortega" theme="FARMACODERMIAS" />
    </section>
    <div className='bg-custom-blue md:rounded-full
    w-full md:w-3/5 flex flex-col items-center gap-4 mb-2 mt-2 md:grid md:grid-cols-3 md:justify-items-start md:p-5'><p className='text-white'>12:00 PM - 01:00 PM</p><h2 className='text-white text-center'>COMIDA</h2></div>
    <section className='grid grid-cols-1 grid-rows-4 gap-4 md:w-3/5 mt-8'>
        <RowTable hour="01:00 PM - 01:30 PM" doctor="Dra. Rebeca Rodríguez" theme="FOTOPROTECCIÓN" />
        <RowTable hour="01:30 PM - 02:00 PM" doctor="Dra. Susana Canalizo"  theme="CORTICOESTROPEO" />
        <RowTable hour="02:00 PM - 02:30 PM" doctor="Dra. Alejandra Rosales" theme="URTICARIA" />
        <RowTable hour="02:30 PM - 03:00 PM" doctor="Dra. Gabriela Ortega" theme="PRURIGO" />
    </section>
    </>)
}

export {CursoDoctores}