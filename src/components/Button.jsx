import React from "react";
import { Link } from "react-router-dom";

function Button({ to, text }) {
  return (
    <Link to={to} className="link">
      {text}
    </Link>
  );
}

export default Button;
