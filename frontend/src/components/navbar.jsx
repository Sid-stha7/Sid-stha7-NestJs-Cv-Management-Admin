import {
  MailOutlined,
  SettingOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import { useState } from 'react';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Dashboard ', 'sub1', <MailOutlined />, [
    getItem('Add Resume', '1'),
    getItem('Book Mark ', '2'),
    getItem('Upload Resume', '3'),
  ]),
  //   getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
  //     getItem('Option 5', '5'),
  //     getItem('Option 6', '6'),
  //     getItem('Submenu', 'sub3', null, [
  //       getItem('Option 7', '7'),
  //       getItem('Option 8', '8'),
  //     ]),
  //   ]),
  //   getItem('Navigation Three', 'sub4', <SettingOutlined />, [
  //     getItem('Option 9', '9'),
  //     getItem('Option 10', '10'),
  //     getItem('Option 11', '11'),
  //     getItem('Option 12', '12'),
  //   ]),
];
const Navbar = () => {
  const [theme, setTheme] = useState('dark');
  const [current, setCurrent] = useState('1');
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
      <nav
        id="sidebarMenu"
        class="collapse d-lg-block sidebar collapse bg-dark"
      >
        <div class="position-sticky">
          <div class="list-group list-group-flush mx-3 mt-4">
            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
            >
              <i class="fas fa-tachometer-alt fa-fw me-3"></i>
              <span className="text-danger">Admin dashboard</span>
            </a>
            <a
              href="/"
              class="list-group-item list-group-item-action py-2 ripple active"
            >
              <i class="fas fa-chart-area fa-fw me-3"></i>
              <span>Main</span>
            </a>
            <a
              href="/addResume"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fas fa-lock fa-fw me-3"></i>
              <span>Add Employee</span>
            </a>

            <a
              href="/UpdateResume"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fas fa-lock fa-fw me-3"></i>
              <span>Update Employee</span>
            </a>

            <a
              href="/uploadResume"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fas fa-chart-line fa-fw me-3"></i>
              <span>Upload Cv</span>
            </a>
            <a
              href="/bookmarked"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fas fa-chart-pie fa-fw me-3"></i>
              <span>BookMarked List</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
