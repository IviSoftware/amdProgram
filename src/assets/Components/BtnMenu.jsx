import React from 'react'

function BtnMenu({children,setSectionState,type}) {
  return (
    <button className='bg-custom-blue hover:bg-gray-300 hover:text-black 
    text-white font-bold py-2 px-4 rounded transform transition duration-200 ease-out hover:scale-110'
        onClick={()=>{
          if(type==='congreso'){
            setSectionState('curso');
          }else if(type==='pre'){
            setSectionState('pre')
          }else{
            setSectionState('cursoDias')
          }
        }}
    >
        {children}
    </button>
  )
}

export {BtnMenu}