import Player from "./Player";
import Bot from "./Bot";
import { startPlay } from './Redux/action'
import { useDispatch, useSelector } from "react-redux";

//render the display UI
export default function Gaming() {

  const rule = ['keo', 'bua', 'bao'];
  const playNum = useSelector(state => state.reducer.playNum);
  const winNum = useSelector(state => state.reducer.winNum());

  const dispatch = useDispatch();

  const handlePlay = () => {
    const randNum = Math.floor(Math.random() * 3);
    dispatch(startPlay(rule[randNum]));
  }

  return (
    <div
      className=" bg-white h-screen w-screen bg-no-repeat bg-cover bg-top grid grid-cols-3"
      style={{
        backgroundImage: `url('./GameLayout/bgGame.png')`,
      }}
    >
         
        <Player
        rule={rule}
        />
       
      <div>
        <div className="text-yellow-500 font-black lg:text-5xl md:text-3xl text-xl text-center h-2/4 flex flex-col items-center justify-around">
          <h1>I'm iron man, I love you 3000 !!</h1>
          <h1 className="text-green-500">
            Số bàn thắng: <span className="text-yellow-400">{winNum}</span>
          </h1>
          <h1 className="text-green-500">
            Số bàn chơi: <span className="text-yellow-400">{playNum}</span>
          </h1>
          <div>
          <button 
          className="bg-green-600 hover:bg-green-700 text-white font-bold md:text-lg text-base py-2 px-4 rounded"
          onClick={handlePlay}
          >
  Play game
</button>
          </div>
        </div>
      </div>
      
        <Bot/>

    </div>
  );
}
