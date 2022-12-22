import React from 'react'
import { Link } from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import axios from "../../util/http.js";
export default function Login() {
  //登录表单的回调
  const onFinish = (values) => {
    console.log('Received values of form: ', )
    axios.post('/test/register',values).then((res)=>{
      console.log(res);
    })
  }
  return (
    <div className="login_body_wrap register_body_wrap">
      <div className="login_form_div_wrap register_form_div_wrap">
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
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 19
            }}
            name="verify_password"
            rules={[
              {
                required: true,
                message: '请确认你的密码'
              },
              {
                // pattern: /admin/,
                min: 4,
                max: 12,
                message: '请重新输入'
              }
            ]}
          >
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="请确认你的密码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button register-form-button">
              授权并注册
            </Button>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 19
            }}
          >
            <Link to='/login'style={{ marginLeft: 40 }} className="register-form-forgot">
              微信扫码注册
            </Link>
            <Link to="/login" className="register-form_link" style={{ marginLeft: 50 }}>
              已有账号,请登录
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>

          )}

