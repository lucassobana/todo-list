import { FormEvent, useState } from 'react';
import styles from './Task.module.css'
import plus from '../assets/plus.svg'
import { List } from './List';

export function Task() {

    const [tasks, setTasks] = useState<{ content: string, isChecked: boolean }[]>([]);
    const [newTask, setNewTask] = useState('');

    function handleCreateTask(event: FormEvent) {
        event.preventDefault();

        const newTaskObj = { content: newTask, isChecked: false };
        setTasks([...tasks, newTaskObj]);
        setNewTask('');
    }

    function deleteTask(taskToDelete: string) {
        const tasksWithoutDeleteOne = tasks.filter(task => task.content !== taskToDelete);
        setTasks(tasksWithoutDeleteOne);
    }

    function toggleTask(taskToToggle: string) {
        const updatedTasks = tasks.map(task => 
            task.content === taskToToggle ? { ...task, isChecked: !task.isChecked } : task
        );
        setTasks(updatedTasks);
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleCreateTask} className={styles.form}>
                <textarea
                    className={styles.text}
                    name="task"
                    placeholder="Adicione uma nova tarefa"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button type="submit" className={styles.button}>
                    Criar
                    <img src={plus} alt="" />
                </button>
            </form>

            <div className={styles.taskList}>
                {tasks.map(task => {
                    return (
                        <List
                            key={task.content}
                            content={task.content}
                            onDeleteTask={deleteTask}
                            onToggleTask={toggleTask}
                            isChecked={task.isChecked}  
                        />
                    );
                })}
            </div>
        </div>
    );
}
