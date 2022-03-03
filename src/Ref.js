import React, { useRef, useEffect, forwardRef } from "react";

const Input = (props, ref) => <input ref={ref} {...props} />;

const ForwardedInput = forwardRef(Input);

function Ref() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const submitButtonRef = useRef(null);

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  const submit = function () {
    console.log(`${firstNameRef.current.value} ${lastNameRef.current.value}`);
  };

  const keyDown = function (e) {
    if (e.key === "Enter") {
      if (document.activeElement.name === "firstName") {
        lastNameRef.current.focus();
      } else if (document.activeElement.name === "lastName") {
        submitButtonRef.current.focus();
      }
    }
  };

  return (
    <div>
      <ForwardedInput
        name="firstName"
        onKeyDown={keyDown}
        ref={firstNameRef}
        placeholder="firstName"
      />
      <ForwardedInput
        name="lastName"
        onKeyDown={keyDown}
        ref={lastNameRef}
        placeholder="lastName"
      />
      <button onKeyDown={keyDown} ref={submitButtonRef} onClick={submit}>
        Submit
      </button>
    </div>
  );
}

export default Ref;
