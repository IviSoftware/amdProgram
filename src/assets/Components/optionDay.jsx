import React from 'react'

function OptionDay({day,sectionState,setDayCourse}) {
  return (
    <h3 className={`
      mb-2 mt-0 text-center pointer 
      ${sectionState === 'cursoDias' ? 'block' : 'hidden'}  
    `} 
    onClick={()=>setDayCourse(day)}>
      <b>{day}</b>
    </h3>
  )
}

export {OptionDay}