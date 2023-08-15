import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from './Feature/Studentslice'

export default configureStore({
    reducer:{
        Student: StudentSlice
    }
})