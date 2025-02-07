function Employee({firstname, lastname, age, address, position}) {
  return(
    <div className="bg-secondary-subtle p-2 rounded mt-3 fw-bold">
      {lastname} {firstname}  {age} {address} {position}
    </div>
    
  )
}

export default Employee