import React from 'react'
import { useState } from 'react'
import QUESTIONS from './questions'
import { QuizContext } from '../context/context';
import { useContext } from 'react';
import '../App.css'


function Quiz() {

  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChoosen, setOptionChoosen] = useState("")

  const {score, setScore, setGameState} = useContext(QuizContext);


  function nextQuestion() {
    if(QUESTIONS[currQuestion].answer === optionChoosen){
      setScore(score + 1);
    }

    setCurrQuestion(currQuestion + 1);
  }

  function finishQuiz() {
    if(QUESTIONS[currQuestion].answer === optionChoosen){
      setScore(score + 1);
    }

    setGameState("endScreen");

  }



  return (
    <div className='quiz'>
      <h3>{QUESTIONS[currQuestion].prompt}</h3>
      
      <div className="options">
      <button onClick={()=> setOptionChoosen("A")}> {QUESTIONS[currQuestion].optionA} </button>
      <button onClick={()=> setOptionChoosen("B")}>{QUESTIONS[currQuestion].optionB}</button>
      <button onClick={()=> setOptionChoosen("C")}>{QUESTIONS[currQuestion].optionC}</button>
      <button onClick={()=> setOptionChoosen("D")}>{QUESTIONS[currQuestion].optionD}</button>
      </div>

      { currQuestion === QUESTIONS.length - 1 ? <button className='btn' onClick={finishQuiz}>Finish Quiz</button> :  <button className='btn' onClick={nextQuestion}>Next Question</button> }

    </div>
  )
}

export default Quiz
