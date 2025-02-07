import { useState } from "react";
import Employee from "./Employee";
function Home() {

  const [employee, setEmployee] = useState(0);
  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
      setEmployeeList(
        employeeList => [
          ...employeeList, employee
        ]
      );
 
    

    setEmployee({
      firstname: '',
      lastname: '',
      age: '',
      address: '',
      position: '',
    })
  }

  return (
  <div className="container-fluid p-5 mt-5">
        <span className="bg-danger-subtle fs-1 fw-bold p-2 rounded">👤Employee Dashboard</span>
          <h5 className="mt-5">{employee.firstname} {employee.lastname}</h5>
          <h5>{employee.age}</h5>
          <h5>{employee.address}</h5>
          <h5>{employee.position}</h5>
        <div className="row">
            <div className="col-md-5 mt-5">
              <label htmlFor="firstname">Firstname</label>
              <input id="firstname" onChange={(e) =>setEmployee({
                  ...employee, 
                  firstname: e.target.value
                })}
                className="form-control"
                type="text" 
              />
            </div>

              <div className="col-md-5 mt-5">
                <label htmlFor="lastname">Lastname</label>
                  <input id="lastname" onChange={(e) =>setEmployee({
                      ...employee, 
                      lastname: e.target.value
                    })}
                    className="form-control" 
                    type="text" 
                  />
              </div>

              <div className="col-md-2 mt-5">
                  <label htmlFor="lastname">Age</label>
                  <input id="lastname" onChange={(e) =>setEmployee({
                      ...employee, 
                      age: e.target.value
                    })}
                    className="form-control"
                    type="number" 
                  />
              </div>
        </div>

        <div className="row">
            <div className="col-md-6 mt-3">
              <label htmlFor="address">Address</label>
              <input id="address" onChange={(e) =>setEmployee({
                      ...employee, 
                      address: e.target.value
                    })} 
                  className="form-control" 
                  type="text" 
              />
            </div>

            <div className="col-md-6 mt-3">
              <label htmlFor="position">Position</label>
              <input id="position" onChange={(e) =>setEmployee({
                    ...employee, 
                    position: e.target.value
                  })}
                className="form-control" 
                type="text" 
              />
            </div>
        </div>

        <div className="mt-3">
          <button onClick={() =>{ addEmployee()}} className="btn btn-dark ps-3 pe-4">+Add</button>
        </div>

        <hr></hr>
        <span className="bg-danger-subtle p-1 mb-5 rounded">This is the list of employee</span>
        {
          employeeList.map((employeeRecord) =>(
            <Employee 
            key={employeeRecord}
            firstname={employeeRecord.firstname}
            lastname={employeeRecord.lastname}
            age={employeeRecord.age}
            address={employeeRecord.address}
            position={employeeRecord.position} 
            />
          ))
        }
        
  </div>
   
  )
}

export default Home