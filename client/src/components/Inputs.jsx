function Inputs({setValues}) {

  return (
    <div className="">
      
        <input type="text" onChange={(e) =>{setValues(e.target.value)}} className="bg-red-100 rounded mr-4 outline-none px-3 drop-shadow-md" />
      
    </div>
  );
}

export default Inputs;
