import React from "react";
import {
  deleteEmployeeSuccess,
  deleteEmployeeFailure,
} from "../actions/EmployeesActions";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { useState } from "react";

function Delete({ id }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentModal, setContentModal] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
    setContentModal("");
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      dispatch(deleteEmployeeFailure());
      setIsModalOpen(true);
      setContentModal("error, please try again");
      return;
    }
    dispatch(deleteEmployeeSuccess(id));
    setIsModalOpen(true);
    setContentModal("Employee deleted successfully !");
  };

  return (
    <div className="delete-container">
      <button className="delete-button" onClick={handleSubmit}>
        ✖️
      </button>
      <div className="modal-display">
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            isClose={closeModal}
            content={contentModal}
          ></Modal>
        )}
      </div>
    </div>
  );
}

export default Delete;
