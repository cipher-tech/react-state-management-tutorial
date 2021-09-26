import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITaskProperty } from "../../types";
import { RootState } from "./index";
// import { fetchCount } from './counterAPI';

export interface ITaskState {
    allItems: ITaskProperty[];
}

// we create our state with initial values
const initialState: ITaskState = {
    allItems: [
        {
            id: 8838,
            title: "Write code",
            completed: true,
        },
        {
            id: 8844,
            title: "Get some sleep",
            completed: true,
        },
    ],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addItem: (state, action: PayloadAction<string>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes

            state.allItems = [
                ...state.allItems,
                {
                    id: Math.floor(Math.random() * 10000),
                    title: action.payload,
                    completed: false,
                },
            ];
        },
        deleteItem: (state, action: PayloadAction<number>) => {
            state.allItems = state.allItems.filter(
                (item) => item.id !== action.payload
            );
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        completed: (state, action: PayloadAction<number>) => {
            state.allItems = state.allItems.map((item) => {
                item.completed =
                    item.id === action.payload ? true : item.completed;
                return item;
            });
        },
    },
});

export const { addItem, deleteItem, completed } = todoSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getStore = (state: RootState) => state.todo;

export default todoSlice.reducer;
