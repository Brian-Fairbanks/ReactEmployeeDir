import React from "react";

function EmployeeList(props) {
  console.log(props);
  return (
    <div className="employee-row row d-flex flex-column flex-md-row py-2">
      <div className="col bg-primary"><span className="d-inline d-md-none smlabel">First Name:</span>{props.person.name.first}</div>
      <div className="col bg-secondary"><span className="d-inline d-md-none smlabel">Last Name:</span>{props.person.name.last}</div>
      <div className="col bg-secondary"><span className="d-inline d-md-none smlabel">DOB:</span>{props.person.dob.date.split("T")[0]}</div>
      <div className="col bg-primary"><span className="d-inline d-md-none smlabel">Gender:</span>{props.person.gender}</div>
      <div className="col bg-secondary"><span className="d-inline d-md-none smlabel">Phone:</span>{props.person.phone}</div>
      <div className="col bg-primary"><span className="d-inline d-md-none smlabel">Email:</span>{props.person.email}</div>
    </div>
  )
}

export default EmployeeList;