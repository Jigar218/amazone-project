import React from "react";

const SignIn = () => {
  return (
    <div className="bg-white text-center">
      <h5 className=" recommend">See personalized recommendations</h5>
      <button className="sign-btn ">Sign in</button>
      <p className="new-user">
        New customer? <span className="text-primary">Start here.</span>
      </p>
      <hr className="w-100" />
    </div>
  );
};

export default SignIn;
