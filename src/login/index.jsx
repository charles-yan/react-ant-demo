import React from 'react'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom'
import "./login.css"
import axios from "../api/axios"
import Jwt from '../api/jwt'
import { useDispatch } from 'react-redux'
import { activeCreator as ac } from "../store/modules/authUser/index"
import store from "../store/index"
const Login = props => {
    const dispatch = useDispatch();
    dispatch(ac.loadDataSyncSaga());
    let user = store.getState();
    let user_id = user.getIn(["useReducer", "id"]);
    console.log("login_user_id",user_id);
    if (localStorage.getItem("jwt_token") && user_id) {
        return <Redirect to='/' />
    };
  
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        const { username, password } = values;
        //提交
        axios.post("http://dev.makings.link/api/admin/login", { password, username }).then(res => {
            console.log("返回什么", res);
            if (res.data.access_token) {
                message.success("登录成功");
                Jwt.setToken(res.data.access_token);
                props.history.replace('/');
            } else {
                message.error(res.data.msg);
            }
        })
    };
    return (
        <div className="login">
            <section className="login-content">
                <h2>欢迎登陆</h2>
                <Form className="login-form" onFinish={onFinish}>
                    <Form.Item
                        name="username"
                        rules={[
                            { required: true, whitespace: true, message: '请输入用户名！' },
                            { min: 4, message: '不能少于4位' },
                            { max: 12, message: '不能大于12位' },
                            { pattern: /^[a-zA-Z0-9]+$/, message: '用户名必须是英文、数字和下划线组成' }
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入密码!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" className="login-form-button">登录</Button>
                    </Form.Item>
                </Form>
            </section>
        </div>
    )
}

export default Login