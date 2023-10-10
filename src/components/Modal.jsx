import "./ComponentsStyle.css";
import React from "react";
import ReactDOM from "react-dom";

const ModalOverlay = ({ isOpen, isClose, content }) => {
  const handleModalClick = (e) => {
    if (e.target.classList.contains("modalBack")) {
      // Si l'élément cliqué est l'arrière-plan modal, ignorer le clic
      return;
    }
  };

  return (
    <div>
      {isOpen ? (
        <div className="modalBack" onClick={handleModalClick}>
          <div className="ModalView">
            {content}
            <div className="close-btn" onClick={isClose}>
              ✖️
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay
          isClose={props.isClose}
          isOpen={props.isOpen}
          content={props.content}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;
