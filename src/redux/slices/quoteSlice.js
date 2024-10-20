import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuotes = createAsyncThunk("quote/fetchQuotes", async () => {
  const response = await axios.get("http://api.quotable.io/random");
  return response.data;
});
const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quote: "",
    author: "",
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuotes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Сохраняем новую цитату и автора
        state.quote = action.payload.content; // цитата
        state.author = action.payload.author; // автор
      })
      .addCase(fetchQuotes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default quoteSlice.reducer;
