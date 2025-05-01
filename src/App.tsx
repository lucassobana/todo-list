import { Header } from "./components/Header";
import { Task } from "./components/Task";

import './global.css'

export function App() {
    return (
        <main>
            <Header />
            <section>
                <Task/>
            </section>
        </main>
    )
}