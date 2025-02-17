import React from 'react'

type Param = {
  skill: string
}

const Card = ({skill} : Param) => {
  return (

    <div className="p-4 text-center bg-gray-800 rounded-md" >
      <span className='text-white'>{skill}</span>
    </div>
  )
}

export default Card