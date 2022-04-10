import Result from "../Result"
import { useSelector, useDispatch } from "react-redux"
import { choose } from "../Redux/action";

export default function Player(props) {

    const dispatch = useDispatch();
    const ans = useSelector(state => state.reducer.player);

    return (
        <div className='h-[80%] flex flex-col justify-center items-center'>
            <div className='w-[15.5rem] relative flex justify-center'>
            <img className='w-2/3' src="./GameLayout/player.png" alt="kekekekekeke" />
            <Result
            type='player'
            ans={ans}
            />
            </div>
            <div className='grid grid-cols-3 gap-10'>
                {props.rule.map((prop, index) => (
                    <button key={index} className={`w-11 border-solid border-[3px] ${prop == ans && 'border-orange-500'}`}
                    onClick={() => dispatch(choose(prop))}
                    >
                        <img className='w-full bg-white' src={`./GameLayout/${prop}.png`} alt="btn" /></button>
                    // <button className='w-11 border-solid border-[3px]'><img className='w-full bg-white' src="./GameLayout/bua.png" alt="btn" /></button>
                    // <button className='w-11 border-solid border-[3px]'><img className='w-full bg-white' src="./GameLayout/bao.png" alt="btn" /></button>
                ))}
            </div>
            </div>
    )
}