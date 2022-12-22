import React, { useState, useRef } from 'react'
import { Button, Modal, Space, Form, Input, Select } from 'antd'
const { Option } = Select
export default function Projectmodal() {
  const form = useRef()
  const [open, setOpen] = useState(false)
  const showModal = () => {
    setOpen(true)
  }
  //获取表单的值
  const hideModal = () => {
    setOpen(false)
   
    form.current.validateFields().then(value=> console.log(value))

   

  }
  return (
    <div className="project_modal_wrap">
      <Space>
        <Button type="link" onClick={showModal}>
          创建项目
        </Button>
        <Modal title="创建项目" open={open} onOk={hideModal} onCancel={hideModal} okText="确认" cancelText="取消">
          <Form
            ref={form}
            name="control-ref"
            wrapperCol={{
              span: 21
            }}
            labelCol={{
              span: 5
            }}
          >
            <Form.Item
              name="name"
              label="项目名称"
              rules={[
                {
                  required: true,
                  message:'这是必填项'
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="branch"
              label="所在部门"
              rules={[
                {
                  required: true,
                  message:'这是必填项'
                }
              ]}
            >
              <Select placeholder="请选择所属部门" allowClear>
                <Option value="male">研发</Option>
                <Option value="female">管理</Option>
                <Option value="other">后端</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="principal"
              label="负责人"
              rules={[
                {
                  required: true,
                  message:'这是必填项'
                }
              ]}
            >
              <Select placeholder="请选择负责人" allowClear>
                <Option value="male">李硕</Option>
                <Option value="female">林景</Option>
                <Option value="other">李逍遥</Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </Space>
    </div>
  )
}
