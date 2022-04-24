import React from 'react'

export const Titles = ({title = 'Mejores peliculas' , subtitle}) => {
  return (
    <h1 className="animate__animated animate__fadeInLeft px-4 xs:px-0 text-3xl lg:text-4xl leading-none flex flex-col">
        <strong className="font-black mb-2">{title}</strong> 
        {
            subtitle&&<span className='text-3xl' >{subtitle}</span>
        }
    </h1>
  )
}
