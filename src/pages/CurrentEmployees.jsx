import React from "react";
import Delete from "../components/Delete";
import Header from "../components/Header";
import Button from "../components/Button";
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader,
} from "react-bs-datatable";
import { Col, Row, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { useState } from "react";

const headers = [
  {
    title: "FirstName",
    prop: "firstName",
    isSortable: true,
  },
  {
    title: "LastName",
    prop: "lastName",
    isSortable: true,
  },
  {
    title: "Start Date",
    prop: "startDate",
    isSortable: true,
  },
  {
    title: "Department",
    prop: "department",
    isSortable: true,
  },
  {
    title: "Date of Birth",
    prop: "dateOfBirth",
    isSortable: true,
  },
  {
    title: "Street",
    prop: "street",
    isSortable: true,
  },
  {
    title: "City",
    prop: "city",
    isSortable: true,
  },
  {
    title: "State",
    prop: "state",
    isSortable: true,
  },
  {
    title: "Zip Code",
    prop: "zipCode",
    isSortable: true,
  },
  {
    title: "Delete",
    prop: "delete",
    isSortable: false,
    cell: (row) => <Delete id={row.id} />,
  },
];

const countEmployees = (employees) => {
  return employees.length;
};

function CurrentEmployees() {
  const employees = useSelector((state) => state.employeesList.employees);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = employees.filter((employee) => {
    const fullName = `${employee.firstName} ${employee.lastName}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="currentEmployee_container">
      <div className="title">
        <Header />
      </div>
      <div className="container">
        <div className="container_border">
          <Button to="/" text="Create Employee Form" />
          <h2>Current Employees</h2>
          <DatatableWrapper
            body={filteredEmployees}
            headers={headers}
            paginationOptionsProps={{
              initialState: {
                rowsPerPage: 10,
                options: [5, 10, 15, 20],
              },
            }}
          >
            <Row className="mb-4">
              <Col
                xs={12}
                lg={4}
                className="d-flex flex-col justify-content-end align-items-end"
              >
                <Filter />
              </Col>
              <Col
                xs={12}
                sm={6}
                lg={4}
                className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
              >
                <PaginationOptions label="custom Label" />
              </Col>
              <Col
                xs={12}
                sm={6}
                lg={4}
                className="d-flex flex-col justify-content-end align-items-end"
              >
                <div className="search_input">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                    }}
                  />
                  <Filter />
                </div>
                <Pagination />
              </Col>
            </Row>
            <Table>
              <TableHeader />
              <TableBody />
            </Table>
          </DatatableWrapper>
          <span>{countEmployees(employees)} entries </span>
        </div>
      </div>
    </div>
  );
}

export default CurrentEmployees;
