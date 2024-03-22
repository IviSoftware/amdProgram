import React from 'react'
import { RowTable } from '../Components/RowTable'
import { ContainerRows } from '../Components/ContainerRows'
import { Receso } from '../Components/Receso'

function Abril12Programa({ setSalon, salon }) {
  return (
    <>
      <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>Centro de convenciones, Expo Santa Fé</h2></div>
      <div className='flex w-full justify-center gap-10'>
        <h3 className={`mb-4 mt-6 text-center cursor-pointer ${salon === 'salon1' && 'text-blue-secondary'}`} onClick={() => setSalon('salon1')}><b>Sala plenaria</b></h3>
        <h3 className={`mb-4 mt-6 text-center cursor-pointer ${salon === 'salon2' && 'text-blue-secondary'}`} onClick={() => setSalon('salon2')}><b>Salón F2</b></h3>
        <h3 className={`mb-4 mt-6 text-center cursor-pointer ${salon === 'salon3' && 'text-blue-secondary'}`} onClick={() => setSalon('salon3')}><b>Salón D</b></h3>

      </div>

      {/* Inicia Salon 1 */}
      {salon === 'salon1' && <>
        <div className='bg-custom-blue p-5 pb-0 mb-0 w-full md:w-3/5 mb-4 pb-4'><h2 className='text-white text-center'>SALA PLENARIA / SALONES A3 y A4</h2></div>
        <div className='bg-custom-blue p-5 pt-0 mt-0 w-full md:w-3/5 mt-4'><h2 className='text-white text-center'>MÓDULO: Misceláneas</h2></div>
        <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>Coordinador: DRA. MIRIAM PUEBLA MIRANDA</h2></div>

        <ContainerRows rows={4}>
          <RowTable hour="09:00 AM - 09:20 AM" doctor="Dr. Eduardo Marín Hernández" theme="Virus, vacunas y piel" />
          <RowTable hour="09:20 AM - 09:40 AM" doctor="Dr. Luis Méndez" theme="Salud mental en el paciente dermatológico" />
          <RowTable hour="09:40 AM - 10:00 PM" doctor="Dra. Miriam Puebla" theme="Dermatomiositis Paraneoplásica" />
          <RowTable hour="10:00 PM - 10:20 PM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
        </ContainerRows>

        <Receso hour="10:20 PM - 10:50 PM" />
        <div className='bg-custom-blue p-5 w-full md:w-3/5'><h2 className='text-white text-center'>MÓDULO: Fotoprotección </h2></div>
        <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>Coordinador: DR. FERMÍN JURADO</h2></div>
        <ContainerRows rows={4}>
          <RowTable hour="10:50 AM - 11:10 AM" doctor="Dr. Fermín Jurado" theme="Fotoprotección sistémica basada en la evidencia" />
          <RowTable hour="11:10 AM - 11:30 AM" doctor="Dra. Fadua Besil Eguia" theme="Fotoprotección tópica" />
          <RowTable hour="11:30 AM - 11:50 AM" doctor="Dra. Susana Puig" theme="ZOOM" />
          <RowTable hour="11:50 AM - 12:10 PM" doctor="PREGUNTAS Y RESPUESTAS" theme="" />
        </ContainerRows>


        <Receso hour="12:10 PM - 12:40 PM" />
        <div className='bg-custom-blue p-5 w-full md:w-3/5'><h2 className='text-white text-center'>MÓDULO: Pelo y uñas</h2></div>
        <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>Coordinador: DR. ARMANDO MEDINA BOJÓRQUEZ</h2></div>
        
        <ContainerRows rows={4}>
          <RowTable hour="12:40 PM - 01:00 PM" doctor="Dr. Daniel Asz" theme="Alopecias por presión" />
          <RowTable hour="01:00 PM - 01:20 PM" doctor="Dr. Carlos Barrera Ochoa" theme="Do’s and don’t del minoxidil oral." />
          <RowTable hour="01:20 PM - 01:40 PM" doctor="Dr. Jorge Ocampo Garza" theme="Melanoniquia longitudinal" />
          <RowTable hour="01:40 PM - 02:00 PM" doctor="Dr. Armando Medina Bojórquez" theme="Alopecia androgenética ¿Finasteride o Dutasteride?" />
          <RowTable hour="02:00 PM - 02:20 PM" doctor="PREGUNTAS Y RESPUESTAS" theme="" />
        </ContainerRows>

        <Receso hour="02:40 PM - 03:00 PM" />

        <ContainerRows rows={4}>
          <RowTable hour="03:20 PM - 05:00 PM" doctor="" theme="Sesión de negocios" />
        </ContainerRows>

      </>}
      {/* Termina Salon 1 */}

      {/* Inicia Salon 2 */}
      {salon === 'salon2' && <>
        <div className='bg-custom-blue p-5 pb-0 w-full md:w-3/5 mb-4 pb-4'><h2 className='text-white text-center'>SALÓN F2</h2></div>
        <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mt-4'>
          <h2 className='text-white text-center'>MÓDULO: Foro de residentes</h2>
        </div>
        <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>Coordinador: DRA. ALEJANDRA ROSALES BARBOSA</h2></div>
        <ContainerRows>
          <RowTable hour="08:00 AM - 09:00 AM" doctor="Dra. Esperanza Welsh" theme="Suero como un aliado en la práctica dermatológica para la restauración y renovación cutánea." />
          <RowTable hour="09:00 AM - 09:10 AM" doctor="Dra. Andrea Merino Ruisánchez" theme="Diferencias en la densidad malassezia spp. En pacientes con rosácea comparado con sujetos sanos y su correlación con la gravedad." />
          <RowTable hour="09:10 AM - 09:20 AM" doctor="Dra. Ivone Carrasco Zendejas" theme="Presentación, características clínicas, histopatológicas, tratamiento y evolución de los pacientes con diagnóstico de blueberry muffin baby en un tercer nivel de atención." />
          <RowTable hour="09:20 AM - 09:30 AM" doctor="Dra. Natasha A. Medina Vicent" theme="Iluminando el diagnóstico: Evaluación comparativa de técnicas de microscopía en el diagnóstico de dermatofitosis." />
          <RowTable hour="09:30 AM - 09:40 AM" doctor="Dra. Daniela Ann Reyes Weaver" theme="Eritema elevatum diutinum, una dermatosis infrecuente como expresión de discrasia sanguínea." />
          <RowTable hour="09:40 AM - 09:50 AM" doctor="Dra. Estefanía Zepeda Muñoz" theme="Micosis fungoide foliculotropa variante poco frecuente y reto diagnóstico en pacientes pediátricos: reporte de caso." />
          <RowTable hour="09:50 AM - 10:00 AM" doctor="Dr. José De Jesús Valles Vázquez" theme="Nódulo queratinizado en paciente con VIH. Presentación atípica del sarcoma de kaposi." />
          <RowTable hour="10:00 AM - 10:10 AM" doctor="Dra. Leoneli Irene Grajeda Medina" theme="Psoriasis y hepatopatía alcohólica." />
          <RowTable hour="10:10 AM - 10:20 AM" doctor="Dra. Maria Fernanda Uehara González" theme="Micosis profunda durante el embarazo." />
        </ContainerRows>

        <Receso hour="10:20 AM - 10:50 AM" />

        <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'>
          <h2 className='text-white text-center'>MÓDULO: Trabajos premiados de residentes</h2>
        </div>
        <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>Coordinador: DRA. GABRIELA L. ORTEGA GUTIERREZ</h2></div>
        <ContainerRows>
          <RowTable hour="10:50 AM - 11:10 AM" doctor="Dra. Ruth María Amanda Márquez Muciño" theme="Lesión verrugosa lineal en paciente pediátrico" />
          <RowTable hour="11:10 AM - 11:30 AM" doctor="Dra. Citlalli Fernanda Pérez López" theme="Erupción papuloescamosa asociada a Card14: un desafío diagnóstico y terapéutico en dermatología" />
          <RowTable hour="11:30 AM - 11:50 AM" doctor="Dr. José Ramón García Lira" theme="Innovación en regeneración tisular en paciente pediátrico con necrólisis epidérmica tóxica" />
          <RowTable hour="11:50 AM - 12:10 PM" doctor="Dr. José Ramón García Lira" theme="Regeneración de mucosa oral y labial en paciente pediátrico con Síndrome de Steven Johnson." />
        </ContainerRows>

        <Receso hour="12:10 PM - 12:40 PM" />

        <div className='bg-custom-blue p-5 w-full md:w-3/5 mb-10'>
          <h2 className='text-white text-center'>MÓDULO: Casos clínicos de difícil diagnóstico (residentes)</h2>
        </div>
        <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>Coordinador: DRA. ALICIA LEMINI LÓPEZ</h2></div>
        <ContainerRows>
          <RowTable hour="12:40 PM - 01:00 PM" doctor="Dra. María José Arroyo López" theme="Abordaje diagnóstico de paniculitis" />
          <RowTable hour="01:00 PM - 01:20 PM" doctor="Dra. Valeria Ornelas León" theme="Reacciones dermatológicas asociadas a los nuevos inhibidores tirosin cinasa" />
          <RowTable hour="01:20 PM - 01:40 PM" doctor="Dra. Sonia Mingaud Rodriguez" theme="Síndrome esclerodermiforme abordaje diagnóstico" />
          <RowTable hour="01:40 PM - 02:00 PM" doctor="Dra. Alejandra Goldaracena" theme="Eritrodermia severa resistente a tratamiento" />
          <RowTable hour="02:00 PM - 02:20 PM" doctor="Dra. Blanca Olivia Sicairos" theme="Abordaje de neoplasia de difícil diagnóstico" />
        </ContainerRows>

        <Receso hour="02:40 PM - 03:00 PM" title="CLAUSURA" />

        <Receso hour="03:20 PM - 05:00 PM" title="Sesión de negocios" />



      </>}
      {/* Termina Salon 2 */}

      {/* Inicia Salon 3 */}
      {salon === 'salon3' && <>
      <div className='bg-custom-blue p-5 pb-0 w-full md:w-3/5 mb-4 pb-4'><h2 className='text-white text-center'>SALÓN D</h2></div>
      <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mt-4'>
        <h2 className='text-white text-center'>MÓDULO: Cosmética</h2>
      </div>
      <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>Coordinador: DRA. GABRIELA L. ORTEGA GUTIERREZ</h2></div>
      <ContainerRows>
        <RowTable hour="09:00 AM - 09:20 AM" doctor="Dra. Gabriela L. Ortega Gutierrez" theme="Peelings de la A a la Z" />
        <RowTable hour="09:20 AM - 09:40 AM" doctor="Dr. Enrique Hernández Pérez" theme="El vuelo de la cirugía cosmética" />
        <RowTable hour="09:40 AM - 10:00 AM" doctor="Dr. Daniel Azs" theme="Alopecias secundarias a procedimientos estéticos" />
        <RowTable hour="10:00 AM - 10:20 AM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
      </ContainerRows>

      <Receso hour="10:20 AM - 10:50 AM" />

      <div className='bg-custom-blue p-5 w-full md:w-3/5'>
        <h2 className='text-white text-center'>MÓDULO: Misceláneas</h2>
      </div>
      <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>Coordinador: DRA. SUSANA CANALIZO ALMEIDA</h2></div>
      <ContainerRows>
        <RowTable hour="10:50 AM - 11:10 AM" doctor="Dra. Mariela del Ángel" theme="Respuesta clínica a tratamiento convencional de pacientes con hidradenitis y eritrasma" />
        <RowTable hour="11:10 AM - 11:30 AM" doctor="Dra. Liliana Godinez" theme="Revisiones sobre calidad de vida y enfermedades de la piel con enfoque especial en psoriasis y dermatitis atópica. (Zoom)" />
        <RowTable hour="11:30 AM - 11:50 AM" doctor="Dra. Susana Canalizo" theme="Enfermedades de transmisión sexual" />
        <RowTable hour="11:50 AM - 12:10 PM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
        <RowTable hour="12:10 PM - 12:40 PM" doctor="RECESO" theme="RECESO" />
      </ContainerRows>

      <Receso hour="12:10 PM - 12:40 PM" />

      <div className='bg-custom-blue p-5 w-full md:w-3/5'>
        <h2 className='text-white text-center'>MÓDULO: Acné</h2>
      </div>
      <div className='bg-custom-blue p-5 pt-0 w-full md:w-3/5 mb-10'><h2 className='text-white text-center'>Coordinador: DR. ENRIQUE HERNÁNDEZ PÉREZ</h2></div>
      <ContainerRows>
        <RowTable hour="12:40 PM - 01:00 PM" doctor="Dra. Alejandra Rosales Barbosa" theme="Acné y probióticos" />
        <RowTable hour="01:00 PM - 01:20 PM" doctor="Dra. Rebeca Rodríguez Cabral" theme="Tratamiento tópico del acné" />
        <RowTable hour="01:20 PM - 01:40 PM" doctor="Dra. Gabriela L. Ortega Gutierrez" theme="Preparación para peelings en acné" />
        <RowTable hour="01:40 PM - 02:00 PM" doctor="Dr. Enrique Hernández Pérez" theme="Mi tratamiento en el acné polimorfo" />
        <RowTable hour="02:00 PM - 02:20 PM" doctor="" theme="PREGUNTAS Y RESPUESTAS" />
      </ContainerRows>

      <Receso hour="02:40 PM - 03:00 PM" title="CLAUSURA" />

      <Receso hour="03:20 PM - 05:00 PM" title="Sesión de negocios" />
        
      
      </>}
      {/* Termina Salon 3 */}



    </>
  )
}

export { Abril12Programa }