import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, completed, deleteItem, getStore } from "../../store/redux/TodoReduce";
import { ITaskProperty } from "../../types";
import CreateTask from "../createTask/CreateTask";
import Task from "../taskCard/TaskCard";
import "./todo.css";

function Todo() {
    const {allItems} = useSelector(getStore)

    const dispatch = useDispatch()
    const [tasksRemaining, setTasksRemaining] = useState(0);
    
    useEffect(() => {
        setTasksRemaining(allItems.filter((task) => !task.completed).length);
    }, [allItems]);

    const addTask: (title: string) => void = (title) => {
        dispatch(addItem(title));
    };

    const completeTask = (index: number) => {
        dispatch(completed(index));
    };
    const removeTask = (index: number) => {
        dispatch(deleteItem(index));
    };
    return (
        <div className="todo-container">
            <div className="header">TODO - ITEMS</div>
            <div className="header">Pending allItems ({tasksRemaining})</div>

            <div className="tasks">
                {allItems.map((task: ITaskProperty, index) => (
                    <Task
                        task={task}
                        index={index}
                        key={index}
                        completeTask={completeTask}
                        removeTask={removeTask}
                    />
                ))}
            </div>
            <div className="create-task">
                <CreateTask addTask={addTask} />
            </div>
        </div>
    );
}

export default Todo;
