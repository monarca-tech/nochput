import { Link } from "react-router-dom";
function Aside() {
  return (
    <div>
      <div className="aside w-26 text-center rounded min-h-[500px] ml-10 mt-10 ">
        <div className="flex flex-col justify-between items-center h-46 mt-20">
          <Link to="/" className="hover:underline link">
            home
          </Link>
          <Link to="/task" className="hover:underline link">
            task
          </Link>
          <Link to="/gold" className="hover:underline link">
            Gold
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Aside;
