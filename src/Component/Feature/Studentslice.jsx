import { createSlice } from "@reduxjs/toolkit";
import Student from "../Data"

const StudentSlice = createSlice({
    name:'Student',
    initialState :Student,
    reducers:{
        AddStudent:(state,action)=>{
            state.push(action.payload)
        },
        EditStudent:(state,action)=>{
            const {id,newName,newAge,newCourse,newBatch} = action.payload;
            const exisitingStudent = state.find((student)=>student.id ===id);
            exisitingStudent.Name=newName;
            exisitingStudent.Age=newAge;
            exisitingStudent.Batch=newBatch;
            exisitingStudent.Course=newCourse;
        }
    }
})

export default StudentSlice.reducer;
export const{AddStudent,EditStudent} = StudentSlice.actions;