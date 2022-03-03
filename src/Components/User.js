import React, { useState, useEffect } from "react";
import { useParams, useLocation, useHistory } from "react-router";
export default function User() {
  //const { lastName } = useParams();
  //const history = useHistory();
  //const location = useLocation();

  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Render User");
  });

  // useEffect(() => {
  //   console.log(location);
  // }, [location]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((user) => {
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  //const goBack = () => history.goBack();
  return (
    <div>
      <h1>User</h1>
      {/* <p>
        Full Name: {match && match?.params?.firstName} {lastName}
      </p> */}
      {/* <button onClick={goBack}>Go Back</button> */}
      <div>
        {error && <span> {error} </span>}
        {user ? (
          <>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </>
        ) : (
          <span>Loading</span>
        )}
      </div>
    </div>
  );
}
