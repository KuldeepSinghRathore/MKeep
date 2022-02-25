import axios from "axios"
import { API } from "utils/API"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const userId = JSON.parse(localStorage.getItem("userId")) || null
const username = JSON.parse(localStorage.getItem("username")) || null
const token = JSON.parse(localStorage.getItem("token")) || null
const email = JSON.parse(localStorage.getItem("email")) || null
const labels = JSON.parse(localStorage.getItem("labels")) || []
const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || false

export const signUpPressed = createAsyncThunk(
  "users/signup",
  async (signUpData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API}/signup`, signUpData)
      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data)
    }
  }
)
export const loginPressed = createAsyncThunk(
  "users/login",
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API}/login`, loginData)
      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data)
    }
  }
)

export const addLabelPressed = createAsyncThunk(
  "notes/addLabelPressed",
  async ({ label, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API}/labels/new`, label, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data)
    }
  }
)

const initialState = {
  isLoggedIn,

  isLoading: false,
  error: null,
  userId,
  username,
  token,
  email,
  labels,

  status: "idle",
}
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logOutPressed: () => {
      localStorage.removeItem("userId")
      localStorage.removeItem("username")
      localStorage.removeItem("token")
      localStorage.removeItem("email")
      localStorage.removeItem("labels")
      localStorage.removeItem("isLoggedIn")
      return {
        status: "idle",
        isLoggedIn: false,
        userId: null,
        username: null,
        token: null,
        email: null,
        labels: [],
      }
    },
    resetStatus: (state) => {
      state.status = "idle"
    },
  },
  extraReducers: {
    [signUpPressed.pending]: (state) => {
      state.status = "pending"
    },
    [signUpPressed.fulfilled]: (state, action) => {
      state.dataToCheck = action.payload
      localStorage.setItem("userId", JSON.stringify(action.payload.userId))
      localStorage.setItem("isLoggedIn", JSON.stringify(true))
      localStorage.setItem("username", JSON.stringify(action.payload.username))
      localStorage.setItem("token", JSON.stringify(action.payload.token))
      localStorage.setItem("email", JSON.stringify(action.payload.email))
      localStorage.setItem("labels", JSON.stringify(action.payload.labels))
      state.isLoggedIn = true
      state.userId = action.payload.userId
      state.username = action.payload.username
      state.token = action.payload.token
      state.email = action.payload.email
      state.labels = action.payload.labels

      state.status = "fulfilled"
    },
    [signUpPressed.rejected]: (state, action) => {
      state.status = "rejected"
      state.error = action.payload.message
    },
    [loginPressed.pending]: (state) => {
      state.status = "pending"
    },
    [loginPressed.fulfilled]: (state, action) => {
      state.dataToCheck = action.payload
      localStorage.setItem("userId", JSON.stringify(action.payload.userId))
      localStorage.setItem("username", JSON.stringify(action.payload.username))
      localStorage.setItem("token", JSON.stringify(action.payload.token))
      localStorage.setItem("email", JSON.stringify(action.payload.email))
      localStorage.setItem("labels", JSON.stringify(action.payload.labels))
      localStorage.setItem("isLoggedIn", JSON.stringify(true))
      state.userId = action.payload.userId
      state.username = action.payload.username
      state.token = action.payload.token
      state.email = action.payload.email
      state.labels = action.payload.labels
      state.isLoggedIn = true

      state.status = "fulfilled"
    },
    [loginPressed.rejected]: (state, action) => {
      state.status = "rejected"
      state.error = action.payload?.message
    },
    [addLabelPressed.pending]: (state) => {
      state.status = "pending"
    },
    [addLabelPressed.fulfilled]: (state, action) => {
      localStorage.setItem("labels", JSON.stringify(action.payload.labels))
      state.labels = action.payload.labels
      state.status = "fulfilled"
    },
    [addLabelPressed.rejected]: (state, action) => {
      state.status = "rejected"
      state.error = action.payload.message
    },
  },
})
export const { logOutPressed, resetStatus } = userSlice.actions
export default userSlice.reducer
