import { VscChromeClose } from "react-icons/vsc";

import Inputs from "./Inputs";
import Button from "./Button";
import { useContextTask } from "../context/Contex.task";
function Modal() {
  const valuesdata = useContextTask()
  const showUpdate = valuesdata.showUpdate
  const setinputudate = valuesdata.setinputudate
  const updateTask = valuesdata.updateTask
  return (
    <div className=" flex  w-full max-w-full max-h-dvh bg-black/10 backdrop-blur-md  absolute left-0 right-0  top-0 bottom-0">
      <div className="mx-auto mt-20 Card drop-shadow-2xl  max-h-[300px] text-center p-5 rounded-2xl relative">
        <button className="absolute right-4 top-2 hover:text-red-500 cursor-pointer transition duration-300 " onClick={showUpdate}><VscChromeClose/></button>
        <div className="mt-10">
          <Inputs setValues={setinputudate} />
          <div className="mt-10">
            <Button text="update" click={updateTask} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
