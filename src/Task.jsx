export default function Task({description, isComplited, toggleComplited, removeTask}) {
    return (
        <div className="task">
            <input
                type="checkbox"
                checked={isComplited}
                onChange={toggleComplited}
            />
            <div className="task_description">{description}</div>
            <button
                onClick={removeTask}>
                    Remove
            </button>
        </div>
    )
}