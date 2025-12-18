import { color } from "three/tsl";
import { useWorkingModel } from "../context/WorkingModelContext";
export default function LightDetail() {

    const { workingModel, setWorkingModel, setBtnClicked } = useWorkingModel();

    return (<>
        <style>
            {`button{
            border: 1px solid black;
            padding: 10px 20px;
            border-radius: 12px;
            }
        button:hover{
            background-color: black;
            color: white;
            }
        button:focus{
            background-color: black;
            color: white;
            }
            
        `
            }
        </style>
        <div className="w-full h-[100vh] flex flex-col justify-center items-center p-10">
            <div className=" w-full h-full flex flex-col">
                <div>
                    <h1 className="text-3xl font-bold">Material / Finish</h1>
                </div>
                <div className="flex-1 px-40 text-xl flex flex-col items-start justify-evenly">
                    <div className="">
                        <p>Color: </p>
                        <div className="p-10 flex gap-4">
                            <button>Clear</button>
                            <button>Amber</button>
                        </div>
                    </div>
                    <div>
                        <p>Fittings:

                        </p>
                        <div className="p-10 flex gap-4">
                            <button>metal</button>
                            <button>none</button>
                        </div>
                    </div>
                    <div>
                        <p>Size: </p>
                        <div className="p-10 flex gap-4">
                            <button>small</button>
                            <button>large</button>
                        </div>
                    </div>
                </div>
                <div className="ml-auto px-40">
                    <button className="bg-black text-white px-8 py-4 rounded-xl" onClick={() => setBtnClicked("composition")}>Done</button>
                </div>
            </div>
        </div>

    </>)
}
