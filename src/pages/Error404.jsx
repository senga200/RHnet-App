import React from "react";
import Header from "../components/Header";

function Error404() {
  return (
    <div className="err404">
      <Header />
      <h1>Erreur 404</h1>
      <p>La page que vous recherchez n'existe pas</p>
    </div>
  );
}

export default Error404;
