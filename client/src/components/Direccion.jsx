import { Link } from "react-router-dom"

function Direccion() {
  return (
    <div>
        <div className="flex justify-center my-4">
        <Link to="inTask" className="border-b-2 border-slate-400 mr-10 rounded-[5px] px-2 hover:border-red-300 transition duration-300 ">Incompleta</Link>
        <Link to=" " className="border-b-2 border-slate-400 mr-10 rounded-[5px] px-2 hover:border-[#71d1c4] transition duration-300 ">Completa</Link>
        </div>
        <div className="bg-slate-300  max-w-screen h-[2px]"></div>
    </div>
  )
}

export default Direccion
