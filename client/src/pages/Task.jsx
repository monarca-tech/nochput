// import Card from "../components/Card";
import Inputs from "../components/Inputs";
import { useContextTask } from "../context/Contex.task";
import Button from "../components/Button";
import Modal from '../components/Modal'
import Direccion from "../components/Direccion";
import {  Outlet} from "react-router-dom";
function Task() {
  const setis = useContextTask();
  const setinput = setis.setinputAdd;
  const Addtask = setis.Addtask;
  const show = setis.show
  const inputAdd = setis.inputAdd

  return (
      <div className=" sm:mt-10 mt-10 mx-5 sm:m-auto w-full max-w-[1000px] min-h-[400px]  ">
        <div className=" flex mt-10 mb-3 ">
          <div className="mx-auto  sm:flex text-center ">
            <Inputs inputvalue={inputAdd} setValues={setinput} />
            <Button text="add" click={Addtask} />
          </div>
        </div>
        <Direccion/>
        <Outlet/>
        {
          show? <Modal/>:''
        }

      </div>
  );
}

export default Task;
