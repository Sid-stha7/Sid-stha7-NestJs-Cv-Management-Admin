import { Button, Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Contact',
    dataIndex: 'contact',
    key: 'contact',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },

  {
    title: 'CVFile',
    dataIndex: 'cvFile',
    key: 'cvFile',
  },
  {
    title: 'BookMark',
    key: 'bookmark',
    dataIndex: 'bookmark',
    render: (_, record) => <>{record.bookmark.toString()}</>,
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Update </a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const Bookmarked = () => {
  const [users, setUsers] = useState([]);
  console.log('asdsadasd');
  async function getUser() {
    await axios
      .get('http://localhost:5000/reports/bookmark')
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Table columns={columns} dataSource={users} />
    </>
  );
};
export default Bookmarked;
