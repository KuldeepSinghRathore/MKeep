import { API } from "utils/API"
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")
const { default: axios } = require("axios")

const initialState = {
  notes: [],
  label: ["work", "study", "code"],
  status: "idle",
  error: null,
}

export const addNote = createAsyncThunk(
  "notes/addNote",
  async ({ notesBody, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API}/notes/new`, notesBody, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      // automatically available in the payload
      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data)
    }
  }
)
export const getAllNotes = createAsyncThunk(
  "notes/getAllNotes",
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API}/notes`, {
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

export const deleteNote = createAsyncThunk(
  "notes/deleteNote",
  async ({ notesBody, token }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${API}/notes/${notesBody._id}`, {
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
export const updateNote = createAsyncThunk(
  "notes/updateNote",
  async ({ notesBody, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API}/notes/${notesBody._id}`,
        notesBody,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data)
    }
  }
)

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: {
    [addNote.pending]: (state) => {
      state.status = "pending"
    },
    [addNote.fulfilled]: (state, action) => {
      state.notes.push(action.payload.note)
      state.status = "fulfilled"
    },
    [addNote.rejected]: (state, action) => {
      state.status = "rejected"
      state.error = action.payload.message
    },
    [getAllNotes.pending]: (state) => {
      state.status = "pending"
    },
    [getAllNotes.fulfilled]: (state, action) => {
      state.notes = action.payload.notes
      state.status = "fulfilled"
    },
    [getAllNotes.rejected]: (state, action) => {
      state.status = "rejected"
      state.error = action.payload.message
    },
    [deleteNote.pending]: (state) => {
      state.status = "pending"
    },
    [deleteNote.fulfilled]: (state, action) => {
      state.notes = state.notes.filter(
        (note) => note._id !== action.payload.note._id
      )
      state.status = "fulfilled"
    },
    [deleteNote.rejected]: (state, action) => {
      state.status = "rejected"
      state.error = action.payload.message
    },
    [updateNote.pending]: (state) => {
      state.status = "pending"
    },
    [updateNote.fulfilled]: (state, action) => {
      state.notes = state.notes.map((note) =>
        note._id === action.payload.note._id ? action.payload.note : note
      )

      state.status = "fulfilled"
    },
    [updateNote.rejected]: (state, action) => {
      state.status = "rejected"
      state.error = action.payload.message
    },
  },
})

export default notesSlice.reducer
