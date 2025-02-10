function Employee({firstname, lastname, age, address, position, id, updateEmployee, deleteEmployee}) {
  return(
    <div className="bg-secondary-subtle p-3 rounded mt-3 fw-bold">
     <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              <tr key={id}>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>{position}</td>
                <td>
                <button onClick={() => {updateEmployee(id)}} className="btn btn-secondary btn-sm me-2">Edit</button>
                <button onClick={() => {deleteEmployee(id)}} className="btn btn-danger btn-sm">Delete</button>
                
                </td>
              </tr>
          </tbody>
        </table>
        
       
    </div>
    
  )
}

export default Employee