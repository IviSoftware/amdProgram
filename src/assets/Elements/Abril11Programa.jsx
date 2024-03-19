import React from 'react'
import {RowTable} from '../Components/RowTable'
import {ContainerRows} from '../Components/ContainerRows'
import { Receso } from '../Components/Receso'

function Abril11Programa({setSalon,salon}) {
  return (
    <>
     <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>Centro de convenciones, Expo Santa Fé</h2></div>
              <div className='flex w-full justify-center gap-10'>
                <h3 className={`mb-4 mt-6 text-center cursor-pointer ${salon === 'salon1' && 'text-blue-secondary'}`} onClick={()=>setSalon('salon1')}><b>Salón 1</b></h3>
                <h3 className={`mb-4 mt-6 text-center cursor-pointer ${salon === 'salon2' && 'text-blue-secondary'}`} onClick={()=>setSalon('salon2')}><b>Salón 2</b></h3>
                <h3 className={`mb-4 mt-6 text-center cursor-pointer ${salon === 'salon3' && 'text-blue-secondary'}`} onClick={()=>setSalon('salon3')}><b>Salón 3</b></h3>
              </div>

                {/* Inicia Salon 1 */}
                {salon === 'salon1' && <>
                  <div className='bg-custom-blue p-5 pb-0 w-full md:w-3/5'><h2 className='text-white text-center'>Salón 1</h2></div>
                  <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO:Dermatitis Atópica </h2></div>
                  <ContainerRows rows={5}>
                    <RowTable hour="09:00 AM - 9:20 AM" doctor="Dr. Pfizer" theme="" />
                    <RowTable hour="09:20 AM - 09:40 AM" doctor="Dr. Pfizer" theme="" />
                    <RowTable hour="09:40 AM - 10:00 AM" doctor="Dr. Dubai" theme="" />
                    <RowTable hour="10:00 AM - 10:20 AM" doctor="" theme="" />
                    <RowTable hour="10:20 AM - 10:40 AM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
                  </ContainerRows>
          
                  <Receso hour="10:40 AM - 11:10 AM" />

                  <div className='bg-custom-blue p-5 w-full md:w-3/5'><h2 className='text-white text-center'>MÓDULO: Dermatología cosmética </h2></div>
                  <ContainerRows rows={5}>
                      <RowTable hour="11:10 AM - 11:30AM" doctor="Dr. Enrique Hernández Pérez" theme="El vuelo de la cirugía cosmética" />
                      <RowTable hour="11:30 AM - 11:50 AM" doctor="Dr. Diego del Ojo" theme="Hidroxiapatita" />
                      <RowTable hour="11:50 AM - 12:10 PM" doctor="Dr. Daniel Azs" theme="Alopecias secundarias a procedimientos estéticos" />
                      <RowTable hour="12:10 PM - 12:30 PM" doctor="Dr. Daniel Alcalá" theme="Rejuvenecimiento periorbitario con filler: una técnica alternativa" />
                      <RowTable hour="12:30 PM - 12:50 PM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
                  </ContainerRows>

                  <Receso hour="12:50 PM - 1:20 PM" />
                  <div className='bg-custom-blue p-5 w-full md:w-3/5'><h2 className='text-white text-center'>MÓDULO: Vitiligo</h2></div>
                  <ContainerRows rows={5}>
                      <RowTable hour="1:20 PM - 1:40 PM" doctor="Dra. Yolanda Gilabert" theme="Terapia fotodinámica más allá del cáncer de piel" />
                      <RowTable hour="1:40 PM - 2:00 PM" doctor="Dr. Gustavo Jiménez Brito" theme="Algunos aspectos inmunológicos del vitiligo y nueva esperanza terapéutica" />
                      <RowTable hour="2:00 PM - 2:20 PM" doctor="Dra. Mariel Isa Pimentel" theme="Mecanismos de la psicodermatología en psoriasis y vitiligo" />
                      <RowTable hour="2:20 PM - 2:40 PM" doctor="" theme="" />
                      <RowTable hour="2:40 PM - 3:00 PM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
                  </ContainerRows>
                  <Receso hour="3:00 PM - 3:30 PM" />
                  <div className='bg-custom-blue p-5 w-full md:w-3/5'><h2 className='text-white text-center'>MÓDULO: Melasma</h2></div>
                  <ContainerRows rows={4}>
                      <RowTable hour="3:30 PM - 3:50 PM" doctor="Dra. Rebeca Rodríguez Cabral" theme="Tratamiento integral del melasma" />
                      <RowTable hour="3:50 PM - 4:10 PM" doctor="Dr. José Enrique Hernández Pérez" theme="" />
                      <RowTable hour="4:10 PM - 4:30 PM" doctor="" theme="" />
                      <RowTable hour="4:30 PM - 4:50 PM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
                  </ContainerRows>
                  <Receso hour="4:50 PM - " title="Cena de Clausura" />
                </>}
                {/* Termina Salon 1 */}

                {/* Inicia Salon 2 */}
                {salon === 'salon2' && <>
                <div className='bg-custom-blue p-5 pb-0 w-full md:w-3/5'><h2 className='text-white text-center'>Salón 2</h2></div>
                  <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Misceláneas</h2></div>
                  <ContainerRows rows={5}>
                    <RowTable hour="09:00 AM - 9:20 AM" doctor="Dra. Alejandra Rosales" theme="Efecto de la dieta en las enfermedades dermatológicas" />
                    <RowTable hour="09:20 AM - 09:40 AM" doctor="Dr. Christopher Ruben Castillo" theme="Escleroterapia: Lo que tienes que saber" />
                    <RowTable hour="09:40 AM - 10:00 AM" doctor="Dra. Rosario García Salazar" theme="Tratamiento de prurito en dermatitis atópica" />
                    <RowTable hour="10:00 AM - 10:20 AM" doctor="Dr. Alejandro Sosa Caballero" theme="Efecto de los disruptores endocrinos en dermatología" />
                    <RowTable hour="10:20 AM - 10:40 AM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
                  </ContainerRows>
          
                  <Receso hour="10:40 AM - 11:10 AM" />
                  
                  <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Dermatoscopia</h2></div>
                  <ContainerRows rows={5}>
                    <RowTable hour="11:10 AM - 11:30AM" doctor="Dr. Ricardo Quiñones" theme="QUERATOSIS SEBORREICAS: COMO SIMULADOR DE LESIONES MALIGNAS" />
                    <RowTable hour="11:30 AM - 11:50 AM" doctor="Dr. Ricardo Quiñones" theme="ANALOGÍAS CLÍNICAS y DERMATOSCÓPICOS del CARCINOMA BASOCELULAR de ALTO GRADO Y DEL CARCINOMA ESCAMOCELULAR  NO INVASOR" />
                    <RowTable hour="11:50 AM - 12:10 PM" doctor="Dra. Sonia Ocampo" theme="Diagnósticos diferenciales de la alopecia androgenética: Características clínicas y tricoscopicas" />
                    <RowTable hour="12:10 PM - 12:30 PM" doctor="" theme="" />
                    <RowTable hour="12:30 PM - 12:50 PM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
                  </ContainerRows>

                  <Receso hour="12:50 PM - 1:20 PM" />

                  <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Cáncer de piel</h2></div>
                  <ContainerRows rows={5}>
                    <RowTable hour="1:20 PM - 1:40 PM" doctor="Dr. Daniel Alcalá" theme="Carcinomas basocelulares agresivos" />
                    <RowTable hour="1:40 PM - 2:00 PM" doctor="Dra. Yolanda Gilabert" theme="Novedades en queratosis actínicas" />
                    <RowTable hour="2:00 PM - 2:20 PM" doctor="Dra. Rossana Janina Llergo Valdez" theme="Opciones de tratamiento en pacientes con melanoma en estadio IV" /> 
                    <RowTable hour="2:20 PM - 2:40 PM" doctor="" theme="" /> 
                    <RowTable hour="2:40 PM - 3:00 PM" doctor="" theme="PREGUNTAS Y RESPUESTAS" /> 
                  </ContainerRows>


                  <Receso hour="3:00 PM - 3:30 PM" />


                  <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Infecciosas</h2></div>
                  <ContainerRows rows={4}>
                    <RowTable hour="3:30 PM - 3:50 PM" doctor="Dra. Susana Canalizo" theme="Enfermedades de transmisión sexual" />
                    <RowTable hour="3:50 PM - 4:10 PM" doctor="" theme="" />
                    <RowTable hour="4:10 PM - 4:30 PM" doctor="" theme="" /> 
                    <RowTable hour="4:30 PM - 4:50 PM" doctor="" theme="PREGUNTAS Y RESPUESTAS" /> 
                  </ContainerRows>


                  <Receso hour="4:50 PM - " title="Cena de Clausura" />

                
                
                </>}
                {/* Termina Salon 2 */}

                {/* inicia Salon 3 */}
                {salon === 'salon3' && <>
                  <div className='bg-custom-blue p-5 pb-0 w-full md:w-3/5'><h2 className='text-white text-center'>Salón 3</h2></div>
                  <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Enfermedades de pelo</h2></div>
                  <ContainerRows rows={5}>
                    <RowTable hour="09:00 AM - 9:20 AM" doctor="Dr. Hugo Vicente Martínez" theme="Daño capilar por el medio ambiente" />
                    <RowTable hour="09:20 AM - 09:40 AM" doctor="Dra. Cristina Serrano Falcón" theme="¿Qué hay de nuevo en hirsutismo? (Zoom)" />
                    <RowTable hour="09:40 AM - 10:00 AM" doctor="Dra. Sonia Ocampo Garza" theme="Nuevos tratamientos en alopecia androgenética" />
                    <RowTable hour="10:00 AM - 10:20 AM" doctor="Dra. Rosa María Ponce" theme="Usos del zinc en dermatología" />
                    <RowTable hour="10:20 AM - 10:40 AM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
                  </ContainerRows>
          
                  <Receso hour="10:40 AM - 11:10 AM" />

                  <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Inmunología</h2></div>
                  <ContainerRows rows={5}>
                    <RowTable hour="11:10 AM - 11:30 AM" doctor="Dra. Adriana López Tello" theme="Uso práctico de los inmunosupresores en dermatología" />
                    <RowTable hour="11:30 AM - 11:50 AM" doctor="Dra. Dulce Ortíz Solís" theme="¿Cuándo sospechar una enfermedad autoinmune en un niño?" />
                    <RowTable hour="11:50 AM - 12:10 PM" doctor="Dra. Liliana Godinez" theme="Revisiones sobre calidad de vida y enfermedades de la piel con enfoque especial en psoriasis y dermatitis atópica. (Zoom)" />
                    <RowTable hour="12:10 PM - 12:30 PM" doctor="Dra. Josefina de Peña" theme="Clínica de enfermedades ampollosas autoinmunes CDP (casos clínicos)" />
                    <RowTable hour="12:30 PM - 12:40 PM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
                  </ContainerRows>

                  <Receso hour="12:50 PM - 1:20 PM" />

                  <Receso hour="04:50 PM - " title="Cena de Clausura" />
             
                  
                </>}
                {/* Termina salon 3 */}
                
    </>
  )
}

export {Abril11Programa}