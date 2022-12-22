
import React,{Fragment,useEffect  } from "react";
import { Routes, Route } from 'react-router-dom'
import {  notification} from 'antd';
import Login from './pages/login'
import Register from './pages/register'
import Layout from './pages/Components/Layout'
import Project from './pages/Project'
import KanBan from "./pages/Components/KanBan";
import Epic from "./pages/Components/Epic";
import event from "./util/events";
import './App.css'
function App() {
    const [api, contextHolder] = notification.useNotification();
    const openNotification = (type,msg) => {
        api[type]({
        message: msg,
        
      });
    };
    useEffect(()=>{
        // event.on('global_success',(msg)=>{
        //     openNotification('success',msg)
        //  })
     event.on('global_error',(msg)=>{
        
        openNotification('error',msg)
     })
    })
    return (
        
       <Fragment>
          {contextHolder}
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<Layout />}>
                    <Route path="/project" element={<Project />}></Route>
                    <Route path="/project/:id/kanban" element={<KanBan />}></Route>
                    <Route path="/project/:id/epic" element={<Epic />}></Route>
                </Route>
            </Routes>
       </Fragment>

    )
}

export default App

