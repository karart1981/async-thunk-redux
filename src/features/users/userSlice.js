import { createSlice } from "@reduxjs/toolkit"
import { getUsers, addUser } from "./user.api"


const initialState = {
    users: []
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
    }

})

export const userReducer = userSlice.reducer