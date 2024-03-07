import React from "react";

export default function Login() {
  return (
    <div>
      <form action="validate" method="post">
        <label>Email:</label>
        <br />
        <input type="email" name="email" />
        <br />

        <label>Password:</label>
        <br />
        <input type="password" name="password" />
        <br />

        <input type="submit" value="LOGIN" />
      </form>
    </div>
  );
}
