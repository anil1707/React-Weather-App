import React from "react";

const ErrorMessage = ({ data }) => {
  console.log(data);
  return (
    <div className="container errorConatainer">
      <h1 style={{ color: "blue" }}>Opps !</h1>
      <h2>404 Error </h2>
      <h3 style={{ color: "green" }}>Please Enter Valid City Name</h3>
    </div>
  );
};

export default ErrorMessage;
