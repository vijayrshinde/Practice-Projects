import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PersonCircle,
  PersonFill,
  Key,
  EnvelopeAt,
  KeyFill,
  Calendar2Date,
} from "react-bootstrap-icons";
import axios from "axios";

const iconStyle = (sz) => ({
  color: "#D6E4E5",
  size: sz,
});

const dt = {
  name: "",
  email: "",
  password: "",
  cnfpassword: "",
  dob: "",
};

const SignUp = () => {
  const [pwdType, setPwdType] = useState("password");
  const navigate = useNavigate();
  const [user, setUser] = useState(dt);
  const { name, email, password, dob, cnfpassword } = user;

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();

    if (password !== cnfpassword) {
      alert("Password not match!!");
      setUser(dt);
      return;
    }

    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("dob", dob);

    const config = { headers: { "Content-Type": "application/json" } };
    try {
      const {data} = await axios
      .post("/api/v1/register", myForm, config);
      localStorage.setItem("User", JSON.stringify(data.user));
        navigate("/table");
    }
    catch (error) {
      if(error.response) alert(error.response.data.error);
    }
  };

  return (
    <form>
      <div className="top">
        <div className="heading">
          <h3>SIGN UP</h3>
        </div>
        <div className="icon-box">
          <PersonCircle {...iconStyle(80)} />
        </div>
      </div>
      <div className="bottom">
        <div className="input-box mb-3 d-flex align-items-center">
          <div className="input-icon-box">
            <PersonFill {...iconStyle(20)} />
          </div>
          <input
            className="form-control-box"
            placeholder="Enter name"
            type="text"
            required
            name="name"
            value={name}
            onChange={registerDataChange}
          />
        </div>
        <div className="input-box mb-3 d-flex align-items-center">
          <div className="input-icon-box">
            <EnvelopeAt {...iconStyle(20)} />
          </div>
          <input
            className="form-control-box"
            type="email"
            placeholder="Enter email"
            required
            name="email"
            value={email}
            onChange={registerDataChange}
          />
        </div>
        <div className="input-box mb-3 d-flex align-items-center">
          <div className="input-icon-box">
            <Calendar2Date {...iconStyle(20)} />
          </div>
          <input
            type="date"
            className="form-control-box"
            name="dob"
            value={dob}
            onChange={registerDataChange}
          />
        </div>

        <div className="input-box mb-3 d-flex align-items-center">
          <div className="input-icon-box">
            <Key {...iconStyle(20)} />
          </div>
          <input
            type={pwdType}
            className="form-control-box"
            placeholder="Enter password"
            required
            name="password"
            value={password}
            onChange={registerDataChange}
          />
        </div>
        <div className="input-box mb-3 d-flex align-items-center">
          <div className="input-icon-box">
            <KeyFill {...iconStyle(20)} />
          </div>
          <input
            type={pwdType}
            className="form-control-box"
            placeholder="Confirm password"
            required
            name="cnfpassword"
            value={cnfpassword}
            onChange={registerDataChange}
          />
        </div>

        <input
          type="checkbox"
          name="pwdtype"
          onClick={() =>
            pwdType === "password" ? setPwdType("text") : setPwdType("password")
          }
        />
        <label htmlFor="pwdtype" className="main">
          Show password
        </label>

        <p>
          Already registered <a href="/sign-in">sign in?</a>
        </p>

        <div className="mt-3 d-flex justify-content-center">
          <button
            type="submit"
            className="submit-btn btn"
            onClick={registerSubmit}
          >
            Register
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
