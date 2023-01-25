import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React from 'react';

import UserTable from '../components/Employee';

const { Header, Content, Footer, Sider } = Layout;
const Dashboard = () => {
  return (
    <>
      <UserTable />
    </>
  );
};
export default Dashboard;
