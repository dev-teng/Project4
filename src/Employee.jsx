function Employee({firstname, lastname, age, address, position}) {
  return(
    <div className="bg-secondary-subtle p-2 rounded mt-3 fw-bold">
      {lastname} {firstname}  {age} {address} {position}
        <button className="float-end btn btn-danger btn-sm">Delete</button>
        <button className="float-end btn btn-secondary me-2 btn-sm">Edit</button>
       
    </div>
    
  )
}

export default Employee