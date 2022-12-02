import { Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import Layout from './pages/Components/Layout'
import Project from './pages/Project'
import KanBan from "./pages/Components/KanBan";
import Epic from "./pages/Components/Epic";
import './App.css'
function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Layout />}>
                <Route path="/project" element={<Project />}></Route>
                <Route path="/project/:id/kanban" element={<KanBan />}></Route>
                <Route path="/project/:id/epic" element={<Epic />}></Route>
            </Route>
        </Routes>
    )
}

export default App

