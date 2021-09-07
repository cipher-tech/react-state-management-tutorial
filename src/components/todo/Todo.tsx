import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getStore } from "../../store/redux/TodoReduce";
import CreateTask from "../createTask/CreateTask";
import Task from "../taskCard/TaskCard";
import "./todo.css";

type ITaskProperty = {
    title: string;
    completed: boolean;
    id: number;
};

function Todo() {
    const store = useSelector(getStore)
    const [tasks, setTasks] = useState([
        {
            id: 8838,
            title: "Grab some Pizza",
            completed: true,
        },
        {
            id: 8844,
            title: "Do your workout",
            completed: true,
        },
        {
            id: 8832,
            title: "Hangout with friends",
            completed: false,
        },
    ]);
    const [tasksRemaining, setTasksRemaining] = useState(0);

    useEffect(() => {
        setTasksRemaining(tasks.filter((task) => !task.completed).length);
    }, [tasks]);

    const addTask: (title: string) => void = (title) => {
        const newTasks = [...tasks, { id: 838383, title, completed: false }];
        setTasks(newTasks);
    };

    const completeTask = (index: number) => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };
    const removeTask = (index: number) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };
    return (
        <div className="todo-container">
            <div className="header">TODO - ITEMS</div>
            <div className="header">Pending tasks ({tasksRemaining})</div>

            <div className="tasks">
                {tasks.map((task: ITaskProperty, index) => (
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
