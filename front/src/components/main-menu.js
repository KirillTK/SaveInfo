import React, { useState } from 'react';
import { Icon, Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../auth/selectors';

const { Sider } = Layout;

const MainMenu = () => {
  const [isCollapsed, setCollapse] = useState(true);
  const user = useSelector(selectUser);

  return (user ? (<Sider collapsible collapsed={isCollapsed} onCollapse={() => setCollapse(!isCollapsed)} theme='light'>
    <div className="username"/>
    <Menu defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1">
        <Icon type="history"/>
        <span>History</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="pie-chart"/>
        <span>Option 1</span>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="pie-chart"/>
        <span>Option 1</span>
      </Menu.Item>
    </Menu>
  </Sider>) : null);
};

export default withRouter(MainMenu);