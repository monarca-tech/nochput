import { Link } from "react-router-dom"
function Aside() {
  return (
    <div>
        <div className="bg-slate-400 w-22 text-center rounded min-h-[400px] ml-10 mt-10 drop-shadow-xl">
            <Link to='/'>Aside</Link >
            <div className="flex flex-col justify-between items-center h-22 mt-30">
                <Link to='/task' className="hover:underline hover:text-slate-800">task</Link>
                <Link to='/gold' className="hover:underline hover:text-slate-800">Gold</Link>
            </div>
        </div>
    </div>
  )
}

export default Aside