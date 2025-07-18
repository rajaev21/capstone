import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("isLoggedIn");
    if (token === "true") {
      setIsLoggedIn(true);
      navigate("/");
    }
  }, [isLoggedIn]);

  const validateRegister = (e) => {
    e.preventDefault();

    if (phonenumber.length !== 11 || phonenumber.slice(0, 2) !== "09") {
      alert("Please enter a valid phone number");
    } else if (password !== confirmPassword) {
      alert("Password does not match");
    } else {
      handleRegister(e);
    }
  };

  const handleRegister = async (e) => {
    alert("");

    const data = {
      username: username,
      password: password,
      phonenumber: phonenumber,
      firstname: firstname,
      lastname: lastname,
      role: 3,
      action: "register",
    };

    try {
      const response = await fetch("http://localhost/capstone/submit.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      alert(result.message);
      if (result.message === "Registration Complete") {
        setFirstname("");
        setLastname("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setPhonenumber("");
      }
    } catch (error) {
      alert(`Registration failed: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Register Form</h1>
      <form onSubmit={validateRegister}>
        <div>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>

        <div>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>

        <div>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
        </div>

        <div>
          <input
            type="text"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="Firstname"
            required
          />
        </div>

        <div>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Lastname"
            required
          />
        </div>

        <div>
          <input
            type="number"
            id="phonenumber"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            placeholder="Phone Number"
            required
          />
        </div>

        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
