import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import './Style/student.css'

const StudentData = () => {
  const Data = useSelector((state)=>state.Student)
  console.log(Data);
  return (
    <>
      <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          </tr>
        </thead>
        <tbody>
        {
        Data.map((data,index) =>{
          return(
            <tr key={index}>
              <td>{data.Name}</td>
              <td>{data.Age}</td>
              <td>{data.Course}</td>
              <td>{data.Batch}</td>
              <td><Link to='/edit' state={{Db : data.id }}>Edit</Link></td>
            </tr>
          )
        })
      }
        </tbody>
      </table>
    </>
  )
}

export default StudentData