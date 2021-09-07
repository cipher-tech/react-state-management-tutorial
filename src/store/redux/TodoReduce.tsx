import {createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";
// import { fetchCount } from './counterAPI';

export interface CounterState {
    allItems: [];
}

const initialState: CounterState = {
    allItems: [],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addItem: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.allItems = [];
        },
        deleteItem: (state) => {
            state.allItems = [];
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        completed: (state, action: PayloadAction<number>) => {
            state.allItems = [];
        },
    },
});

export const { addItem, deleteItem, completed } = todoSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getStore = (state: RootState) => state.todo;

export default todoSlice.reducer;
