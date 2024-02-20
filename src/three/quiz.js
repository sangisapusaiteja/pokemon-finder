import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { useState } from "react";
import { GameStateContext } from "./helpers/Contexts";

function Game() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="text-center font-arial flex justify-center items-center flex-col bg-black text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Quiz App</h1>
      
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  );
}

export default Game;



