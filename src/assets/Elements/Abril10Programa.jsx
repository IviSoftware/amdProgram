import React from 'react'
import {RowTable} from '../Components/RowTable'
import {ContainerRows} from '../Components/ContainerRows'
import { Receso } from '../Components/Receso'

function Abril10Programa({setSalon,salon}) {
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
                  <div className='bg-custom-blue p-5 pb-0 w-full md:w-3/5'><h2 className='text-white text-center'>SALA PLENARIA / SALONES A3 y A4</h2></div>
                  <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Dermatología pediátrica </h2></div>
                  <ContainerRows rows={4}>
                    <RowTable hour="09:00 AM - 09:40 AM" doctor="Dra. Désirée Larenas" theme="Guidamex. Guía mexicana de la dermatitis atópica" />
                    <RowTable hour="09:40 AM - 10:00 AM" doctor="Dra. Adriana Valencia Herrera" theme="LESIONES ELEMENTALES" />
                    <RowTable hour="10:00 AM - 10:20 AM" doctor="Dra. Mirna Toledo Bahena" theme="Comorbilidades en psoriasis infantil" />
                    <RowTable hour="10:20 AM - 10:40 AM" doctor="Dr. Héctor Carrillo" theme="Lesiones post covid en menores" />
                  </ContainerRows>
          
                  <Receso hour="10:40 AM - 11:10 AM" />
                  <div className='bg-custom-blue p-5 w-full md:w-3/5'><h2 className='text-white text-center'>MÓDULO: CILAD</h2></div>
                  <ContainerRows rows={5}>
                      <RowTable hour="11:10 AM - 11:30 AM" doctor="Dr. José Luis López Estebaranz" theme="FOTOPROTECCIÓN" />
                      <RowTable hour="11:30 AM - 11:50 AM" doctor="Dr. Diego del Ojo" theme="FOTOPROTECCIÓN" />
                      <RowTable hour="11:50 AM - 12:10 PM" doctor="Dra. Ivonne Arellano" theme="FOTOPROTECCIÓN" />
                      <RowTable hour="12:10 PM - 12:30 PM" doctor="" theme="" />
                      <RowTable hour="12:30 PM - 12:50 PM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />

                  </ContainerRows>

                  <Receso hour="12:50 PM - 1:20 PM" />
                  <div className='bg-custom-blue p-5 w-full md:w-3/5'><h2 className='text-white text-center'>MÓDULO: Acné</h2></div>
                  <ContainerRows rows={5}>
                  <RowTable hour="1:20 PM - 1:40 PM" doctor="Dra. Alejandra Rosales" theme="Acné y probióticos" />
                      <RowTable hour="1:40 PM - 2:00 PM" doctor="Dra. Rebeca Rodríguez" theme="Tratamiento tópico del acné" />
                      <RowTable hour="2:00 PM - 2:20 PM" doctor="Dra. Gabriela Ortega" theme="Preparación para peelings en acné" />
                      <RowTable hour="2:20 PM - 2:40 PM" doctor="Dr. Enrique Hernández Pérez" theme="" />
                      <RowTable hour="2:40 PM - 3:00 PM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
                  </ContainerRows>
                  <Receso hour="3:00 PM - 3:30 PM" />
                  <div className='bg-custom-blue p-5 w-full md:w-3/5'><h2 className='text-white text-center'>MÓDULO: Tecnología y Láser</h2></div>
                  <ContainerRows rows={3}>
                      <RowTable hour="3:30 PM - 3:50 PM" doctor="Dra. Mirna Toledo Bahena" theme="Láser en pediatría" />
                      <RowTable hour="3:50 PM - 4:10 PM" doctor="Dra. Silvia Mora" theme="Microneedling no Aislado + RF Bipolar" />
                      <RowTable hour="4:10 PM - 4:30 PM" doctor="" theme="" />
                  </ContainerRows>
                  <Receso hour="4:30 PM - 5:00 PM" title="CEREMONIA DE INAUGURACIÓN" />
                  <ContainerRows rows={2}>
                      <RowTable hour="5:00 PM - 07:50 PM" doctor="" theme="Cóctel de bienvenida Cantabria" />
                      <RowTable hour="08:30 PM - 10:00 PM " doctor="" theme="Cena de profesores" />
                  </ContainerRows>
                </>}
                {/* Termina Salon 1 */}

                {/* Inicia Salon 2 */}
                {salon === 'salon2' && <>
                <div className='bg-custom-blue p-5 pb-0 w-full md:w-3/5'><h2 className='text-white text-center'>SALÓN F2</h2></div>
                  <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Cosmética</h2></div>
                  <ContainerRows rows={5}>
                    <RowTable hour="11:10 AM - 11:30 AM" doctor="Dra. Miriam Neri" theme="Enzimas recombinantes de nueva generación en dermatología" />
                    <RowTable hour="11:30 AM - 11:50 AM" doctor="Dra. Gabriela Ortega" theme="Peelings de la A a la Z" />
                    <RowTable hour="11:50 AM - 12:10 PM" doctor="Dr. José Enrique Hernández Pérez" theme="¿Qué hacer con las ojeras?" />
                    <RowTable hour="12:10 PM - 12:30 PM" doctor="Dr. Javier Ruiz" theme="Bioestimulantes faciales" />
                    <RowTable hour="12:30 PM - 12:50 PM" doctor="Dr. Javier Ruiz" theme="Terapia con enzimas para modelado facial" />
                  </ContainerRows>
          
                  <Receso hour="12:50 PM - 1:20 PM" />
                  
                  <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Misceláneas</h2></div>
                  <ContainerRows rows={5}>
                    <RowTable hour="01:20 PM - 01:40 PM" doctor="Dra. Mariela del Ángel" theme="Respuesta  clínica a tratamiento convencional de pacientes con hidradenitis y eritrasma" />
                    <RowTable hour="01:40 PM - 02:00 PM" doctor="Dr. Jorge Lauro Moreno González" theme="Escleroterapia: Técnica de aplicación" />
                    <RowTable hour="02:00 PM - 02:20 PM" doctor="Dra. Helena Vidaurri" theme="Diagnóstico diferencial de eritrodermia neonatal" />
                    <RowTable hour="02:20 PM - 02:40 PM" doctor="Dr. Miguel Ángel Cardona Hernández" theme="Casos y actualidades de hiperqueratosis circunscrita" />
                    <RowTable hour="02:40 PM - 03:00 PM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
                  </ContainerRows>

                  <Receso hour="03:00 PM - 03:30 PM" />

                  <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Cirugía dermatológica </h2></div>
                  <ContainerRows rows={3}>
                    <RowTable hour="03:30 PM - 03:50 PM" doctor="Dr. Miguel Ángel Cardona Hernández" theme="Cirugía reconstructiva compleja de oreja" />
                    <RowTable hour="03:50 PM - 04:10 PM" doctor="Dr. Juan Antonio Vázquez Velo" theme="Hidradenitis supurativa, abordaje quirúrgico" />
                    <RowTable hour="04:10 PM - 04:30 PM" doctor="Dr. José Enrique Hernández Pérez" theme="Liposowing: Efectividad en transplante de grasa" /> 
                  </ContainerRows>

                  <Receso hour="04:30 PM - 05:00 PM" title="CEREMONIA DE INAUGURACIÓN" />
                  <ContainerRows rows={2}>
                    <RowTable hour="05:00 PM - 07:50 PM" doctor="" theme="Cóctel de bienvenida Cantabria" />
                    <RowTable hour="08:30 PM - 10:00 PM" doctor="" theme="Cena de profesores" />
                  </ContainerRows>
                
                
                </>}
                {/* Termina Salon 2 */}

                {/* inicia Salon 3 */}
                {salon === 'salon3' && <>
                  <div className='bg-custom-blue p-5 pb-0 w-full md:w-3/5'><h2 className='text-white text-center'>SALÓN D</h2></div>
                  <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Inmunología</h2></div>
                  <ContainerRows rows={5}>
                    <RowTable hour="09:00 AM - 09:20 AM" doctor="Dra. Alicia Lemini" theme="Dermatitis atópica y su aspecto clínico molecular" />
                    <RowTable hour="09:20 AM - 09:40 AM" doctor="Dra. Erika Alvarado" theme="Abordaje práctico de las dermatosis ampollosas" />
                    <RowTable hour="09:40 AM - 10:00 AM" doctor="Dr. Víctor Hernández Bautista" theme="Uso clínico de gammaglobulina intravenosa en dermatología" />
                    <RowTable hour="10:00 AM - 10:20 AM" doctor="Dr. Roberto Blancas" theme="Dermatitis de manos y pies" />
                    <RowTable hour="10:20 AM - 10:40 AM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
                  </ContainerRows>
          
                  <Receso hour="10:40 AM - 11:10 AM" />

                  <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Micología. En colaboración con la Asociación Mexicana de Micología Médica</h2></div>
                  <ContainerRows rows={5}>
                    <RowTable hour="11:10 AM - 11:30 AM" doctor="Dr. Alexandro Bonifaz" theme="Tiña de la cabeza en ancianos" />
                    <RowTable hour="11:30 AM - 11:50 AM" doctor="Dra. Maricarmen Padilla" theme="Síndrome dos pies, una mano, en el Centro Dermatológico Pascua" />
                    <RowTable hour="11:50 AM - 12:10 PM" doctor="Dra. Mariel Isa Pimentel" theme="Actualización en onicomicosis" />
                    <RowTable hour="12:10 PM - 12:30 PM" doctor="M. Javier Araiza Santibáñez" theme="Tiña gladiatorum y la importancia de los portadores asintomáticos" />
                    <RowTable hour="12:30 PM - 12:50 PM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
                  </ContainerRows>

                  <Receso hour="12:50 PM - 01:20 PM" />
                  <Receso hour="04:30 PM - 05:00 PM" title="CEREMONIA DE INAUGURACIÓN" />
                  <ContainerRows rows={2}>
                    <RowTable hour="05:00 PM - 07:50 PM" doctor="" theme="Bienvenida " />
                    <RowTable hour="08:30 PM - 10:00 PM" doctor="" theme="Cena de profesores" />
                  </ContainerRows>
                  
                </>}
                {/* Termina salon 3 */}
                
    </>
  )
}

export {Abril10Programa}