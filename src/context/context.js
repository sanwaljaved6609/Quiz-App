import React, { useState } from 'react'
import MainMenu from '../components/mainMenu';
import Quiz from '../components/quiz'
import EndScreen from '../components/endScreen';
import { createContext } from 'react'



//cresting the context

export const QuizContext = createContext();

function Context() {

    const [gameState, setGameState] = useState("menu");
    const [score, setScore] = useState(0);



  return (
    <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
        {gameState === "menu" ? <MainMenu /> : null}
        {gameState === "quiz" ? <Quiz /> : null}
        {gameState === "endScreen" ? <EndScreen /> : null}
    </QuizContext.Provider>
  )
}

export default Context

