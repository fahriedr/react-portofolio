import React from 'react'

type Props = {
  background_image: string
  title: string
  description: string
}

const ProjectCard = ({background_image, title, description}: Props) => {
  return (
    <div className='flex flex-col bg-white rounded-lg cursor-pointer'>
      <img className='rounded-t-lg' src={background_image} alt="" />
      <div className='flex flex-col m-2'>
        <span className='text-black font-semibold'>{title}</span>
        <span className='text-black'>{description}</span>
      </div>
    </div>
  )
}

export default ProjectCard