import React from 'react'

export const Titles = ({title = 'Mejores peliculas' , subtitle}) => {
  return (
    <h1 class="animate__animated animate__fadeInLeft text-3xl lg:text-4xl leading-none flex flex-col">
        <strong class="font-black mb-2">{title}</strong> 
        {
            subtitle&&<span className='text-3xl' >{subtitle}</span>
        }
    </h1>
  )
}
