type ITaskProperty = {
    title: string;
    completed: boolean;
    id: number;
};
interface IProps {
    task: ITaskProperty;
    index?: any;
    completeTask: (task: number) => void;
    removeTask: (task: number) => void;
}

export default function Task({
    task,
    index,
    completeTask,
    removeTask,
}: IProps) {
    return (
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            <span>{task.title}</span>
            <div>
                <button
                    style={{ background: "red" }}
                    onClick={() => removeTask(task.id)}
                >
                    x
                </button>
                <button onClick={() => completeTask(task.id)}>Complete</button>
            </div>
        </div>
    );
}
