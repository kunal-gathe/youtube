import React from 'react'

function Buttons() {
    let buttonValues = ['All','Computer Programming', 'Music','Civil services exam', 'Ancient History', 'Podcast', 'Mantras', 'Podcast', 'mantras', 'Honda', 'Crickets']
  return (
    <div className='hidden xl:block'>
     {
        buttonValues.map((e, index) =>{
            return (
                <button key={index} className='p-3 mx-3 bg-slate-800 rounded-xl'>{e}</button>
            )
        })
     }
    </div>
  )
}

export default Buttons
