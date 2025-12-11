import { X } from 'lucide-react';

export default function Modal({children, onClick, modalState}) {
    if(!modalState)return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
        <div className="bg-white p-6 rounded-xl shadow-xl relative">
            <div className='absolute top-[-10px] right-[-10px] rounded flex justify-center items-center text-white w-7 h-7 bg-red-500'  onClick={onClick} ><X /></div>
            {children}
            {/* <div className="bg-red-400">
            <button onClick={onClick}>Close</button>
            </div> */}
        </div>
    </div>
  );
}
