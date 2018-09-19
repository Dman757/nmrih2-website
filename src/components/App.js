import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import hero from '../Assets/NMRiH4.jpg'
import '../App.css'

class App extends Component {
  // componentWillMount () {
  //   document.body.classList.toggle('colorShit')
  // }
  // componentWillUnmount () {
  //   document.body.classList.toggle('colorShit')
  // }
  render () {
    return (
      <div className='HomeContainer'>
        <div className='Hero'>
        <img className='overlay' src={hero} style={{width: '200px'}}/>
          <div className='center-hero'>
            <p className='center-hero-item'>No More Room in Hell 2</p>
          </div>
          <img src={hero} />
        </div>
        <div className='MainContent'>
          {/* <p>No More Room in Hell</p> */}
          <ReactPlayer url='https://www.youtube.com/watch?v=VvLJQZ2vOUU' playing width={'700px'} height={'394px'}  />
        </div>
      </div>
    )
  }
}

export default App
