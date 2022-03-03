import React, { useState, useEffect, useMemo } from "react";
import User from "./User";
export default function Hooks() {
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log("You are born");
    return () => {
      console.log("Expired");
    };
  }, []);

  useEffect(() => {
    if (age > 0) {
      console.log("Learn from your mistakes");
    }
  }, [age]);

  function increaseAge() {
    setAge((age) => age + 1);
  }

  const memoizedUser = useMemo(() => {
    return <User />;
  }, []);

  return (
    <>
      <div>Age: {age}</div>
      <button onClick={increaseAge}>Increase Age</button>
      {memoizedUser}
    </>
  );
}
