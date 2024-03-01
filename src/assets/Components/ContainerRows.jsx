import React from 'react'

function ContainerRows({children,rows}) {
  return (
    <section className={`grid grid-cols-1 ${rows ? 'grid-rows-'+rows : 'grid-rows-3' } gap-4 md:w-3/5 mt-8`}>
        {children}
    </section>
  )
}

export {ContainerRows}