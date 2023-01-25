import axios from 'axios';
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
function UpdateResume() {
  const [id, setId] = useState(0);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState(0);
  const [bookmark, setBookmark] = useState(1);

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
    event.preventDefault();
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
      .patch(`http://localhost:5000/reports/${id}`, data, {
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
        Update Resume
      </h1>
      <div className="form-group d-flex justify-content-center mt-50">
        <form onSubmit={postData}>
          Id
          <input
            className="form-control"
            type="number"
            value={id}
            placeholder="id"
            required
            onChange={(e) => setId(e.target.value)}
          />
          Name
          <input
            className="form-control"
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          Address
          <input
            className="form-control"
            type="text"
            value={address}
            placeholder="address"
            onChange={(e) => setAddress(e.target.value)}
          />
          Bookmark
          <input
            className="form-control"
            type="text"
            value={bookmark}
            placeholder="bookmark"
            onChange={(e) => setBookmark(e.target.value)}
          />
          Contact
          <input
            className="form-control "
            type="number"
            value={contact}
            placeholder="Mobile Number"
            onChange={(e) => setContact(e.target.value)}
          />
          <button className="btn btn-lg btn-primary" type="submit">
            Update
          </button>
        </form>
      </div>
    </>
  );
}

export default UpdateResume;
