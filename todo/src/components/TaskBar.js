import './TaskBar.css';

export default function TaskBar({ tasks }) {
    return (
        <>
        {tasks.map((task) => (
            <div key={task.id} className="task-bar">
                {task.title}
            </div>
        ))}
</>
    );
}