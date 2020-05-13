import React from "react";

function EmployeeList(props) {
  console.log(props);
  return (
    <div className="personCard card mt-5" key={props.person.id.value}>
      <div><img className="personThumb" src={props.person.picture.medium} alt={props.person.name.first + props.person.name.last}/></div>
      <div className="col"><span className="d-inline d-md-none smlabel">First Name:</span>{props.person.name.first}</div>
      <div className="col"><span className="d-inline d-md-none smlabel">Last Name:</span>{props.person.name.last}</div>
      <div className="col"><span className="d-inline d-md-none smlabel">DOB:</span>{props.person.dob.date.split("T")[0]}</div>
      <div className="col"><span className="d-inline d-md-none smlabel">Gender:</span>{props.person.gender}</div>
      <div className="col"><span className="d-inline d-md-none smlabel">Phone:</span>{props.person.phone}</div>
      <div className="col"><span className="d-inline d-md-none smlabel">Email:</span>{props.person.email}</div>
    </div>
  )
}

export default EmployeeList;