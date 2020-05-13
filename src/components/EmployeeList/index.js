import React from "react";

function EmployeeList(props) {
  console.log(props);
  return (
    <div className="personCard card mt-5" key={props.person.id.value}>
      <div><img className="personThumb" src={props.person.picture.medium} alt={props.person.name.first + props.person.name.last}/></div>
      <div className="col h5">{props.person.name.first} {props.person.name.last}</div>
      <div className="col"> <i class="blue fas fa-birthday-cake"></i> {props.person.dob.date.split("T")[0]}</div>
      <hr/>
      <div className="col"> <i class="blue fas fa-venus-mars"></i> {props.person.gender}</div>
      <hr/>
      <div className="col"> <i class="blue fas fa-phone"></i> {props.person.phone}</div>
      <hr/>
      <div className="col"> <i class="blue fas fa-envelope"></i> {props.person.email}</div>
    </div>
  )
}

export default EmployeeList;