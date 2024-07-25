import React from 'react'
import '../App.css'
import { QuizContext } from '../context/context'
import { useContext } from 'react'

function MainMenu() {

    const {setGameState} = useContext(QuizContext);

    

  return (
    <div className='menu'>
      <input type="text" placeholder='Enter Your Name' />
      <button onClick={()=>setGameState("quiz")}>Start Quiz</button>
    </div>
  )
}

export default MainMenu
