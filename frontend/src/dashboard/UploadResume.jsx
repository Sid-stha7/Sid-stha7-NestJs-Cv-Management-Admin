import React, { Component } from 'react';
import axios from 'axios';
class UploadResume extends Component {
  // Maintain a state
  state = {
    id: '',
    selectedFile: null,
    filename: null,
  };

  handleChange = (event) => {
    this.setState({
      name: document.getElementById('id').value,
    });
  };

  fileSelectedHandler = (event) => {
    let file = event.target.files[0].name;
    this.setState({
      selectedFile: event.target.files[0],
      filename: document.getElementById('file').value,
    });
    console.log(file);
  };

  fileUploadHandler = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append('id', this.state.name);
    formData.append('file', this.state.selectedFile);

    const config = {
      headers: { 'content-type': 'multipart/form-data' },
    };

    axios
      .post('http://localhost:5000/reports/file', formData, config)
      .then((res) => {
        console.log(res.data);
        console.log(this.state.filename);
        console.log(formData);
      });
  };
  render() {
    return (
      <div class="d-flex  justify-content-center">
        <form encType="multipart/form">
          <input
            class="form-control"
            type="nymber"
            name="id"
            id="id"
            placeholder="id"
            onChange={this.handleChange}
          />
          <br />

          <br />
          <input
            class="form-control"
            type="file"
            name="file"
            id="file"
            placeholder="Upload your file"
            onChange={this.fileSelectedHandler}
          />
          <br />
          <button
            class="btn btn-primary "
            type="submit"
            onClick={this.fileUploadHandler}
          >
            Add Products
          </button>
        </form>
      </div>
    );
  }
}

export default UploadResume;

// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';
// import { useState } from 'react';

// function UploadResume() {
//   const [id, setId] = useState(0);
//   const [file, setFile] = useState();

//   // const handleFormSubmit = async (e) => {
//   //   // prevent the page from reloading
//   //   e.preventDefault();

//   //   // construct form data
//   //   const formData = new FormData(e.currentTarget);

//   //   const files = e.currentTarget.files;
//   //   formData.append('files', files);
//   //   formData.append('id', id);
//   //   // make a POST request with Axios
//   //   const res = await axios.post(
//   //     'http://localhost:3000/reports/file',
//   //     formData,
//   //     {
//   //       headers: {
//   //         'Content-Type': 'multipart/form-data',
//   //       },
//   //     },
//   //   );

//   //   console.log(res);
//   // };
//   const form = document.getElementById('form');

//   form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('first-name', form[0].value);

//     formData.append('cv', form[1].files[0]);

//     axios
//       .post('http://localhost:3000/reports/file', formData)
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));
//   });

//   return (
//     <>
//       <div className="d-flex justify-content-left"></div>
//       <h1 className="d-flex justify-content-center text-danger mt-50">
//         Update Resume
//       </h1>
//       <div className="d-flex justify-content-center mt-50">
//         <form id="form">
//           <input type="number" name="id" />

//           <input type="file" name="cv" accept="pdf/*" />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default UploadResume;
