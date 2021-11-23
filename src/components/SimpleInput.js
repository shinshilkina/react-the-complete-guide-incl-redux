import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const nameIsValid = !!name.trim().length;

  let regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailIsValid = !!email.match(regex)?.length;

  const nameInputIsInvalid = !nameIsValid && nameIsTouched;
  const emailInputIsInvalid = !emailIsValid && emailIsTouched;

  const formIsValid = nameIsValid && emailIsValid;

  const nameInputHandler = (event) => {
    setName(event.target.value);
  };

  const emailInputHandler = (event) => {
    setEmail(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setNameIsTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEmailIsTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid || !emailIsValid) return;

    console.log('name ', name, ', email ', email);
    setNameIsTouched(false);
    setName("");
    setEmailIsTouched(false);
    setEmail("");
  };

  const nameBlockClassName = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
    
  const emailBlockClassName = emailInputIsInvalid
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
      <div className={emailBlockClassName}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailInputHandler}
          onBlur={emailInputBlurHandler}
          value={email}
        />
        {emailInputIsInvalid && (
          <p className="error-text">
            Please, enter a valid email!
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
