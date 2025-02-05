function Inputs({setValues}) {

  return (
    <div className="">
      
        <input type="text" onChange={(e) =>{setValues(e.target.value)}} className="bg-white rounded mr-4 outline-none py-1 px-3 shadow-2xs" />
      
    </div>
  );
}

export default Inputs;
