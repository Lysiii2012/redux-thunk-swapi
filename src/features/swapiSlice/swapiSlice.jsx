import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { responsApi } from "../responsApi/responsApi";

export const fetchSwapiData = createAsyncThunk(
    'todos/fetchSwapiData',
    async (endpoint, { rejectWithValue }) => {
        try {
            const response = await fetch(`${responsApi}${endpoint}`);
            if (!response.ok) {
                return rejectWithValue('No found');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue('Failed to fetch data');
        }
    }
);

const swapiSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: {},
        status: 'idle',
        error: null,
    },
    reducers: {
        clearTodos(state) {
            state.todos = {};
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSwapiData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSwapiData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.todos = action.payload;
            })
            .addCase(fetchSwapiData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload; 
            });
    }
});

export const { clearTodos } = swapiSlice.actions;
export default swapiSlice.reducer;
