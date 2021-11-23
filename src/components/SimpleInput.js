import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const nameIsValid = !!name.trim().length;
  const nameInputIsInvalid = !nameIsValid && nameIsTouched;
  const formIsValid = nameIsValid;

  
  const nameInputHandler = (event) => {
    setName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setNameIsTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid) return;

    console.log(name);
    setNameIsTouched(false);
    setName("");
  };

  const nameBlockClassName = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameBlockClassName}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputHandler}
          onBlur={nameInputBlurHandler}
          value={name}
        />
        {nameInputIsInvalid && (
          <p className="error-text">
            Please, enter a valid name! It's empty. :(
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
