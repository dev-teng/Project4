function Employee({firstname, lastname, age, address, position, id, updateEmployee, deleteEmployee}) {
  return(
    <div className="bg-secondary-subtle p-3 rounded mt-3 fw-bold">
      <span>{lastname} {firstname}  {age} {address} {position}</span>
        <button onClick={() => {deleteEmployee(id)}} className="float-end btn btn-danger btn-sm">Delete</button>
        <button onClick={() => {updateEmployee()}} className="float-end btn btn-secondary me-2 btn-sm">Edit</button>
       
    </div>
    
  )
}

export default Employee