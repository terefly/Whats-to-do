import { useState, useEffect } from "react"
import TaskList from "./TaskList"
import { nanoid } from "nanoid"

export default function App() {
    let [tasks, setTasks] = useState([])
    let [newTask, setNewTask] = useState(
        {
            id: nanoid(),
            description: '',
            isComplited: false,
        }
    )



    useEffect (() => {
        if (JSON.parse(localStorage.getItem("tasks")).length && !tasks.length)
            setTasks(JSON.parse(localStorage.getItem("tasks")))
    }, [])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])



    function handleChange(event) {
        setNewTask(prevState => ({
            ...prevState,
            description: event.target.value, 
        }))
    }

    function hanldeClick() {
        if (!Boolean(newTask.description)) return
        const newTasks = [...tasks, newTask]
        setTasks(newTasks)
        setNewTask(
            {
                id: nanoid(),
                description: '',
                isComplited: false,
            }
        )
    }

    function toggleComplited(id) {
        const tasksChanged = tasks.map(task => {
            return task.id === id ?
                {...task, isComplited: !task.isComplited} : task
        })
        setTasks(tasksChanged)
    }

    function clearComplited() {
        const tasksChanged = tasks.filter(task => !task.isComplited)
        setTasks(tasksChanged)
    }

    function removeTask(id) {
        const tasksChanged = tasks.filter(task => !(task.id === id))
        setTasks(tasksChanged)
    }



    return (
        <main className="main">
            <div className="command-pannel">
                <input className="command-pannel_input"
                    value={newTask.description}
                    onChange={handleChange}
                    placeholder="Enter your task description"
                />
                <div className="command-pannel_btns-container">
                    <button 
                        className="command-pannel_clear-btn"
                        onClick={clearComplited}>
                            Clear complited
                    </button>
                    <button
                        className="command-pannel_add-btn"
                        onClick={hanldeClick}>
                            Add
                    </button>
                </div>
                
            </div>
            <TaskList
                tasks={tasks}
                toggleComplited={toggleComplited}
                removeTask={removeTask}
            />
        </main>
    )
}