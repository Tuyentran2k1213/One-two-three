import Result from "../Result"
import { useSelector } from "react-redux"

export default function Bot() {

    const ans = useSelector(state => state.reducer.bot);

    return (
        <>
        <div className='h-[75%] flex flex-col justify-center items-center'>
            <div className='w-[15.5rem] relative flex justify-center'>
            <img className='w-2/3 mb-4' src="./GameLayout/playerComputer.png" alt="kekekekekeke" />
            <Result
            ans={ans}
            />
            </div>
            {/* <div className='grid grid-cols-3 gap-10'>
                <button className='w-11'><img className='w-full bg-white' src="./GameLayout/keo.png" alt="btn" /></button>
                <button className='w-11'><img className='w-full bg-white' src="./GameLayout/bua.png" alt="btn" /></button>
                <button className='w-11'><img className='w-full bg-white' src="./GameLayout/bao.png" alt="btn" /></button>
            </div> */}
            </div>
        {/* <div className='h-[80%] flex flex-col justify-center items-center'>
            <div className='w-[50%] relative flex justify-center'>
            <img className='w-2/3' src="./GameLayout/playerComputer.png" alt="kekekekekeke" />
            <Result/>
            </div>
            </div> */}
        </>
    )
}