
import { Questions } from "../helpers/Questions";
import { useState } from "react";

import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const { score, setScore, gameState, setGameState } = useContext(
    GameStateContext
  );

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  return (
    <div className="w-80 h-90 rounded-lg bg-purple-800 flex flex-col justify-center items-center text-white shadow-lg">
      <h1 className="text-2xl">{Questions[currentQuestion].prompt}</h1>
      <div >
        <button
          onClick={() => {
            chooseOption("optionA");
          }}
          className="w-60 py-2 px-4 m-2 border-none rounded-md    bg-gray-700 hover:bg-gray-800  focus:ring focus:border-blue-300 ">
          {Questions[currentQuestion].optionA}
        </button>
        <button
          onClick={() => {
            chooseOption("optionB");
          }}
          className="w-60 py-2 px-4 m-2 border-none rounded-md    bg-gray-700 hover:bg-gray-800  focus:ring focus:border-blue-300 ">
          {Questions[currentQuestion].optionB}
        </button>
        <button
          onClick={() => {
            chooseOption("optionC");
          }}
          className="w-60 py-2 px-4 m-2 border-none rounded-md    bg-gray-700 hover:bg-gray-800  focus:ring focus:border-blue-300 ">
          {Questions[currentQuestion].optionC}
        </button>
        <button
          onClick={() => {
            chooseOption("optionD");
          }}
          className="w-60 py-2 px-4 m-2 border-none rounded-md    bg-gray-700 hover:bg-gray-800  focus:ring focus:border-blue-300 ">
          {Questions[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz} className=" m-1 w-40 h-12 bg-red-500 text-white rounded-md hover:bg-red-600   ">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} className="m-1 w-40 h-12 bg-red-500 text-white rounded-md hover:bg-red-600   ">
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;
