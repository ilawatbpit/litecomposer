import { useWorkingModel } from "../context/WorkingModelContext";
import logo from "../assets/logo icon.png";
import { Box, ListTodo, Lightbulb } from "lucide-react";
export default function SideBar({ handleTabClick, btnClicked }) {

    const { workingModel, setWorkingModel } = useWorkingModel();

  return (
    <div className="hidden md:flex bg-white w-[70px] h-[100vh] py-[30px] flex-col items-center">
 
      <img className="margin-auto w-[25px]" src={logo} alt="icon" />
      <div className="flex flex-col h-[50vh] justify-center gap-10">

        <div className="bg-red" onClick={() => handleTabClick("type")}>
          <Lightbulb
            className={`min-w-7 min-h-9 py-1 ${btnClicked === "type" ? "text-[#3bb44b] border-b border-black" : undefined
              } transition-all duration-500 ease-in-out`}
            strokeWidth={1}
          />
        </div>

        <div className="bg-red" onClick={workingModel ? () => handleTabClick("detail") : undefined}>
        <ListTodo
          className={`min-w-7 min-h-9 pb-1 ${btnClicked === "detail" ? "text-[#3bb44b] border-b border-black" : undefined
            } transition-all duration-500 ease-in-out`}
          strokeWidth={1}
        />
        </div>

        <div className="bg-red" onClick={ workingModel ? () => handleTabClick("composition") : undefined}>
        <Box
          className={`min-w-7 min-h-9 pb-1 ${btnClicked === "composition" ? "text-[#3bb44b] border-b border-black" : undefined
            } transition-all duration-500 ease-in-out`}
          strokeWidth={1}
        />
        </div>
      </div>
    </div>
  );
}

