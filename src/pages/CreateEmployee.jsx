import React from "react";
import "./style.css";
import Header from "../components/Header";
import Calendar from "../components/Calendar";
import Modal from "../components/Modal";
import Button from "../components/Button";
import Select from "react-select-for-hrnet";
import "react-select-for-hrnet/src/Select.css";

//redux
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addEmployeeSuccess,
  addEmployeeFailure,
} from "../actions/EmployeesActions";

const states = [
  {
    name: "Alabama",
    abbreviation: "AL",
  },
  {
    name: "Alaska",
    abbreviation: "AK",
  },
  {
    name: "American Samoa",
    abbreviation: "AS",
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
  },
  {
    name: "California",
    abbreviation: "CA",
  },
  {
    name: "Colorado",
    abbreviation: "CO",
  },
  {
    name: "Connecticut",
    abbreviation: "CT",
  },
  {
    name: "Delaware",
    abbreviation: "DE",
  },
  {
    name: "District Of Columbia",
    abbreviation: "DC",
  },
  {
    name: "Federated States Of Micronesia",
    abbreviation: "FM",
  },
  {
    name: "Florida",
    abbreviation: "FL",
  },
  {
    name: "Georgia",
    abbreviation: "GA",
  },
  {
    name: "Guam",
    abbreviation: "GU",
  },
  {
    name: "Hawaii",
    abbreviation: "HI",
  },
  {
    name: "Idaho",
    abbreviation: "ID",
  },
  {
    name: "Illinois",
    abbreviation: "IL",
  },
  {
    name: "Indiana",
    abbreviation: "IN",
  },
  {
    name: "Iowa",
    abbreviation: "IA",
  },
  {
    name: "Kansas",
    abbreviation: "KS",
  },
  {
    name: "Kentucky",
    abbreviation: "KY",
  },
  {
    name: "Louisiana",
    abbreviation: "LA",
  },
  {
    name: "Maine",
    abbreviation: "ME",
  },
  {
    name: "Marshall Islands",
    abbreviation: "MH",
  },
  {
    name: "Maryland",
    abbreviation: "MD",
  },
  {
    name: "Massachusetts",
    abbreviation: "MA",
  },
  {
    name: "Michigan",
    abbreviation: "MI",
  },
  {
    name: "Minnesota",
    abbreviation: "MN",
  },
  {
    name: "Mississippi",
    abbreviation: "MS",
  },
  {
    name: "Missouri",
    abbreviation: "MO",
  },
  {
    name: "Montana",
    abbreviation: "MT",
  },
  {
    name: "Nebraska",
    abbreviation: "NE",
  },
  {
    name: "Nevada",
    abbreviation: "NV",
  },
  {
    name: "New Hampshire",
    abbreviation: "NH",
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
  },
  {
    name: "New Mexico",
    abbreviation: "NM",
  },
  {
    name: "New York",
    abbreviation: "NY",
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
  },
  {
    name: "North Dakota",
    abbreviation: "ND",
  },
  {
    name: "Northern Mariana Islands",
    abbreviation: "MP",
  },
  {
    name: "Ohio",
    abbreviation: "OH",
  },
  {
    name: "Oklahoma",
    abbreviation: "OK",
  },
  {
    name: "Oregon",
    abbreviation: "OR",
  },
  {
    name: "Palau",
    abbreviation: "PW",
  },
  {
    name: "Pennsylvania",
    abbreviation: "PA",
  },
  {
    name: "Puerto Rico",
    abbreviation: "PR",
  },
  {
    name: "Rhode Island",
    abbreviation: "RI",
  },
  {
    name: "South Carolina",
    abbreviation: "SC",
  },
  {
    name: "South Dakota",
    abbreviation: "SD",
  },
  {
    name: "Tennessee",
    abbreviation: "TN",
  },
  {
    name: "Texas",
    abbreviation: "TX",
  },
  {
    name: "Utah",
    abbreviation: "UT",
  },
  {
    name: "Vermont",
    abbreviation: "VT",
  },
  {
    name: "Virgin Islands",
    abbreviation: "VI",
  },
  {
    name: "Virginia",
    abbreviation: "VA",
  },
  {
    name: "Washington",
    abbreviation: "WA",
  },
  {
    name: "West Virginia",
    abbreviation: "WV",
  },
  {
    name: "Wisconsin",
    abbreviation: "WI",
  },
  {
    name: "Wyoming",
    abbreviation: "WY",
  },
];

const departments = [
  "Sales",
  "Marketing",
  "Engineering",
  "Human Resources",
  "Legal",
];

function CreateEmployee() {
  const dispatch = useDispatch();

  const newEmployee = useSelector((state) => state.employeesList);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [department, setDepartment] = useState("");
  const [startDate, setStartDate] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentModal, setContentModal] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
    setContentModal("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !street ||
      !city ||
      !state ||
      !department ||
      !zipCode ||
      !startDate ||
      !dateOfBirth
    ) {
      dispatch(addEmployeeFailure());
      document.querySelector(".alert").innerHTML =
        "Please fill in all required fields";
      document.querySelector(".alert").style.color = "red";
      return;
    } else {
      const formattedStartDate = startDate.toLocaleDateString();
      const formattedDateOfBirth = dateOfBirth.toLocaleDateString();
      dispatch(
        addEmployeeSuccess({
          id: newEmployee.employees.length + 1,
          firstName,
          lastName,
          street,
          city,
          state,
          department,
          startDate: formattedStartDate,
          dateOfBirth: formattedDateOfBirth,
          zipCode,
        })
      );
      document.querySelector(".alert").innerHTML = "";
      setIsModalOpen(true);
      setContentModal("employee create successfully !");
    }
    // vider les champs du formulaire
    setFirstName("");
    setLastName("");
    setStreet("");
    setCity("");
    setStartDate("");
    setDateOfBirth("");
    setState("");
    setZipCode("");
    setDepartment("");
  };

  return (
    <div className="createEmployee_container">
      <div className="title">
        <Header />
      </div>
      <div className="container">
        <Button to="/employee-list" text="View Current Employees" />
        <h2>Create Employee</h2>
        <form id="create-employee" onSubmit={handleSubmit}>
          <span className="requiredFields">* Required Fields</span>
          <label htmlFor="first-name">First Name *</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="last-name">Last Name *</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="start-date">start Date *</label>
          <Calendar
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <label htmlFor="date-of-birth">Date of Birth *</label>
          <Calendar
            selected={dateOfBirth}
            onChange={(date) => setDateOfBirth(date)}
          />
          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street *</label>
            <input
              type="text"
              id="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />

            <label htmlFor="city">City *</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <label htmlFor="state">State *</label>
            <Select
              options={states.map((state) => ({
                label: state.name,
                value: state.abbreviation,
              }))}
              id="state"
              name="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />

            <label htmlFor="zip-code">Zip Code *</label>
            <input
              id="zip-code"
              name="zip-code"
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </fieldset>
          <label htmlFor="department">Department *</label>
          <Select
            options={departments.map((department) => ({
              label: department,
              value: department,
            }))}
            id="department"
            name="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <span className="alert"></span>
          {isModalOpen && (
            <Modal
              isOpen={isModalOpen}
              isClose={closeModal}
              content={contentModal}
            ></Modal>
          )}

          <button className="submitButton" type="submit" form="create-employee">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateEmployee;
