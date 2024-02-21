import React from 'react'

function RowTable({hour,doctor,theme}) {
  return (
    <div className='w-full flex flex-col items-center pb-2 gap-2 md:grid md:grid-cols-3 md:justify-items-start border-b-2 border-blue-secondary'>
        <p>{hour}</p>
        <p><b>{doctor}</b></p>
        {theme && <p className='text-blue-secondary'>{theme}</p>}
    </div>
  )
}

export {RowTable}