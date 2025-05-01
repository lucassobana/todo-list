import { Trash, CheckCircle, Circle } from 'phosphor-react';
import styles from './List.module.css'

interface ListProps {
    content: string;
    onDeleteTask: (taskToDelete: string) => void;
    onToggleTask: (task: string) => void;
    isChecked: boolean; 
}

export function List({ content, onDeleteTask, onToggleTask, isChecked }: ListProps) {

    function handleDeleteTask() {
        onDeleteTask(content);
    }

    function handleToggleTask() {
        onToggleTask(content);
    }

    return (
        <div className={styles.taskItem}>
            <button className={styles.checkbox} onClick={handleToggleTask}>
                {isChecked ? <CheckCircle weight='fill' className={styles.checkCircle} /> : <Circle />}
            </button>
            <p className={isChecked ? styles.checked : ''}>{content}</p>
            <button className={styles.deleteIcon} onClick={handleDeleteTask}>
                <Trash size={16} />
            </button>
        </div>
    );
}
