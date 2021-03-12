import React, { useState,useCallback,useEffect,useReducer } from 'react';
import { Layout, Menu } from 'antd';
import "../index.css";
import {MenuUnfoldOutlined,MenuFoldOutlined,UserOutlined} from '@ant-design/icons';
const { Header, Sider, Content, Footer } = Layout;
const larr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const AdminUi= (props) =>{
    const [collapsed, setCollapsed] = useState(false)
    const [arr] = useState(larr);
    const toggle = useCallback((type)=>{
        return () => {
        // setCollapsed(!collapsed)
    }
    },[]);
    const siderStyle = {
        overflow: 'auto',
        height: '100vh',
        position: 'relative',
        left: 0,
      };
    return (
        <Layout style={{ minHeight: '100vh' }} id="components-layout-demo-custom-trigger">
          <Sider style={siderStyle} trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              {
                arr.map(item => {
                  return <Menu.Item key={item} icon={<UserOutlined />}>
                    nav {item}
                  </Menu.Item>
                })
              }
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick:toggle,
              })}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              Content
                  </Content>
            <Footer style={{ textAlign: 'center' }}>©2021 New Project</Footer>
          </Layout>
        </Layout>
      )
}
export default AdminUi