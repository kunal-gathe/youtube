import React from 'react'
import ButtonComponent from './ButtonComponent'
import VideoContainer from './VideoContainer'

function MainContainer() {
  return (
    <div className='col-span-11'>
      <ButtonComponent />
      <VideoContainer />
    </div>
  )
}

export default MainContainer
