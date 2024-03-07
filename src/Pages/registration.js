import React from "react";

export default function Registration() {
  return (
    <div className="container">
      <form action="register" method="post">
        <label>User Name:</label>
        <br />
        <input type="text" name="username" />
        <br />

        <label>Email:</label>
        <br />
        <input type="email" name="email" />
        <br />

        <label>Password:</label>
        <br />
        <input type="password" name="password" />
        <br />
        <br />

        <label>Gender:</label>
        <br />
        <label>Male</label>
        <input type="radio" name="gender" value="male" />

        <label>Female</label>
        <input type="radio" name="gender" value="female" />

        <label>Other</label>
        <input type="radio" name="gender" value="other" />
        <br />
        <br />

        <label>User Role:</label>
        <br />
        <label>Admin</label>
        <input type="radio" name="role" value="admin" />

        <label>Customer</label>
        <input type="radio" name="role" value="customer" />
        <br />
        <br />

        <label>Address:</label>
        <br />
        <textarea name="address"></textarea>
        <br />
        <br />

        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}
