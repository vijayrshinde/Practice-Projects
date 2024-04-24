import React, { useState } from "react";
import {
  PersonCircle,
  PersonFill,
  Key,
  EyeSlashFill,
  EyeFill,
} from "react-bootstrap-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const iconStyle = (sz) => ({
  color: "#D6E4E5",
  size: sz,
});

const SingIn = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [pwdType, setPwdType] = useState("password");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const passwordTypeHandler = () => {
    if (open) {
      setPwdType("password");
      setOpen(false);
    } else {
      setPwdType("text");
      setOpen(true);
    }
  };

  const loginSubmitHandler = async (e) => {
    e.preventDefault();

    const config = { headers: { "Content-Type": "application/json" } };

    try {
      const { data } = await axios.post(
        "/api/v1/login",
        { email: loginEmail, password: loginPassword },
        config
      );

      localStorage.setItem("User", JSON.stringify(data.user));
      navigate("/table");
    } catch (error) {
      console.log(error);
      if (error.response) alert(error.response.data.error);
    }
  };

  return (
    <form>
      <div className="top">
        <div className="heading">
          <h3>SIGN IN</h3>
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
            type="email"
            className="form-control-box"
            placeholder="Enter email"
            required
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
        </div>
        <div className="input-box mb-3 d-flex align-items-center">
          <div className="input-icon-box">
            <Key {...iconStyle(20)} />
          </div>
          <div>
            <input
              type={pwdType}
              className="form-control-box"
              placeholder="Enter password"
              required
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          <div className="input-icon-box">
            {open ? (
              <EyeFill {...iconStyle(20)} onClick={passwordTypeHandler} />
            ) : (
              <EyeSlashFill {...iconStyle(20)} onClick={passwordTypeHandler} />
            )}
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="submit-btn btn"
            onClick={loginSubmitHandler}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default SingIn;
