function Employee({firstname, lastname, age, address, position, id, updateEmployee, deleteEmployee, selectEmployee}) {
  return(
    <tr>
    <td>{id}</td>
    {/* Add click handlers to firstname and lastname */}
    <td onClick={() => selectEmployee(id)} style={{ cursor: "pointer", color: "blue" }}>
      {firstname}
    </td>
    <td onClick={() => selectEmployee(id)} style={{ cursor: "pointer", color: "blue" }}>
      {lastname}
    </td>
    <td>{position}</td>
    <td>
      <button onClick={() => updateEmployee(id)} className="btn btn-secondary btn-sm me-2">
        Edit
      </button>
      <button onClick={() => deleteEmployee(id)} className="btn btn-danger btn-sm">
        Delete
      </button>
    </td>
  </tr>
  )
}

export default Employee