import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import {loginApi} from "../../util/api.js";
export default function Login() {
  const navigate = useNavigate()
  //登录表单的回调
  const onFinish = async(values) => {
    //axios请求验证后台登录
    const loginResult = await loginApi('POST','/login',values)
   if(loginResult.code===1){
    navigate('/project')
   }
   
  }
  return (
    <div className="login_body_wrap">
      <div className="login_form_div_wrap">
        <h1>scrum敏捷管理工具</h1>
        <Form
          style={{ marginTop: 20 }}
          name="normal_login"
          className="login_form_wrap"
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
        >
          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 19
            }}
            name="username"
            rules={[
              {
                required: true,
                message: '请填写你的用户名'
              }
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请填写用户名" />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 19
            }}
            name="password"
            rules={[
              {
                required: true,
                message: '请填写你的密码'
              },
              {
                // pattern: /admin/,
                min: 4,
                max: 12,
                message: '请重新输入'
              }
            ]}
          >
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="请输入密码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 0,
              span: 19
            }}
          >
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
          <Link to="/register" className="login-form-forgot">
            找回密码
          </Link>
          <Link to="/register" className="login-form_link">
            注册账号
          </Link>
        </Form>
      </div>
    </div>
  )
}
