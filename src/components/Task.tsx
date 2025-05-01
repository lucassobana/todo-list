import styles from './Task.module.css'

export function Task() {
    return(
        <div className={styles.container}>
            <form className={styles.form}>
                <textarea className={styles.text}
                    name="task"
                    placeholder="Adicione uma nova tarefa"
                />
            </form>
        </div>
    );
}