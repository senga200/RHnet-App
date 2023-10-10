import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ComponentsStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowRight,
  faArrowLeft,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";

function Calendar({ selected, onChange, placeholder }) {
  const goToToday = () => {
    onChange(new Date()); //new Date() = date du jour
  };
  const currentYear = new Date().getFullYear();
  //console.log("année courante : ", currentYear);

  const renderCustomHeader = ({
    date,
    changeYear,
    changeMonth,
    previousMonth,
    nextMonth,
  }) => (
    <div className="custom-datepicker-header">
      <button onClick={previousMonth}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button onClick={goToToday}>
        <FontAwesomeIcon icon={faCalendarDay} />
      </button>
      <select
        value={date.getMonth()}
        onChange={(e) => changeMonth(Number(e.target.value))}
      >
        {Array.from({ length: 12 }, (_, i) => (
          <option key={i} value={i}>
            {new Date(0, i).toLocaleString("en-GB", { month: "long" })}
          </option>
        ))}
      </select>
      <select
        value={date.getFullYear()}
        onChange={(e) => changeYear(Number(e.target.value))}
        max={currentYear}
      >
        {Array.from({ length: currentYear - 1958 }, (_, i) => (
          <option key={i} value={currentYear - i}>
            {currentYear - i}
          </option>
        ))}
      </select>
      <button onClick={nextMonth}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );

  return (
    <div className="custom-datepicker">
      <DatePicker
        selected={selected}
        onChange={onChange}
        dateFormat="dd/MM/yyyy"
        customInput={<input placeholder={placeholder} />}
        renderCustomHeader={renderCustomHeader}
        showYearDropdown
        yearDropdownItemNumber={42}
      />
    </div>
  );
}

export default Calendar;
