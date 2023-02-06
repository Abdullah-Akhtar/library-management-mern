import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <div className="col-6">
        <h1 className="form-label">Sign IN</h1>
        <input
          className="form-control mt-2"
          id="validationCustom03"
          type="email"
          placeholder="Email"
          name="email"
          // value={tempSign.email}
          // onChange={SignInHandleChange}
        />
        <input
          id="password"
          className="form-control mt-2"
          type="password"
          placeholder="Password"
          name="password"
          // value={tempSign.password}
          // onChange={SignInHandleChange}
        />
        <button
          className="btn btn-primary mt-3"
          // onClick={(e) => SignInHandleIncludeUser(e)}
        >
          Sign In
        </button>
        <h3>
          want to <Link to="/SignUp">Sign Up ? </Link>
        </h3>
      </div>
    </>
  );
}

export default SignIn;
