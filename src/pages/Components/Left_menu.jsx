
import React,{useState,useEffect} from 'react'
import {  useLocation,useNavigate} from "react-router-dom";
import { Menu } from 'antd'
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type
    }
}
const items = [
    getItem('看板', 'kanban'),
    getItem('任务组', 'epic'),
   
]
export default function LeftMenu() {
    const [active,setActive]=useState('')
    const location = useLocation()
    const path = location.pathname.split('/')
    const navigate =useNavigate()
    const onClick = (e) => {
        navigate(`/project/1/${e.key}`)
    }
    useEffect(()=>{
     console.log(111);
        setActive(path[3])
       
    },[path])
    return (
        <div className="left_menu_body">
            <Menu
           selectedKeys={active}
          
            onClick={onClick}
            style={{
               
                textAlign:'center',
                // color:'rgb(38, 132, 255)'
                }}
            mode="vertical"
            items={items}
           
            />
        </div>
    )
}
