import React from 'react'

type Param = {
  skill: string
  icon: string
}

const SkillCard = ({skill, icon} : Param) => {
  return (
    <div className="flex justify-center gap-4 p-4 text-center bg-gray-800 rounded-md" >
      <img src={icon} alt={skill}/>
      <span className='text-white font-extrabold'>{skill}</span>
    </div>
  )
}

export default SkillCard