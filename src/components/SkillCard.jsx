import React from 'react'

const SkillCard = ({icon,title,text}) => {
  return (
   <article>
    <span>{icon}</span>
    <h4 className="mt-6 font-bold">{title}</h4>
    <p className='mt-2 text-gray-900'>{text}</p>
   </article>
  )
}

export default SkillCard
