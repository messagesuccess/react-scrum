import React from 'react'
import { Button, Popover,Divider  } from 'antd'
const crewContent = (
    <div>
        <p>李硕</p>
        <Divider/>
        <p>高修文</p>
        <Divider/>
        <p>林景</p>
    </div>
)
export default function UserPopover() {
    return (
        <div>
            <Popover content={crewContent} title="组员列表" trigger="hover">
                <Button>组员</Button>
            </Popover>
        </div>
    )
}
