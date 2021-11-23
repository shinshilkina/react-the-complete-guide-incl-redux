import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: name,
    hasError: nameInputHasError,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => !!value.trim().length);

  const {
    value: email,
    hasError: emailInputHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => {
    let regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !!value.match(regex)?.length;
  });

  const formIsValid = nameIsValid && emailIsValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid || !emailIsValid) return;

    console.log('name ', name, ', email ', email);
    nameReset();
    emailReset();
  };

  const nameBlockClassName = nameInputHasError
    ? "form-control invalid"
    : "form-control";
    
  const emailBlockClassName = emailInputHasError
  ? "form-control invalid"
  : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameBlockClassName}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={name}
        />
        {nameInputHasError && (
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
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailInputHasError && (
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
