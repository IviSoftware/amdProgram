import React from 'react'

function Receso({hour,title}) {
  return (
    <div 
        className='bg-custom-blue md:rounded-full
        w-full md:w-3/5 flex flex-col items-center gap-4 mb-2 mt-2 md:grid md:grid-cols-3 md:justify-items-start md:p-5'>
            <p className='text-white'>{hour}</p>
            <h2 className='text-white text-center'>{title ? title : 'RECESO'}</h2>
    </div>
  )
}

export {Receso}