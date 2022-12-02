import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import "./login.scss";
export default function Login() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className='login'>
     
<Form
     style={{marginTop:175}}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    
    >
      <Form.Item
        wrapperCol={{
          offset: 9,
          span: 6,
        }}
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
         wrapperCol={{
          offset: 9,
          span: 6,
        }}
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码',
            
          },{
            pattern:/admin/,

          },{
            min:8,
            max:12,
            message:'请重新输入'
          }
         
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="请输入密码"
        />
      </Form.Item>
      <Form.Item
         wrapperCol={{
          offset: 9,
          span: 6,
        }}>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="javascript">
          忘记密码？
        </a>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 9,
          span: 6,
        }}>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
        Or <a href="javascript">注册</a>
      </Form.Item>
    </Form>
    </div>
  )
}