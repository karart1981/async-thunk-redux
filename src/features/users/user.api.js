import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk('get/users', async () => {
    const response = await axios.get(`http://localhost:3004/users`)

    return response.data
})


export const addUser = createAsyncThunk('add/user', async (data) => {
    const response = await axios.post(`http://localhost:3004/users`, data)

    return response.data
})