import Task from "./Task"

export default function TaskList({tasks, toggleComplited, removeTask}) {
    return (
        <div className="taskList">
            {tasks.map(task => 
                <Task
                    key={task.id}
                    description={task.description}
                    isComplited={task.isComplited}
                    toggleComplited={() => toggleComplited(task.id)}
                    removeTask={() => removeTask(task.id)}
                />
            )}
        </div>
    )
}