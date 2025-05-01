import { Header } from "./components/Header";
import { Task } from "./components/Task";

import './global.css'
import styles from './App.module.css'

// export interface Task {
//     id: number
//     text: string
//     isChecked: boolean
// }

export function App() {
    // const [tasks, setTasks] = useState<Task[]>([])
    // const [newTask, setNewTask] = useState('');

    return (
        <main>
            <Header />
            <section>
                <div className={styles.container}>
                    <Task />
                </div>
            </section>
        </main>
    )
}