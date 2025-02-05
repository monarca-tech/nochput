function Button({ click, text = "click" }) {
  return (
    <div>
      <button onClick={click} className="button-primary px-3 py-1 rounded hover:cursor-pointer drop-shadow-lg transition duration-300">
        {text}
      </button>
    </div>
  );
}

export default Button;
