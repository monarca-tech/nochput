function Button({ click, text = "click" }) {
  return (
    <div>
      <button onClick={click} className="bg-sky-800 px-3 py-1 rounded hover:bg-sky-900 hover:cursor-pointer drop-shadow-lg transition duration-300">
        {text}
      </button>
    </div>
  );
}

export default Button;
