import { useState } from 'react';
import logo from "../assets/logo icon.png";
export default function Header({handleTabClick}){
    const [isClickBurger, setIsClickBurger] = useState(false)

    function handleClickBurger (event){
        setIsClickBurger((prev)=>!prev)
        handleTabClick(event);
    }

    return(
        <>
            <div className=" flex flex-row items-center justify-between h-10 md:hidden w-full p-4">
            <img src={logo} alt="" className="m-0" />        
            <span onClick={()=> setIsClickBurger((prev)=>!prev)}>&#9776;</span>
            </div>


            
            <div className={isClickBurger ? "fixed top-0 bg-[#1c1c1c] w-full h-screen z-50 flex flex-col justify-center items-center text-white gap-[40px] text-3xl" : "hidden"}>
             <span className='text-white absolute right-5 top-5' onClick={()=> setIsClickBurger((prev)=>!prev)}>&times;</span>
                <span onClick={handleClickBurger} data-name="type">Type</span>
                <span onClick={handleClickBurger} data-name="detail">Finish & Material</span>
                <span onClick={handleClickBurger} data-name="composition">Constructor</span>

            </div>
        </>
    )
}