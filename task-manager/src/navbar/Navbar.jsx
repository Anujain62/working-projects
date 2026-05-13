import React, { useState } from 'react'
import App from '../App'
import Options from './Options';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    !open ? (
      <div id='navbar'>
        <p onClick={() => { setOpen(true) }}>&#8942;</p>,
        <h2>DashBoard</h2>
      </div>
    ) : (
      <Options open={open} setOpen={setOpen} />
    )
    // <div>
    //   <Options open={open} setOpen={setOpen} />
    // </div>
  )
}
    

export default Navbar 