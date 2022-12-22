import React from 'react'
import { Input, Select, Button } from 'antd'
export default function SearchForm() {
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }
  //input输入框的回调函数
  const Change = (value) => {
    console.log(`input ${value}`)
  }
  return (
    <div className='kanban_title'>
      <h1>快递管理系统看板</h1>
      <div className="kanban_search_form">
        <Input onChange={Change} placeholder="任务名" style={{ width: 204, marginRight: 20 }} />
        <Select
          onChange={handleChange}
          defaultValue="经办人"
          style={{
            width: 120,
            marginRight: 20
          }}
          options={[
            {
              value: '经办人',
              label: '经办人'
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
        <Select
          onChange={handleChange}
          defaultValue="类型"
          style={{
            width: 120,
            marginRight: 20
          }}
          options={[
            {
              value: '类型',
              label: '类型'
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
        <Button>清除筛选器</Button>
      </div>
    </div>
  )
}
