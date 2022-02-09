import { configureStore } from "@reduxjs/toolkit"
import { notesSlice } from "../features/notes/notesSlice"

export const store = configureStore({
  reducer: {
    notes: notesSlice.reducer,
  },
})
