export default function Result({type, ans}) {
    return (
        <>
        <div className={`absolute bg-green-300 h-2/4 w-1/6 -top-20 left-27 ${type == 'player' ? '-skew-y-[45deg]' : 'skew-y-[45deg]'}`}></div>
        <div className='absolute h-[80%] w-7/12 -top-36 left-14 bg-white border-solid border-4 border-green-300'>
            <div className='w-full h-full bg-white text-black flex justify-center items-center z-10'>
            <img className='w-5/12 z-10' src={`./GameLayout/${ans}.png`} alt="result" />
            </div>
            
        </div>
        {/* // after:absolute after:bg-green-300 after:h-2/4 after:w-1/4 after:-bottom-6 after:-skew-y-[50deg] after:-z-10 */}
        </>
    )
}