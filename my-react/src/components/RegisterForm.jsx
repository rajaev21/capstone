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
    if (token === "false") {
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
        navigate("/home");
      }
    } catch (error) {
      alert(`Registration failed: ${error.message}`);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h3 className="text-center mb-4 fw-bold">Create Account</h3>
              <form onSubmit={validateRegister}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="form-control"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter password"
                    required
                  />
                </div>

                <div className="row">
                  <div className="mb-3 col">
                    <label htmlFor="firstname" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      className="form-control"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      placeholder="First name"
                      required
                    />
                  </div>

                  <div className="mb-3 col">
                    <label htmlFor="lastname" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      className="form-control"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="phonenumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phonenumber"
                    className="form-control"
                    value={phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                    placeholder="09xxxxxxxxx"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Register
                </button>
              </form>

              <div className="text-center mt-3">
                <small>
                  Back to options! {" "}
                  <Link to="/settings" className="text-decoration-none">
                    Click here
                  </Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
