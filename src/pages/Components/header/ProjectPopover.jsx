import React from 'react'
import { Button, Popover,Divider } from 'antd'
const projectContent = (
    <div>
        <p>物流管理系统</p>
        <Divider />
        <p>后台管理系统</p>
        <Divider  />
        <Button type="link" block style={{marginLeft:-60}}>
            创建项目
        </Button>
    </div>
)
export default function ProjectPopover() {
    return (
        <div>
            <Popover content={projectContent} title="收藏项目" trigger="hover">
                <Button className="projectButton">项目</Button>
            </Popover>
        </div>
    )
}
