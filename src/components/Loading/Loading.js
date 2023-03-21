import React from "react";
import spinner from "../../assets/images/spinner.svg";

const Loading = () => {
  return (
    <div className="spinner-wrapper">
      <img src={spinner} alt="Spinner img!" />
    </div>
  );
};

export default Loading;
