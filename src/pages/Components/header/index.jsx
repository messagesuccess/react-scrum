import React from 'react'
import { AntDesignOutlined, DownOutlined } from '@ant-design/icons'
import { Dropdown, Space,Button } from 'antd'
import ProjectPopover from './ProjectPopover'
import UserPopover from './UserPopover'
const items = [
    {
        label: <a href>退出登录</a>,
        key: '0'
    }
]
export default function Header() {
    return (
        <div className="header_wrap_body">
           
                <div className='header_wrap_left'>
                    <Button
                        className="header_button"
                        style={{ border: 'none', backgroundColor: 'white' }}
                    >
                        <AntDesignOutlined
                            style={{ fontSize: 30, color: 'rgb(38, 132, 255)' }}
                        />
                        <h2>Jira Software</h2>
                    </Button>
                    <div className="header_wrap_crew">
                        <ProjectPopover />
                        <UserPopover />
                    </div>
                </div>
          
            <div className="header_wrap_logout">
                <Dropdown
                    menu={{
                        items
                    }}
                    trigger={['click']}
                >

                    <a onClick={(e) => e.preventDefault()} href='javascript'>
                        <Space style={{ color: 'rgb(38, 132, 255)' }}>
                            你好,123456
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
        </div>
    )
}
