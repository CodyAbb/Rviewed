import React, { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "username") {
      setUsername(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "firstName") {
      setFirstName(event.target.value);
    } else if (event.target.name === "lastName") {
      setLastName(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    alert(username + password);
    event.preventDefault();
  };

  return (
    <div>
      <h2>Welcome to the team</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Your email address is what you will sign in with:
          <input
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          First Name:
          <input
            name="firstName"
            type="text"
            value={firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            type="text"
            value={lastName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          What would you like to be referred to as? Feel free to just use your
          name or create an alter-ego:
          <input
            name="username"
            type="text"
            value={username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
            required
          />
        </label>
        <input type="submit" value="Sign me up" />
      </form>
    </div>
  );
}
