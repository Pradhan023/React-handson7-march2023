import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddStudent } from './Feature/Studentslice'
import { useNavigate } from 'react-router'
import './Style/EAStudent.css'

const Addnewstu = () => {
  const stuli = useSelector((state) => state.Student)
  const nav = useNavigate();
  const dispatch = useDispatch();
    const [Name,setName] =useState('')
    const [Age,setAge] =useState('')
    const [Batch,setbatch] =useState('')
    const [Course,setCourse] =useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(AddStudent({
          Id:stuli[stuli.length-1].Id+1,
          Name,
          Age,
          Batch,
          Course
        }))
        setName('')
        setAge('')
        setbatch('')
        setCourse('')
        nav('/student')
    }

  return (
    <div style={{padding:'25px 0 0 15px'}}>
        <h1>New Student</h1>
        <form className='form'>
            <label>Name</label>
            <input type='text' value={Name} onChange={(e)=>setName(e.target.value)}/>
            <label>Age</label>
            <input type='number' value={Age} onChange={(e)=>setAge(e.target.value)}/><br/><br/>
            <label>Batch</label>
            <input type='text' value={Batch} onChange={(e)=>setbatch(e.target.value)}/>
            <label>Course</label>
            <input type='text' value={Course} onChange={(e)=>setCourse(e.target.value)}/>
        </form>
        <div className="btn">
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={()=>{nav('/student')}}>Cancel</button>
        </div>
    </div>
  )
}

export default Addnewstu