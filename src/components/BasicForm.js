import useInput from "../hooks/use-input";

const isNoEmpty = (value) => !!value.trim().length;
const isEmail = (value) => {
  let regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !!value.match(regex)?.length;
};

const BasicForm = (props) => {
  const {
    value: firstName,
    hasError: firstNameInputHasError,
    isValid: firstNameIsValid,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput((value) => isNoEmpty(value));

  const {
    value: lastName,
    hasError: lastNameInputHasError,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => isNoEmpty(value));

  const {
    value: email,
    hasError: emailInputHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => isEmail(value));

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    console.log(
      "First Name : ",
      firstName,
      ",\n",
      "Last Name : ",
      lastName,
      ",\n",
      "E-Mail Address : ",
      email,
    );
    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const firstNameBlockClassName = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameBlockClassName = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailBlockClassName = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  let nameErrorItems = [];
  if (firstNameInputHasError) {
    nameErrorItems.push("'First Name'");
  }
  if (lastNameInputHasError) {
    nameErrorItems.push("'Last Name'");
  }
  const nameErrorText = `Please, enter a valid ${nameErrorItems.join(
    " && ",
  )}! It's empty. :(`;
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameBlockClassName}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
          />
        </div>
        <div className={lastNameBlockClassName}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastName}
          />
        </div>

        {(lastNameInputHasError || firstNameInputHasError) && (
          <p className="error-text">{nameErrorText}</p>
        )}
      </div>
      <div className={emailBlockClassName}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="enail"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailInputHasError && (
          <p className="error-text">Please, enter a valid email!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
