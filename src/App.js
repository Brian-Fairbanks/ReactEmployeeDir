import React from 'react';
import './App.css';
import employees from "./employees.json"
import EmployeeList from "./components/EmployeeList";


class App extends React.Component {
  state = {
    employees,
    first: 1,
    last: 1,
    email: 1,
    sort : "",
    search:""
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
      }),
      search:name
    })
  }


  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="container py-3 text-center">
            <input type="text" placeholder="Search" onChange={(e) => this.searchFilter(e.target.value)} />
            <div className="filter d-flex justify-content-around h4">
              <div className="">
                First Name
                <i className={this.state.first > 0 ? "fas fa-sort-amount-down-alt" : "fas fa-sort-amount-up-alt"}
                  onClick={() => { this.handleNameSort("first", this.state.first); this.setState({ first: -this.state.first, sort:"first" }) }}></i>
              </div>

              <div className="">
                  Last Name
                <i className={this.state.last > 0 ? "fas fa-sort-amount-down-alt" : "fas fa-sort-amount-up-alt"}
                  onClick={() => { this.handleNameSort("last", this.state.last); this.setState({ last: -this.state.last, sort:"last" }) }}></i>
              </div>

              <div className="">
                Email
                <i className={this.state.email > 0 ? "fas fa-sort-amount-down-alt" : "fas fa-sort-amount-up-alt"}
                  onClick={() => { this.handleSort("email", this.state.email); this.setState({ email: -this.state.email, sort:"email" }) }}></i>
              </div>

            </div>
          </div>
        </div>
        
        <div>
          {this.state.search? `Searching for "${this.state.search}" : `: ""}
          Displaying {this.state.employees.length} employees
          {this.state.sort? `, Sorted by ${this.state.sort} ${this.state[this.state.sort] < 0? "A-Z":"Z-A"}` : ""}
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
