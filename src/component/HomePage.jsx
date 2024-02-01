import React from 'react'
import './style.css'
import {motion} from 'framer-motion'
function HomePage({toggle}) {
  return (
    <motion.div
    className="container"
  initial={{ scale: 0 }}
  animate={{ rotate: 360, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 100,
    damping: 20
  }}
>
        <img src={'/dices.png'}/>
        <div className='game'>
          <h1>DICE GAME</h1>
          <button onClick={()=>toggle(prev=>!prev)}>Play game</button>
        </div>
    </motion.div>
     )
}

export default HomePage