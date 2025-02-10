import { useContextTask } from "../context/Contex.task";
import { VscTrash, VscEdit, VscPassFilled } from "react-icons/vsc";
function InCard() {
  const valuesdata = useContextTask();
  // filter task each with complete false
  const states = valuesdata.state.data;
  const InCardTask = states.filter((item) => item.complete === false)
  // 
  
  const DeleteTask = valuesdata.DeleteTask
  const showUpdate = valuesdata.showUpdate
  const complatetask = valuesdata.complatetask
  //
  return (
    <div className="p-2 grid [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))]  gap-2 [grid-auto-rows:auto] ">
      {InCardTask.map((item, index) => (
        <div
          key={index}
          className="Card  drop-shadow-lg flex flex-col justify-between "
        >
          <div>
            <h1 className="text-black/70 font-semibold text-primary">{item.task}</h1>
            <strong className=" text-secundario " >{item.complete ? 'completa' : 'incompleta'}</strong>
          </div>
          <div className="flex justify-between items-center px-2  ">
            <button onClick={() => { complatetask(item.id_task) }} className={item.complete ? 'text-green-500 cursor-pointer' : 'text-red-500 cursor-pointer'}><VscPassFilled className="icons-size" /></button>
            <div>
              <button className="mx-4 cursor-pointer hover:text-blue-400 transition duration-300" onClick={() => { showUpdate(item.id_task) }}><VscEdit className="icons-size" /></button>
              <button onClick={() => { DeleteTask(item.id_task) }} className="cursor-pointer hover:text-red-500 transition duration-300"><VscTrash className="icons-size" /></button>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}

export default InCard;
