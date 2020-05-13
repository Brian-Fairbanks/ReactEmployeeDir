import React from 'react';
import './App.css';
import employees from "./employees.json"
import EmployeeList from "./components/EmployeeList";


class App extends React.Component {
  state = {
    employees,
    first: 1,
    last: 1,
    email: 1
  }

  handleNameSort = (name, order) => {
    this.setState({ employees: employees.sort((a, b) => (a.name[name] > b.name[name] ? order : -order)) });
  }

  handleSort = (name, order) => {
    this.setState({ employees: employees.sort((a, b) => (a[name] > b[name] ? order : -order)) });
  }


  render() {
    return (
      <div className="container">
        <div>
          <div className="header row flex h4 my-0 p-0 py-2">
            <div className="col">
              <div className="d-inline">
                First
              </div>
              <i className={this.state.first > 0 ? "fas fa-sort-amount-down-alt" : "fas fa-sort-amount-up-alt"}
                onClick={() => { this.handleNameSort("first", this.state.first); this.setState({ first: -this.state.first }) }}></i>
            </div>

            <div className="col d-flex">
              <div>
                Last
              </div>
              <i className={this.state.last > 0 ? "fas fa-sort-amount-down-alt" : "fas fa-sort-amount-up-alt"}
                onClick={() => { this.handleNameSort("last", this.state.last); this.setState({ last: -this.state.last }) }}></i>
            </div>

            <div className="col d-flex">
              <div>
                DOB
              </div>
            </div>

            <div className="col d-flex">
              <div>
                Gender
              </div>
            </div>

            <div className="col d-flex">
              <div>
                Phone
              </div>
            </div>

            <div className="col d-flex">
              <div>
                Email
              </div>
              <i className={this.state.email > 0 ? "fas fa-sort-amount-down-alt" : "fas fa-sort-amount-up-alt"}
                onClick={() => { this.handleSort("email", this.state.email); this.setState({ email: -this.state.email }) }}></i>
            </div>
          </div>
        </div>
        {
          this.state.employees.map((employee) => {
            //console.log(employee)
            return (
              <EmployeeList
                person={employee}
              />
            )
          })
        }
      </div >
    );
  }

}

export default App;
