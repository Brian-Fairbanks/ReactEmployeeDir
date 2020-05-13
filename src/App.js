import React from 'react';
import './App.css';
import employees from "./employees.json"
import EmployeeList from "./components/EmployeeList";


class App extends React.Component {
  state = {
    employees
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
              <div className=" d-inline text-right">
                I
              </div>
            </div>
            
            <div className="col d-flex">
              <div>
                Last
              </div>
              <div>

              </div>
            </div>
            <div className="col d-flex">
              <div>
                DOB
              </div>
              <div>

              </div>
            </div>
            <div className="col d-flex">
              <div>
                Gender
              </div>
              <div>

              </div>
            </div>
            <div className="col d-flex">
              <div>
                Phone
              </div>
              <div>

              </div>
            </div>
            <div className="col d-flex">
              <div>
                Email
              </div>
              <div>

              </div>
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
