import React from 'react'
import Navbar from './Navbar'

const Options = ({ open, setOpen }) => {
  return (
      <div className='options'>
      <div className='left'>
        <h3 onClick={() => { setOpen(false) }}>&#8592; Back</h3>
        <div>
          <p>&#128202; Dashboard</p>
          <p>&#9989; Tasks</p>
          <p>&#128196; Reports</p>
          <p>&#128100; Clients</p>
          <p>&#128101; Teams</p>
          <p>&#9881; Settings</p>
        </div>
        <p style={{marginBottom:"25px"}}>&#128682; Logout</p>
      </div>
      <div className='right'>
        <p>Dashboard</p> 
      </div>
    </div>
  )
}

export default Options