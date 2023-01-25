import axios from 'axios';

import { Alert, Space } from 'antd';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// const Resume = () => {
//   const [resume, setResume] = useState([]);
//   async function AddResume() {
//     await axios
//       .post('http://localhost:5000/reports')
//       .then((res) => {
//         console.log('Succefully Added');
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// };
function AddResume() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState(0);
  const [cvFile, setCvFile] = useState('');

  // let handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     console.log(name);
  //     await fetch('http://localhost:5000/reports', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         name: name,
  //         address: address,
  //         contact: contact,
  //         // cvFile: cvFile,
  //       }),
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const postData = (event) => {
  //   event.preventDefault();
  //   const data = {
  //     name: name,
  //     address: address,
  //     contact: contact,
  //     cvFile: cvFile,
  //   };
  //   console.log(data);
  //   axios
  //     .post(`http://localhost:5000/reports`, data)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const postData = async (event) => {
    <Alert
      message="Success Tips"
      description="Detailed description and advice about successful copywriting."
      type="success"
      showIcon
    />;
    event.preventDefault();
    const data = {
      name: name,
      address: address,
      contact: parseInt(contact),
      cvFile: cvFile,
      // userId: 2,
    };
    console.log(data.contact);
    await axios
      .post('http://localhost:5000/reports', data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <h1 className="d-flex justify-content-center text-danger mt-50">
        Add Resume
      </h1>
      <div className="form-group d-flex justify-content-center ">
        <form onSubmit={postData}>
          <input
            className="form-control mt-20"
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            value={address}
            placeholder="address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            value={cvFile}
            placeholder="cvFile"
            onChange={(e) => setCvFile(e.target.value)}
          />
          <input
            className="form-control"
            type="number"
            value={contact}
            placeholder="Mobile Number"
            onChange={(e) => setContact(e.target.value)}
          />

          <button className="btn btn-primary" type="submit">
            Create
          </button>
        </form>
      </div>
    </>
  );
}

export default AddResume;
