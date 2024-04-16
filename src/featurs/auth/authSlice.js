import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";



const userExist = JSON.parse(localStorage.getItem("user"));


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: userExist ? userExist : null,
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: "",
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state, action) => {
                state.isLoading = true,
                    state.isSuccess = false,
                    state.isError = false
            }).addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = true,
                    state.isError = false
                state.user = action.payload,
                    state.message = ""
            }).addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = false,
                    state.isError = true,
                    state.message = action.payload
            }).addCase(loginUser.pending, (state, action) => {
                state.isLoading = true,
                    state.isSuccess = false,
                    state.isError = false
            }).addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = true,
                    state.isError = false
                state.user = action.payload,
                    state.message = ""
            }).addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = false,
                    state.isError = true,
                    state.message = action.payload
            }).addCase(logoutUser.fulfilled, (state, action) => {
                state.user = null;
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = false;
                state.message = "";
            })
    },
})


export default authSlice.reducer;

export const registerUser = createAsyncThunk("REGISTER/USER", async (userData, thunkAPI) => {
    try {
        return await authService.register(userData);
    } catch (error) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
    }
})


export const loginUser = createAsyncThunk("LOGIN/USER", async (userData, thunkAPI) => {
    try {
        return await authService.login(userData);
    } catch (error) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
    }
})

export const logoutUser = createAsyncThunk("LOGOUT/USER", async () => {
    try {
        localStorage.removeItem("user");
    } catch (error) {
        console.log(error)
    }
})