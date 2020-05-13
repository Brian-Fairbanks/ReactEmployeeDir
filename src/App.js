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
    this.setState({ employees: this.state.employees.sort((a, b) => (a.name[name] > b.name[name] ? order : -order)) });
  }

  handleSort = (name, order) => {
    this.setState({ employees: this.state.employees.sort((a, b) => (a[name] > b[name] ? order : -order)) });
  }

  searchFilter = (name) => {
    this.setState({
      employees: employees.filter(person => {
        return person.name.first.toLowerCase().includes(name.toLowerCase())
          || person.name.last.toLowerCase().includes(name.toLowerCase())
          || person.phone.replace(/\D/g, "").includes(name)
          || person.phone.includes(name)
      })
    })
  }


  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="container pt-3">
            <input type="text" placeholder="Search" onChange={(e) => this.searchFilter(e.target.value)} />
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
        </div>

        <div className="container flex-wrap">
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
        </div>
        
      </div >
    );
  }

}

export default App;
