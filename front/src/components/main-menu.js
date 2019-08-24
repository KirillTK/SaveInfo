import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { selectUser } from '../auth/selectors';
import {Avatar, Dropdown, Menu, PageHeader} from 'antd';
import {signOut} from 'auth/actions';

const styles= ({
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 24px',
    minHeight: '60px',
    maxHeight: '60px',
  },
  avatar: {
    marginBottom: 10,
  }
});

const MainMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  const onSignOut = () => dispatch(signOut());

  const renderMenu = () => (<Menu>
    <Menu.Item key="1">Profile</Menu.Item>
    <Menu.Item key="2" onClick={onSignOut}>Sign out</Menu.Item>
  </Menu>);

  return (<PageHeader title='Save Info' style={styles.headerContainer}>
    {user && <Dropdown overlay={renderMenu()}>
      <Avatar shape="square" size="large" icon="user" style={styles.avatar}>
      </Avatar>
    </Dropdown>}
  </PageHeader>);
};

export default MainMenu;
