import { Header } from "./components/Header";
import { Task } from "./components/Task";

import './global.css'
import styles from './App.module.css'

export function App() {
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