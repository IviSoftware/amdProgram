import React from 'react'

function RowTable({hour,doctor,theme}) {
  return (
    <div className='w-full flex flex-col items-center gap-2 md:grid md:grid-cols-3 md:justify-items-start'>
        <p>{hour}</p>
        <p className='md:justify-self-center text-center'><b>{doctor}</b></p>
        {theme && <p className='md:justify-self-end text-blue-secondary'>{theme}</p>}
    </div>
  )
}

export {RowTable}