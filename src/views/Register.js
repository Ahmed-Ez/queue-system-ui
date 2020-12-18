import React from 'react';
import '../styles/form.css';
import bg from '../imgs/bg.svg';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <div className="form-container">
        <div className="img">
          <img src={bg} />
        </div>
        <div className="login-content">
          <form>
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <input type="text" className="input" placeholder="User name" />
              </div>
            </div>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <input type="email" className="input" placeholder="Email" />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <input
                  type="password"
                  className="input"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="">
              <select name="gender" id="gender">
                <option>Select Gender</option>
                <option value="male">Male</option>
                <option value="male">Female</option>
              </select>
            </div>
            <Link href="/register">Already have an account? login now</Link>
            <input type="submit" className="btn" value="Register" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
