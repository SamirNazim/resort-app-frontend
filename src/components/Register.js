import React from "react";
import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errorForm, setErrorForm] = useState([{}]);
  const [email, setEmail] = useState("");

  const sendUser = (e) => {
    const URL = `${process.env.REACT_APP_BACK_END_API_DOMAIN}/users`;
    e.preventDefault()
    fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((json) => {
        setErrorForm(json);
        console.log(json)
      })
      .catch((err) => console.log(err));
  };

  return (
    <section id="register-section">
      <div className="container">
        <h1>Register</h1>
        {errorForm.data?.length > 0 ? (
          errorForm.data?.map((err) => (
            <>
              <br />
              <span className="error">{err.message}</span>
            </>
          ))
        ) : (
          <span></span>
        )}
        <form action="">
          <div className="form-control">
            <label htmlFor="firstName">First Name</label>
            <br />
            <input
              type="text"
              id="firstName"
              value={user.firstName}
              onChange={(event) => {
                setUser({
                  ...user,
                  firstName: event.target.value,
                });
              }}
            />
          </div>

          <div className="form-control">
            <label htmlFor="lastName">Last Name</label>
            <br />
            <input
              type="text"
              id="lastName"
              onChange={(event) => {
                setUser({
                  ...user,
                  lastName: event.target.value,
                });
              }}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              id="email"
              onChange={(event) => {
                if (!event.target.value.includes("@")) {
                  setEmail("Your email must include an @ symbol");
                } else {
                  setEmail("");
                  setUser({
                    ...user,
                    email: event.target.value,
                  });
                }
              }}
            />

            <p className="emailError">{email}</p>
          </div>

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              onChange={(event) => {
                setUser({
                  ...user,
                  password: event.target.value,
                });
              }}
            />
          </div>

          <br />
          <input name="test" type="checkbox" className="checkbox-filter" />
          <span>Keep me signed in</span>
          <br />
          <br />
          <input name="test" type="checkbox" className="checkbox-filter" />
          <span>
            E-mail me exclusive coupons, deals and travel information from
            ResortAndChill.com
            <br />
          </span>
          <br />
          <p>
            By signing up you accept the Terms and Conditions and Privacy
            Statement
          </p>
          <div className="form-control">
            <button className="register-btn" type="submit" onClick={sendUser}>
              Create Account
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
