import { useState } from "react";

const useInput = (validateRule) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateRule(value);
  const hasError = !isValid && isTouched;

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue('');
    setIsTouched(false);
  }

  return {
    value,
    hasError,
    isValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
