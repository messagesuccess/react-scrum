import React from 'react'
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
    getItem('任务组', 'task'),
   
]
export default function LeftMenu() {
    const onClick = (e) => {
        console.log('click', e)
    }
    return (
        <div className="left_menu_body">
            <Menu
                onClick={onClick}
                style={{
                    width: 160
                }}
                mode="vertical"
                items={items}
            />
        </div>
    )
}
