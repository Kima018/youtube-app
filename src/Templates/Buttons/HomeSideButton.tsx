export const HomeSideButton = ({children,handleClick,icon})=>{
    return(<button className=' w-full flex flex-col items-center pt-4 pb-3 hover:bg-neutral-500' onClick={handleClick}>
        <div className='text-3xl '>{icon}</div>
        {children}
    </button>)
}