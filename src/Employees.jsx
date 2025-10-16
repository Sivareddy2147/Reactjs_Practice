import React, { useEffect, useState } from 'react'

function Employees() {
  const [employees, setEmployees] = useState();
     useEffect(() => {
     fetch("http://localhost:3000/employees")
     .then((res) => res.json())
     .then((data) => {
      setEmployees([...data]);
    });
  }, []);
  return (
    <div className="border border-2 m-2 p-2 border-danger">
        <h1>Employees</h1>
        <ul>
        {
          employees?.map((emp) => {
            return (
               <li key={emp.id}>
                <b>{emp.firstname}</b>
              </li>
            );
          })
       }
        </ul>
        </div>
  );
}

export default Employees;