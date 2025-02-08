// eslint-disable-next-line react/prop-types
function Inputs({setValues,inputvalue}) {

  return (
    <div className="">
      
        <input type="text" value={inputvalue} onChange={(e) =>{setValues(e.target.value)}} className="bg-[#E9ECEF] w-[300px] rounded mr-4 outline-none py-2 px-3 drop-shadow-xl" />
      
    </div>
  );
}

export default Inputs;
