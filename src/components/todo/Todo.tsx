import React, { useState, useEffect } from 'react';
    import './todo.css';
    
    type ITaskProperty = {
        title: string,
        completed: boolean,
        id: number
    }
    // interface ITask  {
    //     task: [ITaskProperty]
    // }
    interface IProps {
        task: ITaskProperty,
        index?: any
        completeTask: (task: number) => void 
        removeTask: (task: number) => void 
    }

    interface IAddProps {
        addTask: (title: string) => void
    }
    
    function Task({ task, index, completeTask, removeTask }: IProps) {
        return (
            <div
                className="task"
                style={{ textDecoration: task.completed ? "line-through" : "" }}
            >
                {task.title}
                <button style={{ background: "red" }} onClick={() => removeTask(index)}>x</button>
                <button onClick={() => completeTask(index)}>Complete</button>
            </div>
        );
    }
    function CreateTask({ addTask }: IAddProps) {
        const [value, setValue] = useState("");
    
        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            if (!value) return;
            
            addTask(value);
            setValue("");
        }
        
        return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input"
                    value={value}
                    placeholder="Add a new task"
                    onChange={e => setValue(e.target.value)}
                />
            </form>
        );
    }
    function Todo() {
        const [tasks, setTasks] = useState([
            {
                id: 8838,
                title: "Grab some Pizza",
                completed: true
            },
            {
                id: 8844,
                title: "Do your workout",
                completed: true
            },
            {
                id: 8832,
                title: "Hangout with friends",
                completed: false
            }
        ]);
        const [tasksRemaining, setTasksRemaining] = useState(0);

        useEffect(() => { setTasksRemaining(tasks.filter(task => !task.completed).length) }, [tasks]);

        const addTask: (title: string) => void  = title => {
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
library 
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
                <div className="create-task" >
                    <CreateTask addTask={addTask} />
                </div>
            </div>
        );
    }
    
    export default Todo;