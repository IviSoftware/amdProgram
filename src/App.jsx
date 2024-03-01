import { useState} from 'react';
import './App.css';
import { BtnMenu } from './assets/Components/BtnMenu';
import { PreCongreso } from './assets/Elements/PreCongreso';
import { CursoDoctores } from './assets/Elements/CursoDoctores';
import {Abril10Programa} from './assets/Elements/Abril10Programa';
import { Abril11Programa } from './assets/Elements/Abril11Programa';
import {Abril12Programa} from './assets/Elements/Abril12Programa';



function App() {

  const [sectionState,setSectionState] = useState('curso')
  const [dayCourse,setDayCourse] = useState('10 DE ABRIL')
  const [salon,setSalon] = useState('salon1')

  return (
    <>
        <section className='w-full flex justify-center items-center gap-5 mb-5 mt-2'>
            <div>
              <BtnMenu type="curso" setSectionState={setSectionState} sectionState={sectionState}>Curso para médicos generales</BtnMenu>
             <h3 className={`mb-4 mt-6 text-center ${sectionState === 'curso' ? 'opacity-1' : 'opacity-0'}`}><b>8 DE ABRIL</b></h3>  
            </div>
            <div>
              <BtnMenu type="pre" setSectionState={setSectionState} sectionState={sectionState}>Pre-Congreso</BtnMenu>
              <h3 className={`mb-4 mt-6 text-center ${sectionState === 'pre' ? 'opacity-1' : 'opacity-0'}`}><b>9 DE ABRIL</b></h3>
            </div>
            <div>
              <BtnMenu type="cursoDias" setSectionState={setSectionState} sectionState={sectionState}>Congreso</BtnMenu>
              <h3 className={`mb-4 mt-6 text-center ${sectionState === '' ? 'opacity-0' : 'opacity-0'}`}><b>10 DE ABRIL</b></h3>
            </div>
        </section>

        {sectionState === 'cursoDias' && <section className='flex w-full justify-center gap-10'>
              
              <h3 className={`
                mb-2 mt-0 text-center cursor-pointer ${dayCourse === '10 DE ABRIL' && 'text-blue-secondary'} ${sectionState === 'cursoDias' ? 'block' : 'hidden'}`} 
              onClick={()=>{
                setDayCourse("10 DE ABRIL")
                setSalon('salon1')
              }}>
                <b>10 DE ABRIL</b>
              </h3>
              <h3 className={`
                mb-2 mt-0 text-center cursor-pointer ${dayCourse === '11 DE ABRIL' && 'text-blue-secondary'} ${sectionState === 'cursoDias' ? 'block' : 'hidden'}`} 
              onClick={()=>{
                setDayCourse("11 DE ABRIL")
                setSalon('salon1')
                }}>
                <b>11 DE ABRIL</b>
              </h3>
              <h3 className={`
                mb-2 mt-0 text-center cursor-pointer ${dayCourse === '12 DE ABRIL' && 'text-blue-secondary'} ${sectionState === 'cursoDias' ? 'block' : 'hidden'}`} 
              onClick={()=>{
                setDayCourse("12 DE ABRIL")
                setSalon('salon1')
                }}>
                <b>12 DE ABRIL</b>
              </h3>
              
        </section>}

        <div className='w-full flex flex-col items-center'>
        {sectionState === 'curso' && <CursoDoctores /> } 

        {sectionState === 'pre' && <PreCongreso /> } 

        <div className='w-full flex flex-col items-center'>
        {dayCourse === '10 DE ABRIL' && sectionState === 'cursoDias' && <Abril10Programa setSalon={setSalon} salon={salon} />}

        {dayCourse === '11 DE ABRIL' && sectionState === 'cursoDias' && <Abril11Programa setSalon={setSalon} salon={salon} />}
        
        {dayCourse === '12 DE ABRIL' && sectionState === 'cursoDias' && <Abril12Programa setSalon={setSalon} salon={salon} />}
        </div>

        
        </div>
    </>
  )
}

export default App
