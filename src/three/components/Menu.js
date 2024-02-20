import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Menu() {
  const { gameState, setGameState, userName, setUserName } = useContext(
    GameStateContext
  );
  return (
    <div className="w-80 h-80 rounded-lg bg-purple-800 flex flex-col justify-center items-center text-white shadow-lg">
      <label class=" text-2xl text-black">Enter Your Name:</label>
      <input
        type="text"
        placeholder="Ex.gajala from washington dc"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
        class="w-64 m-5 border-none text-center rounded-lg text-lg text-black"/>
      <button
        onClick={() => {
          setGameState("playing");
        }}
        className="w-40 h-12 bg-red-500 text-white rounded-md hover:bg-red-600   ">
        Start Quiz
      </button>
    </div>
  );
}

export default Menu;
