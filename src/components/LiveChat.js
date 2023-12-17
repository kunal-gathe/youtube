import React from 'react'
import User from '../assets/user.png'
function LiveChat({name, text}) {
  return (
    <div className='flex my-4'>
    <img className="h-5 rounded-full bg-white xl:h-8" alt="user" src={User} />
    <p className="font-bold  px-2 text-xs xl:text-lg">{name}</p>
    <p className="text-xs xl:text-lg">{text}</p>
    </div>
  )
}

export default LiveChat
