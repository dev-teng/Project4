function Employee({firstname, lastname, age, address, position, id, updateEmployee, deleteEmployee}) {
  return(
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
  )
}

export default Employee