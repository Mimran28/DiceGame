import React, { useState } from 'react'
import './style2.css'
import List from './List'
import {motion} from 'framer-motion'
function Game() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  }
    
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
  const arr= [1,2,3,4,5,6]
  const [selectNum, setselectNum] = useState();
  const[imgNum,setImgNum]= useState(1)
  const[score,setScore] = useState(0);
  const [error, setError] = useState('')
  const rollDice =()=>{
    if(selectNum){
      const ran = Math.floor(Math.random()*6)+1
      setImgNum(ran);
      if(selectNum === ran){
        setScore(pre=>pre+1)
        setError('')
      }
    }else{
     setError('You have not selected number')
    }

  }
  return (
    <motion.div     variants={container}
    initial="hidden"
    animate="visible" className="game-container">
    <motion.div className='header'>
        <motion.div className='total' variants={item}>
           <h1>{score}</h1>
           <p>Total score</p>
        </motion.div>

        <motion.div className='list-container' variants={item}>
        <div>  {error? <span style={{color:'red'}}>*{error}</span>:'' }</div>
        <motion.div className='list' >
          {
            arr.map(val=>
              <List selectNum={selectNum} key={val} setError={()=>setError('')} num={val} onClick={(el)=>setselectNum(el)}/>
              )
            }
            </motion.div>
          <p>Select Number</p>
        </motion.div>
    </motion.div>
    <motion.div className="roll-dice" variants={item}>
      <img src={`/Game Page/cube${imgNum}.png`} onClick={rollDice}/>
      <p>Click on Dice to Roll</p>
    
      <button className='rs-btn' onClick={()=>setScore(0)}>Reset Score </button>
     
    </motion.div>
    </motion.div>
  
  )
}

export default Game