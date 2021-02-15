import "./style.scss";

function Button({ callback }) {
  function handleClick() {
    callback();
  }

  return (
    <button className="button" onClick={() => handleClick()}>
      ...continuar leyendo
    </button>
  );
}

export default Button;
