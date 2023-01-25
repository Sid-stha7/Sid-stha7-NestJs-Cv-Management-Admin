import {
  Button,
  Space,
  Table,
  Tag,
  Popconfirm,
  Typography,
  initialValues,
} from 'antd';
import { Checkbox, Form, Input } from 'antd';
import { Bookmark, BookmarkOff } from 'tabler-icons-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import UpdateResume from '../dashboard/UpdateResume';
import { Document, Page, pdfjs } from 'react-pdf';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
// pdfjs.GlobalWorkerOptions.workerSrc =
//   'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;})';

var img1;
const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [record1, setRecord1] = useState({});
  var [recordEdit, setRecordEdit] = useState({});

  //update
  const [id, setId] = useState(0);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState(0);
  const [bookmark, setBookmark] = useState(1);

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const showModal = (record) => {
    setIsModalOpen(true);
    console.log(record);
    setRecord1(record);
  };

  const showModalEdit = (record) => {
    setIsModalOpenEdit(true);
    console.log(record);
    setRecordEdit(record);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleOkEdit = () => {
    setIsModalOpenEdit(false);
    setIsModalOpenEdit(false);
    // setRecordEdit = {};
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCancelEdit = () => {
    setIsModalOpen(false);
    setIsModalOpenEdit(false);
    // setRecordEdit = {};
  };

  const bookmarkHanlde = async (record) => {
    console.log(record);
    let bookmarkParsed;
    if (record.bookmark === true) {
      bookmarkParsed = false;
      const data = {
        bookmark: bookmarkParsed,
      };
      await axios
        .patch(`http://localhost:5000/reports/${record.id}`, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      getUser();
      handleCancel();
    } else {
      bookmarkParsed = true;
      const data = {
        bookmark: bookmarkParsed,
      };
      await axios
        .patch(`http://localhost:5000/reports/${record.id}`, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      getUser();
      handleCancel();
    }
  };

  function reset() {
    document.getElementById('myForm').reset();
  }
  async function getUser() {
    await axios
      .get('http://localhost:5000/reports')
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:5000/reports/${id}}`)
      .then((res) => {
        console.log(res.data);
        getUser();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postData = async (e) => {
    e.preventDefault();
    let bookmarkParsed;
    if (bookmark === 'true') {
      bookmarkParsed = true;
    } else {
      bookmarkParsed = false;
    }
    const data = {
      name: name,
      address: address,
      contact: parseInt(contact),
      bookmark: bookmarkParsed,
      // userId: 2,
    };
    console.log(data.contact);
    await axios
      .patch(`http://localhost:5000/reports/${recordEdit.id}`, data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    getUser();
    handleCancel();
  };

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
      render: (_, record) => {
        // console.log(record);
        return (
          <div className="container  justify-content">
            <div>
              <h2 className="text-primary">{record.name}</h2>
            </div>

            <div className="d-flex mt-2">
              <p>Contact: {record.contact}</p>
            </div>
            <div className="d-flex">
              <p>Address: {record.address}</p>
            </div>
            <div className="d-flex mt-2 gap-3">
              <Button type="primary" onClick={() => showModal(record)}>
                View CV
              </Button>

              <Popconfirm
                title="Sure to delete?"
                onConfirm={() => handleDelete(record.id)}
              >
                <Button className="btn btn-danger">Delete</Button>
              </Popconfirm>
              <Button
                className="btn btn-warning"
                type="primary"
                onClick={() => showModalEdit(record)}
              >
                Edit
              </Button>

              {record.bookmark === true ? (
                <Bookmark
                  size={32}
                  strokeWidth={3}
                  color={'#bf4051'}
                  onClick={() => bookmarkHanlde(record)}
                />
              ) : (
                <BookmarkOff
                  size={32}
                  strokeWidth={3}
                  color={'#bf4051'}
                  onClick={() => bookmarkHanlde(record)}
                />
              )}
            </div>
          </div>
        );
      },
    },
    // {
    //   title: 'Contact',
    //   dataIndex: 'contact',
    //   key: 'contact',
    // },
    // {
    //   title: 'Address',
    //   dataIndex: 'address',
    //   key: 'address',
    // },

    // {
    //   title: 'BookMark',
    //   key: 'bookmark',
    //   dataIndex: 'bookmark',
    //   render: (_, record) => {
    //     if (record.bookmark === true) {
    //       return (
    //         <Bookmark
    //           size={32}
    //           strokeWidth={3}
    //           color={'#bf4051'}
    //           onClick={() => bookmarkHanlde(record)}
    //         />
    //       );
    //     } else {
    //       return (
    //         <BookmarkOff
    //           size={32}
    //           strokeWidth={3}
    //           color={'#bf4051'}
    //           onClick={() => bookmarkHanlde(record)}
    //         />
    //       );
    //     }
    //   },
    // },

    // {
    //   title: 'CV',
    //   key: 'bookmark',
    //   dataIndex: 'bookmark',
    //   render: (_, record) => (
    //     <>
    //       <iframe
    //         src={`http://localhost:5000/reports/profile-image/${record.cvFile}`}
    //         // frameBorder="0"
    //         // scrolling="auto"
    //         height="800px"
    //         width="800px"
    //         title={record1?.id}
    //       ></iframe>
    //     </>
    //   ),
    // },
    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (_, record) => {
    //     // console.log(record);
    //     return (
    //       <div className="container p-5 d-flex justify-content-between">
    //         {/* <Button type="primary" onClick={() => showModal(record)}>
    //           View CV
    //         </Button> */}

    //         <Popconfirm
    //           title="Sure to delete?"
    //           onConfirm={() => handleDelete(record.id)}
    //         >
    //           <Button className="btn btn-danger">Delete</Button>
    //         </Popconfirm>

    //         <Button
    //           className="btn btn-warning"
    //           type="primary"
    //           onClick={() => showModalEdit(record)}
    //         >
    //           Edit
    //         </Button>
    //       </div>
    //     );
    //   },
    // },
  ];

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className=" row overflow-hidden    ">
      <div className="col-md-6 overflow-hidden position-relative">
        <Table columns={columns} dataSource={users} />
      </div>
      <div className="col-md-6 position-fixed " style={{ top: 0, right: 0 }}>
        <h2 className="text-danger">Name: {record1.name}</h2>
        <h2 className="text-warning">Id: {record1.id}</h2>

        <iframe
          style={{ width: '100%' }}
          src={`http://localhost:5000/reports/profile-image/${record1.cvFile}`}
          // frameBorder="0"
          // scrolling="auto"
          height="800px"
          width="800px"
          title={record1?.id}
        ></iframe>
      </div>

      {/* <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{record1?.id}</p>
        <iframe
          src={`http://localhost:5000/reports/profile-image/${record1.cvFile}`}
          // frameBorder="0"
          // scrolling="auto"
          height="800px"
          width="800px"
          title={record1?.id}
        ></iframe>
      </Modal> */}

      <Modal
        title="Basic Modal"
        open={isModalOpenEdit}
        onOk={(handleOkEdit, reset)}
        onCancel={handleCancelEdit}
      >
        <p>{recordEdit?.id}</p>
        <h1 className="d-flex justify-content-center text-danger mt-50">
          Update Resume
        </h1>
        {/* <div className="form-group d-flex justify-content-center mt-50">
          <form class="myForm" onSubmit={postData}>
            Id
            <input
              className="form-control"
              type="number"
              defaultValue={recordEdit.id}
              // value={recordEdit.id}
              placeholder="id"
              required
              name="id"
              onChange={(e) => setId(e.target.value)}
            />
            <button className="btn btn-lg btn-primary" type="submit">
              Update
            </button>
          </form>
        </div> */}

        <form onSubmit={postData}>
          <div class="form-group">
            <label for="name">Name:</label>
            <input
              type="name"
              class="form-control"
              id="name"
              defaultValue={recordEdit.name}
              placeholder="Enter name"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <div></div>
          </div>
          <div class="form-group">
            <label for="contact">Contact:</label>
            <input
              type="number"
              class="form-control"
              id="contact"
              defaultValue={recordEdit.contact}
              placeholder="Enter contact"
              name="contact"
              onChange={(e) => setContact(e.target.value)}
            />
          </div>

          <div class="form-group">
            <label for="bookmark">bookmark:</label>
            <input
              type="boolean"
              class="form-control"
              id="bookmark"
              defaultValue={recordEdit.bookmark}
              placeholder="Enter bookmark"
              name="bookmark"
              onChange={(e) => setBookmark(e.target.value)}
            />
          </div>

          <div class="form-group">
            <label for="address">Address:</label>
            <input
              type="name"
              class="form-control"
              id="address"
              defaultValue={recordEdit.address}
              placeholder="Enter address"
              name="address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};
export default UserTable;
