import React from 'react'
import ProjectTable from "../Components/ProjectTable";
import Projectmodal from "../Components/Projectmodal";
import { Button, Input, Select } from 'antd'

export default function Project() {
    //select选择器的回调函数
    const handleChange = (value) => {
        console.log(`selected ${value}`)
    }
    //input输入框的回调函数
    const Change = (value) => {
        console.log(`input ${value}`)
    }
    return (
        <div className="project_body_wrap">
            <div className="project_title_wrap">
                <h2>项目列表</h2>

                <Projectmodal />

                <Button type="link" block className="project_button_wrap">
                    创建项目
                </Button>

            </div>
            <div className="project_input_wrap">
                <Input
                    onChange={Change}
                    placeholder="请输入要查询的项目"
                    style={{ width: 204, marginLeft: 20,marginRight:5 }}
                />
                <Select
                    onChange={handleChange}
                    defaultValue="负责人"
                    style={{
                        width: 120
                    }}
                    options={[
                        {
                            value: '负责人',
                            label: '负责人'
                        },
                        {
                            value: '李硕',
                            label: '李硕'
                        },
                        {
                            value: '高修文',
                            label: '高修文'
                        },
                        {
                            value: '林景',
                            label: '林景'
                        }
                    ]}
                />
            </div>
            <ProjectTable />
        </div>
    )
}
