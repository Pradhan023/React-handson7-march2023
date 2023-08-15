import React from 'react'
import StudentData from './StudentData'
import { useNavigate } from 'react-router'
import './Style/student.css'

const Student = () => {
  const nav = useNavigate()
  return (
    <div>
        <h1 className='heading'>Student</h1>
        <button className='button' onClick={() => nav('/addnewsrudent')}>Add New Student</button>
        <div>
          <StudentData/>
        </div>
    </div>
  )
}

export default Student