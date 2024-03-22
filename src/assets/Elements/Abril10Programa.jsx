import React from 'react'
import { RowTable } from '../Components/RowTable'
import { ContainerRows } from '../Components/ContainerRows'
import { Receso } from '../Components/Receso'

function Abril10Programa({ setSalon, salon }) {
  return (
    <>
      <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>Centro de convenciones, Expo Santa Fé</h2></div>
      <div className='flex w-full flex-wrap justify-center gap-10'>
        <h3 className={`mb-4 mt-6 text-center cursor-pointer ${salon === 'salon1' && 'text-blue-secondary'}`} onClick={() => setSalon('salon1')}><b>Sala plenaria</b></h3>
        <h3 className={`mb-4 mt-6 text-center cursor-pointer ${salon === 'salon2' && 'text-blue-secondary'}`} onClick={() => setSalon('salon2')}><b>Salón F2</b></h3>
        <h3 className={`mb-4 mt-6 text-center cursor-pointer ${salon === 'salon3' && 'text-blue-secondary'}`} onClick={() => setSalon('salon3')}><b>Salón D</b></h3>
        <h3 className={`mb-4 mt-6 text-center cursor-pointer ${salon === 'salon4' && 'text-blue-secondary'}`} onClick={() => setSalon('salon4')}><b>Salón F1</b></h3>
        <h3 className={`mb-4 mt-6 text-center cursor-pointer ${salon === 'salon5' && 'text-blue-secondary'}`} onClick={() => setSalon('salon5')}><b>Salón B4</b></h3>
        <h3 className={`mb-4 mt-6 text-center cursor-pointer ${salon === 'salon6' && 'text-blue-secondary'}`} onClick={() => setSalon('salon6')}><b>Salón B5</b></h3>
      </div>

      {/* Inicia Salon 1 */}
      {salon === 'salon1' && <>
        <div className='bg-custom-blue p-5 pb-0 w-full md:w-3/5 mb-4 pb-4'><h2 className='text-white text-center'>SALA PLENARIA / SALONES A3 y A4</h2></div>
        <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 pt-4'><h2 className='text-white text-center'>MÓDULO: Dermatología pediátrica </h2></div>
        <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>Coordinador: DRA. GABRIELA L. ORTEGA GUTIERREZ</h2></div>
        <ContainerRows rows={4}>
          <RowTable hour="09:00 AM - 09:40 AM" doctor="Dra. Désirée Larenas" theme="Guidamex. Guía mexicana de la dermatitis atópica" />
          <RowTable hour="09:40 AM - 10:00 AM" doctor="Dra. Adriana Valencia Herrera" theme="Tratamiento del hemangioma infantil con propanolol y neurodesarrollo " />
          <RowTable hour="10:00 AM - 10:20 AM" doctor="Dra. Mirna Toledo Bahena" theme="Comorbilidades en psoriasis infantil" />
          <RowTable hour="10:20 AM - 10:40 AM" doctor="Dra. Adriana Valencia Herrera" theme="Manifestaciones cutáneas de Covid y post Covid" />
        </ContainerRows>

        <Receso hour="10:40 AM - 11:10 AM" />
        <div className='bg-custom-blue p-5 w-full md:w-3/5'><h2 className='text-white text-center'>MÓDULO: CILAD</h2></div>
        <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>Coordinador: DR. JOSÉ LUIS LÓPEZ ESTEBARANZ</h2></div>
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
        <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>Coordinador: DR. JOSÉ ENRIQUE HERNÁNDEZ PÉREZ</h2></div>
        
        <ContainerRows rows={5}>
          <RowTable hour="01:00 PM - 01:20 PM" doctor="Dr. Javier Ruiz" theme="Bioestimulantes faciales" />
          <RowTable hour="01:20 PM - 01:40 PM" doctor="Dr. Javier Ruiz" theme="Terapia con enzimas para modelado facial" />
          <RowTable hour="01:40 PM - 02:00 PM" doctor="Dra. Miriam Neri Carmona" theme="Nueva generación de principios activos recombinantes para diversas patologías dermatológicas" />
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
        <div className='bg-custom-blue p-5 pb-0 w-full md:w-3/5 mb-4 pb-4'><h2 className='text-white text-center'>SALÓN F2</h2></div>
        <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 pt-4'><h2 className='text-white text-center'>MÓDULO: Psoriasis</h2></div>
        <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>Coordinador: DRA. ALEJANDRA ROSALES BARBOSA</h2></div>
        <ContainerRows rows={5}>
          <RowTable hour="09:00 AM - 09:20 AM" doctor="Dr. Diego Olín Pérez Rojas" theme="Mi paciente con psoriasis, ¿necesita un cambio de terapia biológica? y ¿ahora qué hago?" />
          <RowTable hour="09:20 AM - 10:40 AM" doctor="Dra. Lucia Comellas Kirkerup" theme="Psoriasis con progresión de artritis psoriásica" />
          <RowTable hour="09:40 AM - 10:00 AM" doctor="Dr. José Manuel Carrascosa" theme="ZOOM ¿Dermatitis atópica / Psoriasis?" />
          <RowTable hour="10:00 AM - 10:20 AM" doctor="Dra. Rosario García Salazar" theme="Comorbilidades en psoriasis " />
          <RowTable hour="10:20 AM - 10:40 AM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
        </ContainerRows>

        <Receso hour="10:40 AM - 11:10 AM" />

        <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>MÓDULO: Vitiligo</h2></div>
        <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>Coordinador: DR. GUSTAVO JIMÉNEZ BRITO</h2></div>
        <ContainerRows rows={4}>
          <RowTable hour="11:10 AM - 11:30 AM" doctor="Dra. Yolanda Gilabert" theme="Terapia fotodinámica más allá del cáncer de piel " />
          <RowTable hour="11:30 AM - 11:50 AM" doctor="Dr. Gustavo Jiménez Brito" theme="Algunos aspectos inmunológicos del vitiligo y nueva esperanza terapéutica" />
          <RowTable hour="11:50 AM - 12:10 PM" doctor="Dra. Mariel Isa Pimentel" theme="Mecanismos de la psicodermatología en psoriasis y vitiligo" />
          <RowTable hour="12:10 PM - 12:30 PM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
        </ContainerRows>

        <Receso hour="12:30 PM - 01:00 PM" />

        <div className='bg-custom-blue p-5 w-full md:w-3/5'><h2 className='text-white text-center'>MÓDULO: Misceláneas </h2></div>
        <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>Coordinador: DRA. SUSANA CANALIZO ALMEIDA</h2></div>
        <ContainerRows rows={4}>
          <RowTable hour="01:00 PM - 01:20 PM" doctor="Dr. Miguel Ángel Cardona Hernández" theme="Casos y actualidades de hiperqueratosis circunscrita" />
          <RowTable hour="01:20 PM - 01:40 PM" doctor="Dra. Rosa María Wong Chew" theme="Infecciones por virus herpes, ¿Qué afectan a la piel?" />
          <RowTable hour="01:40 PM - 02:00 PM" doctor="Dra. Guadalupe Silvia Mora Ruiz" theme="Microneedling no Aislado + RF Bipolar" />
          <RowTable hour="02:00 PM - 02:20 PM" doctor="Dra. Helena Vidaurri De La Cruz" theme="Diagnóstico diferencial de eritrodermia neonatal" />
        </ContainerRows>

        <Receso hour="02:20 PM - 03:00 PM" />
        <Receso hour="03:00 PM - 04:00 PM" title="CEREMONIA DE INAUGURACIÓN" />

        <ContainerRows rows={2}>
          <RowTable hour="04:00 PM - 06:30 PM" doctor="" theme="Cóctel de bienvenida Cantabria" />
          <RowTable hour="08:30 PM - 10:00 PM" doctor="" theme="Cena de profesores" />
        </ContainerRows>


      </>}
      {/* Termina Salon 2 */}

      {/* inicia Salon 3 D */}
      {salon === 'salon3' && <>
        <div className='bg-custom-blue p-5 pb-0 w-full md:w-3/5 mb-4 pb-4'><h2 className='text-white text-center'>SALÓN D</h2></div>
        <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 pt-4'><h2 className='text-white text-center'>MÓDULO: Inmunología</h2></div>
        <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>Coordinador: DRA. ALICIA LEMINI LÓPEZ</h2></div>
        <ContainerRows rows={5}>
          <RowTable hour="09:00 AM - 09:20 AM" doctor="Dra. Alicia Lemini" theme="Dermatitis atópica y su aspecto clínico molecular" />
          <RowTable hour="09:20 AM - 09:40 AM" doctor="Dra. Erika Alvarado" theme="Abordaje práctico de las dermatosis ampollosas" />
          <RowTable hour="09:40 AM - 10:00 AM" doctor="Dr. Víctor Hernández Bautista" theme="Uso clínico de gammaglobulina intravenosa en dermatología" />
          <RowTable hour="10:00 AM - 10:20 AM" doctor="Dr. Roberto Blancas Espinosa" theme="Dermatitis de manos y pies" />
          <RowTable hour="10:20 AM - 10:40 AM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
        </ContainerRows>

        <Receso hour="10:40 AM - 11:10 AM" />

        <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5'><h2 className='text-white text-center'>MÓDULO: Cirugía dermatológica y Tecnología</h2></div>
        <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>Coordinador: DRA. MIRNA ERENDIRA TOLEDO BAHENA</h2></div>
        <ContainerRows rows={5}>
          <RowTable hour="11:10 AM - 11:30 AM" doctor="Dra. Mirna Toledo Bahena" theme="Láser en pediatría" />
          <RowTable hour="11:30 AM - 11:50 AM" doctor="Dr. Juan Antonio Vázquez Melo" theme="Hidradenitis supurativa, abordaje quirúrgico" />
          <RowTable hour="11:50 AM - 12:10 PM" doctor="Dr. José Enrique Hernández Pérez" theme="Liposowing: Efectividad en transplante de grasa" />
          <RowTable hour="12:10 PM - 12:30 PM" doctor="Dr. Miguel Ángel Cardona Hernández" theme="Cirugía reconstructiva compleja de oreja" />
        </ContainerRows>

        <Receso hour="12:30 PM - 01:00 PM" />

        <div className='bg-custom-blue p-5 w-full md:w-3/5'><h2 className='text-white text-center'>MÓDULO: Micología. En colaboración con la Asociación Mexicana de Micología Médica</h2></div>
        <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>Coordinador: M. JAVIER ARAIZA SANTIBÁÑEZ</h2></div>
        <ContainerRows rows={5}>
          <RowTable hour="01:00 PM - 01:20 PM" doctor="Dr. Alexandro Bonifaz Trujillo" theme="Tiña de la cabeza en ancianos" />
          <RowTable hour="01:20 PM - 01:40 PM" doctor="Dra. María del Carmen Padilla Desgarennes" theme="Síndrome dos pies, una mano, en el Centro Dermatológico Pascua" />
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

      {/* Inicia salon 4 */}
      {salon === 'salon4' && <>
      <div className='bg-custom-blue p-5 pb-0 w-full md:w-3/5 pb-4'><h2 className='text-white text-center'>SALÓN F1</h2></div>
      <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'>
        <h2 className='text-white text-center'>DESAYUNO CON EL EXPERTO</h2>
      </div>
      <ContainerRows>
        <RowTable hour="8:00 AM - 9:00 AM" doctor="Dra. Angélica M. Beirana Palencia" theme="Retos y Actualidades en Dermatología Pediátrica" />
      </ContainerRows>
      </>}
      {/* Termina salon 4 */}

      {/* Inicia salon 5 */}
      {salon === 'salon5' && <>
      <div className='bg-custom-blue p-5 pb-0 w-full md:w-3/5 pb-4'><h2 className='text-white text-center'>SALÓN B4</h2></div>
      <ContainerRows>
        <RowTable hour="12:00 PM - 2:00 PM" doctor="Dr. Diego del Ojo" theme="Fórmulas magistrales" />
      </ContainerRows>
      </>}
      {/* Termina salon 5 */}

      {/* Inicia salon 6 */}
      {salon === 'salon6' && <>
      <div className='bg-custom-blue p-5 pb-0 w-full md:w-3/5 pb-4'><h2 className='text-white text-center'>SALÓN B5</h2></div>
      <ContainerRows>
        <RowTable hour="12:00 PM - 2:00 PM" doctor="Dra. Yolanda Gilaberte" theme="¿Cómo hacer un artículo?" />
      </ContainerRows>
      </>}
      {/* Termina salon 6 */}

    </>
  )
}

export { Abril10Programa }