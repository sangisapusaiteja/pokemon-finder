import React from "react";

import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";

const EndScreen = () => {
  const { score, setScore, setGameState, userName } = useContext(
    GameStateContext
  );

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="w-80 h-80 rounded-lg bg-purple-800 flex flex-col justify-center items-center text-white shadow-lg">
      <h1 class=" text-xl text-white" >Quiz Finished</h1>
      <h3 class=" my-1 font-bold  text-3xl text-red-500">{userName}</h3>
      <h1 class=" my-1  text-3xl text-white" >
        {score} / {Questions.length}
      </h1>
      <button onClick={restartQuiz} className="w-40 h-12 bg-red-500 text-white rounded-md hover:bg-red-600   ">Restart Quiz</button>
    </div>
  );
};

export default EndScreen;

