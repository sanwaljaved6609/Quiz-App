import React from 'react'
import '../App.css'
import { useContext } from 'react'
import { QuizContext } from '../context/context'
import QUESTIONS from './questions';

function EndScreen() {

  const {score, setScore, setGameState} = useContext(QuizContext);

  function restart() {
    setScore(0);
    setGameState("menu");
  }

  return (
    <div className='endScreen'>
      <h1>Quiz is Finished</h1>
      
      <h2>{score} / {QUESTIONS.length}</h2>
      <button onClick={restart}>Restart Quiz</button>
    </div>
  )
}

export default EndScreen
