import { useState } from "react";
import Employee from "./Employee";
function Home() {

  const [employee, setEmployee] = useState(0);
  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {

    if(employee.firstname === '' || employee.lastname === '' || employee.age === ''
       || employee.address === '' || employee.position === ''
      ) {
        alert('Missing fields ❌')
      } else {
        setEmployeeList([
          ...employeeList,
          { ...employee, id: Date.now() },
        ]);
      
          setEmployee({
            firstname: '',
            lastname: '',
            age: '',
            address: '',
            position: '',
          })
      }
      
  }

  // delete button
  const deleteEmployee = (id) => {
    setEmployeeList(employeeList.filter(emp => emp.id !== id));
  }

  return (
  <div className="container-fluid p-5 mt-5">
        <span className="bg-danger-subtle fs-1 fw-bold p-2 rounded">👤Employee Dashboard</span>
        <div className="row">
            <div className="col-md-5 mt-5">
              <label htmlFor="firstname">Firstname</label>
              <input id="firstname" 
                onChange={(e) =>setEmployee({...employee, firstname: e.target.value})}
                value={employee.firstname}
                className="form-control"
                type="text" 
              />
            </div>

              <div className="col-md-5 mt-5">
                <label htmlFor="lastname">Lastname</label>
                  <input id="lastname" 
                    onChange={(e) =>setEmployee({...employee, lastname: e.target.value })}
                    value={employee.lastname}
                    className="form-control" 
                    type="text" 
                  />
              </div>

              <div className="col-md-2 mt-5">
                  <label htmlFor="lastname">Age</label>
                  <input id="lastname" 
                    onChange={(e) =>setEmployee({...employee, age: e.target.value})}
                    value={employee.age}
                    className="form-control"
                    type="number" 
                  />
              </div>
        </div>

        <div className="row">
            <div className="col-md-6 mt-3">
              <label htmlFor="address">Address</label>
              <input id="address" 
                  onChange={(e) =>setEmployee({...employee, address: e.target.value})} 
                  value={employee.address}
                  className="form-control" 
                  type="text" 
              />
            </div>

            <div className="col-md-6 mt-3">
              <label htmlFor="position">Position</label>
              <input id="position" 
                onChange={(e) =>setEmployee({...employee, position: e.target.value})}
                value={employee.position}
                className="form-control" 
                type="text" 
              />
            </div>
        </div>

        <div className="mt-3">
          <button onClick={() =>{ addEmployee()}} className="btn btn-dark ps-3 pe-4">+Add</button>
        </div>

        <h5 className="mt-5">{employee.firstname} {employee.lastname}</h5>
          <h5>{employee.age}</h5>
          <h5>{employee.address}</h5>
          <h5>{employee.position}</h5>

        <hr></hr>
        <span className="bg-danger-subtle p-1 mb-5 rounded">This is the list of employee</span>
        {
          employeeList.map((employeeRecord) =>(
            <Employee 
            key={employeeRecord.id} //for delete button
            id={employeeRecord.id} // for delete button
            firstname={employeeRecord.firstname}
            lastname={employeeRecord.lastname}
            age={employeeRecord.age}
            address={employeeRecord.address}
            position={employeeRecord.position} 
            deleteEmployee={deleteEmployee} // for delete button
            />
          ))
        }
        
  </div>
   
  )
}

export default Home