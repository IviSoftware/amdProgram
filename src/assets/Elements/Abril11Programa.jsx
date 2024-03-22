import React from 'react'
import {RowTable} from '../Components/RowTable'
import {ContainerRows} from '../Components/ContainerRows'
import { Receso } from '../Components/Receso'

function Abril11Programa({setSalon,salon}) {
  return (
    <>
     <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>Centro de convenciones, Expo Santa Fé</h2></div>
              <div className='flex w-full justify-center gap-10'>
                <h3 className={`mb-4 mt-6 text-center cursor-pointer ${salon === 'salon1' && 'text-blue-secondary'}`} onClick={()=>setSalon('salon1')}><b>Sala plenaria</b></h3>
                <h3 className={`mb-4 mt-6 text-center cursor-pointer ${salon === 'salon2' && 'text-blue-secondary'}`} onClick={()=>setSalon('salon2')}><b>Salón F2</b></h3>
                <h3 className={`mb-4 mt-6 text-center cursor-pointer ${salon === 'salon3' && 'text-blue-secondary'}`} onClick={()=>setSalon('salon3')}><b>Salón D</b></h3>
                <h3 className={`mb-4 mt-6 text-center cursor-pointer ${salon === 'salon4' && 'text-blue-secondary'}`} onClick={()=>setSalon('salon4')}><b>Salón B4 y B5</b></h3>
                <h3 className={`mb-4 mt-6 text-center cursor-pointer ${salon === 'salon5' && 'text-blue-secondary'}`} onClick={()=>setSalon('salon5')}><b>Salón F1</b></h3>
                <h3 className={`mb-4 mt-6 text-center cursor-pointer ${salon === 'salon6' && 'text-blue-secondary'}`} onClick={()=>setSalon('salon6')}><b>Salón B4</b></h3>
              </div>

                {/* Inicia Salon 1 */}
                {salon === 'salon1' && <>
                  <div className='bg-custom-blue p-5 pb-0 w-full md:w-3/5'><h2 className='text-white text-center'>SALA PLENARIA / SALONES A3 y A4</h2></div>
                  <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO:Dermatitis Atópica </h2></div>
                  <ContainerRows rows={4}>
                    <RowTable hour="09:00 AM - 9:20 AM" doctor="Dra. Catalina Rincón" theme="Directrices para el diagnóstico y tratamiento de la DA del centro de excelencia y referencia GA2LEN ADCARE" />
                    <RowTable hour="09:20 AM - 09:40 AM" doctor="Dra. Zamira Faride Barragán Estudillo" theme="Revolucionando el tratamiento tópico de la Dermatitis Atópica" />
                    <RowTable hour="09:40 AM - 10:00 AM" doctor="Dra. Zamira Faride Barragán Estudillo" theme="El aclaramiento total en Dermatitis Atópica de moderada a severa" />
                    <RowTable hour="10:00 AM - 10:20 AM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
                  </ContainerRows>
          
                  <Receso hour="10:20 AM - 10:50 AM" />

                  <div className='bg-custom-blue p-5 w-full md:w-3/5'><h2 className='text-white text-center'>MÓDULO: Dermatología cosmética </h2></div>
                  <ContainerRows rows={4}>
                      <RowTable hour="10:50 AM - 11:10 AM" doctor="Dr. Diego del Ojo" theme="Hidroxiapatita" />
                      <RowTable hour="11:10 AM - 11:30 AM" doctor="Dra. Cristina Serrano Falcón" theme="¿Qué hay de nuevo en hirsutismo? (Zoom)" />
                      <RowTable hour="11:30 AM - 11:50 AM" doctor="Dr. Daniel Alcalá Pérez" theme="Rejuvenecimiento periorbitario con filler: una técnica alternativa" />
                      <RowTable hour="11:50 AM - 12:00 PM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
                  </ContainerRows>

                  <Receso hour="12:10 PM - 12:40 PM" />
                  <div className='bg-custom-blue p-5 w-full md:w-3/5'><h2 className='text-white text-center'>MÓDULO: Cáncer de piel</h2></div>
                  <ContainerRows rows={4}>
                      <RowTable hour="12:40 PM - 01:00 PM" doctor="Dra. Yolanda Gilabert" theme="Novedades en queratosis actínicas" />
                      <RowTable hour="01:00 PM - 01:20 PM" doctor="Dra. Rossana Janina Llergo Valdez" theme="Opciones de tratamiento en pacientes con melanoma en estadio IV" />
                      <RowTable hour="01:20 PM - 01:40 PM" doctor="Dr. Daniel Alcalá" theme="Carcinomas basocelulares agresivos." />
                      <RowTable hour="01:40 PM - 02:00 PM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
                  </ContainerRows>
                  <Receso hour="02:00 PM - 02:30 PM" />
                  <ContainerRows rows={4}>
                      <RowTable hour="03:30 PM - 06:00 PM" doctor="" theme="¿Yo Perdí?" />
                  </ContainerRows>
                  <Receso hour="08:00 PM" title="Cena de Clausura" />
                </>}
                {/* Termina Salon 1 */}

                {/* Inicia Salon 2 */}
                {salon === 'salon2' && <>
                <div className='bg-custom-blue p-5 pb-0 w-full md:w-3/5'><h2 className='text-white text-center'>SALÓN F2</h2></div>
                  <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Medicina interna</h2></div>
                  <ContainerRows rows={5}>
                    <RowTable hour="08:00 AM - 09:00 AM" doctor="Dra. Ana Lilia Ruelas Villavicencio" theme="El papel fundamental de los lípidos del estrato corneo en el manejo de xerosis, pieles sensibles y dermatitis atópica" />
                    <RowTable hour="09:00 AM - 09:20 AM" doctor="Dr. Christopher Ruben Castillo" theme="Escleroterapia: Lo que tienes que saber" />
                    <RowTable hour="09:20 AM - 09:40 AM" doctor="Dr. Alejandro Sosa Caballero" theme="Efecto de los disruptores endócrinos en dermatología " />
                    <RowTable hour="09:40 AM - 10:00 AM" doctor="Dra. Alejandra Rosales" theme="Efecto de la dieta en las enfermedades dermatológicas" />
                    <RowTable hour="10:00 AM - 10:20 AM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
                  </ContainerRows>
          
                  <Receso hour="10:20 AM - 10:50 AM" />
                  
                  <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Misceláneas</h2></div>
                  <ContainerRows rows={5}>
                    <RowTable hour="10:50 AM - 11:10 AM" doctor="Dra. Sonia Ocampo" theme="Diagnósticos diferenciales de la alopecia androgenética: Características clínicas y tricoscópicas" />
                    <RowTable hour="11:10 AM - 11:30 AM" doctor="Dra. Valeria Díaz Molina" theme="¿Radiación ionizante como factor de riesgo para carcinoma basocelular o como carcinógeno?" />
                    <RowTable hour="11:30 AM - 11:50 PM" doctor="Dra. Paula Torres" theme="Antioxidantes en fotoprotección" />
                    <RowTable hour="11:50 PM - 12:10 PM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
                  </ContainerRows>

                  <Receso hour="12:10 PM - 12:40 PM" />

                  <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Melasma</h2></div>
                  <ContainerRows rows={5}>
                    <RowTable hour="12:40 PM - 01:00 PM" doctor="Dra. Rebeca Rodríguez Cabral" theme="Tratamiento integral del melasma" />
                    <RowTable hour="01:00 PM - 01:20 PM" doctor="Dra. Patricia Bove" theme="Melasma, ¿Qué hay en México para su manejo?" />
                    <RowTable hour="01:20 PM - 01:40 PM" doctor="Dra. Valeria Díaz Molina" theme="Aspectos clínicos del componente vascular del melasma" /> 
                    <RowTable hour="01:40 PM - 02:00 PM" doctor="" theme="PREGUNTAS Y RESPUESTAS" /> 
                  </ContainerRows>


                  <Receso hour="02:00 PM - 02:30 PM" />


                  <ContainerRows rows={1}>
                    <RowTable hour="03:30 PM - 06:00 PM" doctor="" theme="¿Yo Perdí?" />
                  </ContainerRows>


                  <Receso hour="08:00 PM " title="Cena de Clausura" />

                
                
                </>}
                {/* Termina Salon 2 */}

                {/* inicia Salon 3 */}
                {salon === 'salon3' && <>
                  <div className='bg-custom-blue p-5 pb-0 w-full md:w-3/5'><h2 className='text-white text-center'>SALÓN D</h2></div>
                  <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Enfermedades de pelo</h2></div>
                  <ContainerRows rows={5}>
                    <RowTable hour="08:00 AM - 09:00 AM" doctor="Dr. Llibran R. Rodriguez" theme="“Resultados de experiencia clínica con rutina Pigmentbio en pacientes con melasma" />
                    <RowTable hour="09:00 AM - 09:20 AM" doctor="Dr. Hugo Vicente Martínez" theme="Daño capilar por el medio ambiente" />
                    <RowTable hour="09:20 AM - 09:40 AM" doctor="Dra. Sonia Ocampo Garza" theme="Nuevos tratamientos en alopecia androgenética" />
                    <RowTable hour="09:40 AM - 10:00 AM" doctor="Dra. Rosa María Ponce" theme="Usos del zinc en dermatología" />
                    <RowTable hour="10:00 AM - 10:20 AM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
                  </ContainerRows>
          
                  <Receso hour="10:20 AM - 10:50 AM" />

                  <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Inmunología</h2></div>
                  <ContainerRows rows={4}>
                    <RowTable hour="10:50 AM - 11:10 AM" doctor="Dra. Dulce María de la Mercedes Ortiz Solís" theme="¿Cuándo sospechar una enfermedad autoinmune en un niño?" />
                    <RowTable hour="11:10 AM - 11:30 AM" doctor="Dra. Dulce María de la Mercedes Ortiz Solís" theme="Dermatosis IgA lineal en niños, diagnóstico y tratamiento" />
                    <RowTable hour="11:30 AM - 11:50 PM" doctor="Dra. Josefina de Peña Ortiz" theme="Clínica de enfermedades ampollosas autoinmunes CDP (casos clínicos)" />
                    <RowTable hour="11:50 PM - 12:10 PM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
                  </ContainerRows>

                  <Receso hour="12:10 PM - 12:40 PM" />
                  <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Misceláneas</h2></div>
                  <ContainerRows rows={4}>
                    <RowTable hour="12:40 AM - 01:00 PM" doctor="Dr. Benjamín Zepeda Ortega" theme="Urticaria" />
                    <RowTable hour="01:00 PM - 01:20 PM" doctor="Dr. Jorge Lauro Moreno González" theme="Escleroterapia: Técnica de aplicación" />
                    <RowTable hour="01:20 PM - 01:40 PM" doctor="Dra. Rosa María Ponce  Olivera" theme="Opciones en cicatrización" />
                    <RowTable hour="01:40 PM - 02:00 PM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
                  </ContainerRows>

                  <Receso hour="02:00 PM - 02:30 PM" />
                  <ContainerRows rows={1}>
                    <RowTable hour="03:30 PM - 06:00 PM" doctor="" theme="¿Yo Perdí?" />
                  </ContainerRows>
                  <Receso hour="08:00 PM" title="Cena de Clausura" />
             
                  
                </>}
                {/* Termina salon 3 */}

                {/* Inicia Salon 4 */}
                {salon === 'salon4' && <>
                  <div className='bg-custom-blue p-5 pb-0 w-full md:w-3/5'><h2 className='text-white text-center'>SALÓN B4 y B5</h2></div>
                  <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'>
                    <h2 className='text-white text-center'>DESAYUNO CON EL EXPERTO</h2>
                  </div>
                  <ContainerRows>
                    <RowTable hour="8:00 AM - 9:00 AM" doctor="" theme="BMS" />
                  </ContainerRows>
                </>}
                {/* Termina Salon 4 */}

                {/* Inicia Salon 5 */}
                {salon === 'salon5' && <>
                  <div className='bg-custom-blue p-5 pb-0 w-full md:w-3/5'><h2 className='text-white text-center'>SALÓN F1</h2></div>
                  <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'>
                    <h2 className='text-white text-center'>DESAYUNO CON EL EXPERTO</h2>
                  </div>
                  <ContainerRows>
                    <RowTable hour="8:00 AM - 9:00 AM" doctor="Dra. Paula Torres Camacho." theme="BMS" />
                    <RowTable hour="12:00 PM - 2:00 PM" theme="Taller Formulación de cremas" doctor="Dr. Josué de León" />
                  </ContainerRows>
                </>}
                {/* Termina Salon 5 */}

                {/* Inicia Salon 6 */}
                {salon === 'salon6' && <>
                  <div className='bg-custom-blue p-5 pb-0 w-full md:w-3/5'><h2 className='text-white text-center'>SALÓN B4</h2></div>
                  <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'>
                    <h2 className='text-white text-center'></h2>
                  </div>
                  <ContainerRows>
                    <RowTable hour="12:00 PM - 2:00 PM" theme="Hilos multiline y master de PDO para full face" doctor="Dra. Miriam Neri" />
                  </ContainerRows>
                </>}
                
    </>
  )
}

export {Abril11Programa}