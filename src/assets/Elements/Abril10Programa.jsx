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
                      <RowTable hour="11:10 AM - 11:30 AM" doctor="Dra. Mariel Isa Pimentel" theme="Pitiriasis versicolor. Un diagnóstico, múltiples caras" />
                      <RowTable hour="11:30 AM - 11:50 AM" doctor="Dr. Diego del Ojo" theme="Enfermedad de Fabry tratada con láser" />
                      <RowTable hour="11:50 AM - 12:10 PM" doctor="Dr. José Luis López Estebaranz" theme="Psoriasis super respondedores" />
                  </ContainerRows>

            
                  <ContainerRows rows={1}>
                      <RowTable hour="12:10 AM - 12:30 AM" doctor="DRA. GABRIELA L. ORTEGA GUTIERREZ" theme="Plática Bayer" />
                  </ContainerRows>

                  <Receso hour="12:30 PM - 01:00 PM" />

                  <div className='bg-custom-blue p-5 w-full md:w-3/5'><h2 className='text-white text-center'>MÓDULO: Cosmética</h2></div>
                  <ContainerRows rows={5}>
                      <RowTable hour="01:00 PM - 01:20 PM" doctor="Dr. Javier Ruiz" theme="Bioestimulantes faciales" />
                      <RowTable hour="01:20 PM - 01:40 PM" doctor="Dr. Javier Ruiz" theme="Terapia con enzimas para modelado facial" />
                      <RowTable hour="01:40 PM - 02:00 PM" doctor="Dra. Miriam Neri" theme="Nueva generación de principios activos recombinantes para diversas patologías dermatológicas" />
                      <RowTable hour="02:00 PM - 02:20 PM" doctor="Dr. José Enrique Hernández Pérez" theme="¿Qué hacer con las ojeras?" />
                  </ContainerRows>
                  <Receso hour="'02:20 PM - 03:00 PM" />
                
                  <Receso hour="04:00 PM - 08:30 PM" title="CEREMONIA DE INAUGURACIÓN" />
                  <ContainerRows rows={2}>
                      <RowTable hour="04:00 PM - 06:30 PM" doctor="" theme="Cóctel de bienvenida Cantabria" />
                      <RowTable hour="08:30 PM - 10:00 PM " doctor="" theme="Cena de profesores" />
                  </ContainerRows>
                </>}
                {/* Termina Salon 1 */}

                {/* Inicia Salon 2 */}
                {salon === 'salon2' && <>
                <div className='bg-custom-blue p-5 pb-0 w-full md:w-3/5'><h2 className='text-white text-center'>SALÓN F2</h2></div>
                  <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Psoriasis</h2></div>
                  <ContainerRows rows={5}>
                    <RowTable hour="09:00 AM - 09:20 AM" doctor="Dr. Diego Olín Pérez Rojas" theme="Guidamex. Guía mexicana de la dermatitis atópica" />
                    <RowTable hour="09:20 AM - 10:40 AM" doctor="Dra. Lucia Comellas Kirkerup" theme="LESIONES ELEMENTALES" />
                    <RowTable hour="09:40 AM - 10:00 AM" doctor="Dr. José Manuel Carrascosa" theme="Comorbilidades en psoriasis infantil" />
                    <RowTable hour="10:00 AM - 10:20 AM" doctor="Dra. Rosario García Salazar" theme="Lesiones post covid en menores" />
                    <RowTable hour="10:20 AM - 10:40 AM" doctor="PREGUNTAS Y RESPUESTAS" theme="Lesiones post covid en menores" />
                  </ContainerRows>
          
                  <Receso hour="10:40 AM - 11:10 AM" />
                  
                  <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Vitiligo</h2></div>
                  <ContainerRows rows={4}>
                    <RowTable hour="11:10 AM - 11:30 AM" doctor="Dra. Yolanda Gilabert" theme="Respuesta  clínica a tratamiento convencional de pacientes con hidradenitis y eritrasma" />
                    <RowTable hour="11:30 AM - 11:50 AM" doctor="Dr. Gustavo Jiménez Brito" theme="Escleroterapia: Técnica de aplicación" />
                    <RowTable hour="11:50 AM - 12:10 PM" doctor="Dra. Mariel Isa Pimentel" theme="Diagnóstico diferencial de eritrodermia neonatal" />
                    <RowTable hour="12:10 PM - 12:30 PM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
                  </ContainerRows>

                  <Receso hour="12:30 PM - 01:00 PM" />

                  <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Misceláneas </h2></div>
                  <ContainerRows rows={4}>
                    <RowTable hour="01:00 PM - 01:20 PM" doctor="Dr. Miguel Ángel Cardona Hernández" theme="Casos y actualidades de hiperqueratosis circunscrita" />
                    <RowTable hour="01:20 PM - 01:40 PM" doctor="Dra. Rosa María Wong Chew" theme="Infecciones por virus herpes, ¿Qué afectan a la piel?" />
                    <RowTable hour="01:40 PM - 02:00 PM" doctor="Dra. Guadalupe Silvia Mora Ruiz" theme="Microneedling no Aislado + RF Bipolar" /> 
                    <RowTable hour="02:00 PM - 02:20 PM" doctor="Dra. Helena Vidaurri De La Cruz" theme="Diagnóstico diferencial de eritrodermia neonatal" /> 
                  </ContainerRows>

                  <Receso hour="02:20 PM - 03:00 PM"  />
                  <Receso hour="03:00 PM - 04:00 PM"  title="CEREMONIA DE INAUGURACIÓN" />

                  <ContainerRows rows={2}>
                    <RowTable hour="04:00 PM - 06:30 PM" doctor="" theme="Cóctel de bienvenida Cantabria" />
                    <RowTable hour="08:30 PM - 10:00 PM" doctor="" theme="Cena de profesores" />
                  </ContainerRows>
                
                
                </>}
                {/* Termina Salon 2 */}

                {/* inicia Salon 3 D */}
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

                  <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Cirugía dermatológica y Tecnología</h2></div>
                  <ContainerRows rows={5}>
                    <RowTable hour="11:10 AM - 11:30 AM" doctor="Dra. Mirna Toledo Bahena" theme="Láser en pediatría" />
                    <RowTable hour="11:30 AM - 11:50 AM" doctor="Dr. Juan Antonio Vázquez Melo" theme="Hidradenitis supurativa, abordaje quirúrgico" />
                    <RowTable hour="11:50 AM - 12:10 PM" doctor="Dr. José Enrique Hernández Pérez" theme="Liposowing: Efectividad en transplante de grasa" />
                    <RowTable hour="12:10 PM - 12:30 PM" doctor="Dr. Miguel Ángel Cardona Hernández" theme="Cirugía reconstructiva compleja de oreja" />
                  </ContainerRows>
          
                  <Receso hour="12:30 PM - 01:00 PM" />

                  <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Micología. En colaboración con la Asociación Mexicana de Micología Médica</h2></div>
                  <ContainerRows rows={5}>
                    <RowTable hour="01:00 PM - 01:20 PM" doctor="Dr. Alexandro Bonifaz" theme="Tiña de la cabeza en ancianos" />
                    <RowTable hour="01:20 PM - 01:40 PM" doctor="Dra. Maricarmen Padilla" theme="Síndrome dos pies, una mano, en el Centro Dermatológico Pascua" />
                    <RowTable hour="01:40 PM - 02:00 PM" doctor="M. Javier Araiza Santibáñez" theme="Tiña gladiatorum y la importancia de los portadores asintomáticos" />
                    <RowTable hour="02:00 PM - 02:20 PM" doctor="Dra. Mariel Isa Pimentel" theme="Actualización en onicomicosis" />
                  </ContainerRows>

                  <Receso hour="02:20 PM - 03:00 PM" />
                  <Receso hour="03:00 PM - 04:00 PM" title="CEREMONIA DE INAUGURACIÓN" />
                  <ContainerRows rows={2}>
                    <RowTable hour="04:00 PM - 06:30 PM" doctor="" theme="Bienvenida " />
                    <RowTable hour="08:30 PM - 10:00 PM" doctor="" theme="Cena de profesores" />
                  </ContainerRows>
                  
                </>}
                {/* Termina salon 3 */}
                
    </>
  )
}

export {Abril10Programa}