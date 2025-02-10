function Employee({firstname, lastname, age, address, position, id, updateEmployee, deleteEmployee}) {
  return(
    <div >
     <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{id}</td>
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