import React from 'react'
import {RowTable} from '../Components/RowTable'
import {ContainerRows} from '../Components/ContainerRows'
import { Receso } from '../Components/Receso'

function Abril12Programa({setSalon,salon}) {
  return (
    <>
     <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>Centro de convenciones, Expo Santa Fé</h2></div>
              <div className='flex w-full justify-center gap-10'>
                <h3 className={`mb-4 mt-6 text-center cursor-pointer ${salon === 'salon1' && 'text-blue-secondary'}`} onClick={()=>setSalon('salon1')}><b>Salón 1</b></h3>
                <h3 className={`mb-4 mt-6 text-center cursor-pointer ${salon === 'salon2' && 'text-blue-secondary'}`} onClick={()=>setSalon('salon2')}><b>Salón 2</b></h3>
                
              </div>

                {/* Inicia Salon 1 */}
                {salon === 'salon1' && <>
                  <div className='bg-custom-blue p-5 pb-0 mb-0 w-full md:w-3/5'><h2 className='text-white text-center'>Salón 1</h2></div>
                  <div className='bg-custom-blue p-5 pt-0 mt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO:Trabajos premiados de residentes </h2></div>
                
                  <ContainerRows rows={4}>
                      <RowTable hour="11:10 AM - 11:30AM" doctor="Ruth María Amanda Márquez Muciño" theme="Lesión verrugosa lineal en paciente pediátrico" />
                      <RowTable hour="11:30 AM - 11:50 AM" doctor="Citlalli Fernanda Pérez López" theme="Erupción papuloescamosa asociada a Card14: un desafío diagnóstico y terapéutico en dermatología" />
                      <RowTable hour="11:50 AM - 12:10 PM" doctor="José Ramón García Lira" theme="Innovación en regeneración tisular en paciente pediátrico con necrólisis epidérmica tóxica" />
                      <RowTable hour="12:10 PM - 12:30 PM" doctor="José Ramón García Lira" theme="Regeneración de mucosa oral y labial en paciente pediátrico con Síndrome de Steven Johnson" />
                  </ContainerRows>

                  <Receso hour="12:30 PM - 1:00 PM" />
                  <div className='bg-custom-blue p-5 w-full md:w-3/5'><h2 className='text-white text-center'>MÓDULO: Casos clínicos de difícil diagnóstico  (residentes)</h2></div>
                  <ContainerRows rows={5}>
                      <RowTable hour="1:00 PM - 1:20 PM" doctor="María José Arroyo López" theme="Abordaje diagnóstico de paniculitis" />
                      <RowTable hour="1:20 PM - 1:40 PM" doctor="Valeria Ornelas León" theme="Reacciones dermatológicas asociadas a los nuevos inhibidores tirosin cinasa" />
                      <RowTable hour="1:40 PM - 2:00 PM" doctor="Sonia Mingaud Rodriguez" theme="Síndrome esclerodermiforme abordaje diagnóstico" />
                      <RowTable hour="2:00 PM - 2:20 PM" doctor="Alejandra Goldaracena" theme="Eritrodermia severa resistente a tratamiento" />
                      <RowTable hour="2:20 PM - 2:40 PM" doctor="Blanca Olivia Sicairos" theme="Abordaje de neoplasia de difícil diagnóstico" />
                  </ContainerRows>

               
                  <Receso hour="4:30 PM - 6:00 PM" title="Sesión de negocios" />
                </>}
                {/* Termina Salon 1 */}

                {/* Inicia Salon 2 */}
                {salon === 'salon2' && <>
                <div className='bg-custom-blue p-5 pb-0 w-full md:w-3/5'><h2 className='text-white text-center'>Salón 2</h2></div>
                  <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Misceláneas</h2></div>
                  <ContainerRows rows={5}>
                    <RowTable hour="9:00 AM - 9:20 AM" doctor="Dr. Eduardo Marín" theme="Virus, vacunas y piel" />
                    <RowTable hour="9:20 AM - 09:40 AM" doctor="Dr. Luis Méndez" theme="Salud mental en el paciente dermatológico" />
                    <RowTable hour="09:40 AM - 10:00 AM" doctor="Dra. Miriam Puebla" theme="Dermatomiositis Paraneoplásica" />
                    <RowTable hour="10:00 AM - 10:20 AM" doctor="Dra. Mariel Isa Pimentel" theme="Pitiriasis versicolor. Un diagnóstico, múltiples caras" />
                    <RowTable hour="10:20 AM - 10:40 AM" doctor="Dr. Benjamín Zepeda Ortega" theme="Urticaria" />
                  </ContainerRows>
          
                  <Receso hour="10:40 AM - 11:10 AM" />
                  
                  <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Fotoprotección </h2></div>
                  <ContainerRows rows={5}>
                    <RowTable hour="11:10 AM - 11:30AM" doctor="Dr. Fermín Jurado" theme="Fotoprotección sistémica basada en la evidencia" />
                    <RowTable hour="11:30 AM - 11:50 AM" doctor="Dra. Fadua Besil Eguia" theme="" />
                    <RowTable hour="11:50 AM - 12:10 PM" doctor="" theme="" />
                    <RowTable hour="12:10 PM - 12:30 PM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
                  </ContainerRows>

                  <Receso hour="12:30 PM - 1:00 PM" />

                  <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Pelo y uñas</h2></div>
                  <ContainerRows rows={5}>
                    <RowTable hour="1:00 PM - 1:20 PM" doctor="Dr. Daniel Asz" theme="Alopecias por presión" />
                    <RowTable hour="1:20 PM - 1:40 PM" doctor="Dr. Carlos Barrera Ochoa" theme="Do’s and don’t del minoxidil oral" />
                    <RowTable hour="1:40 PM - 2:00 PM" doctor="Dr. Jorge Ocampo Garza" theme="Melanoniquia longitudinal" /> 
                    <RowTable hour="2:00 PM - 2:20 PM" doctor="Dr. Armando Medina" theme="Alopecia androgenética ¿Finasteride o Dutasteride?" /> 
                    <RowTable hour="2:20 PM - 2:40 PM" doctor="" theme="PREGUNTAS Y RESPUESTAS" /> 
                  </ContainerRows>


                  <Receso hour="2:40PM - 3:10 PM" />


                  <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Psoriasis</h2></div>
                  <ContainerRows rows={4}>
                    <RowTable hour="3:30 PM - 3:50 PM" doctor="Dr. Diego Olín Pérez Rojas" theme="Mi paciente con psoriasis, ¿necesita un cambio de terapia biológica? y ¿ahora qué hago?" />
                    <RowTable hour="3:30 PM - 3:50 PM" doctor="Dra. Lucia Comellas Kirkerup" theme="Psoriasis con progresión de artritis psoriásica" />
                    <RowTable hour="3:50 PM - 4:10 PM" doctor="Dr. José Manuel Carrascosa" theme="" /> 
                    <RowTable hour="4:10 PM - 4:30 PM" doctor="" theme="PREGUNTAS Y RESPUESTAS" /> 
                  </ContainerRows>


                  <Receso hour="4:30 PM - 6:00 PM" title="Sesión de negocios" />

                
                
                </>}
                {/* Termina Salon 2 */}

              
                
    </>
  )
}

export {Abril12Programa}