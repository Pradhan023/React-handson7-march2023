import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router'
import { EditStudent } from './Feature/Studentslice';

const Edit = () => {
  const loc = useLocation().state.Db;
  const stdData = useSelector((state)=>state.Student.filter((item)=> item.id === loc))
  const {Name,Age,Batch,Course} = stdData[0];
  const dispatch = useDispatch()
  const nav = useNavigate();
  
  const [newName,setName] =useState(Name)
  const [newAge,setAge] =useState(Age)
  const [newBatch,setbatch] =useState(Batch)
  const [newCourse,setCourse] =useState(Course)

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(EditStudent({
      id:loc,
      newName,
      newAge,
      newBatch,
      newCourse
    }))
    nav('/student')

  }

  return (
    <div style={{padding:'25px 0 0 15px'}}>
        <h1>New Student</h1>
        <form className='form'>
            <label>Name</label>
            <input type='text' value={newName} onChange={(e)=>setName(e.target.value)}/>
            <label>Age</label>
            <input type='number' value={newAge} onChange={(e)=>setAge(e.target.value)}/><br/><br/>
            <label>Batch</label>
            <input type='text' value={newBatch} onChange={(e)=>setbatch(e.target.value)}/>
            <label>Course</label>
            <input type='text' value={newCourse} onChange={(e)=>setCourse(e.target.value)}/>
        </form>
        <div className="btn">
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={()=>{nav('/student')}}>Cancel</button>
        </div>
    </div>
  )
}

export default Edit