import React, { Component } from 'react';
import axios from 'axios';

class ViewResume extends Component {
  state = {
    listOfFiles: [],
  };

  componentDidMount = () => {
    axios.get('http://localhost:3000').then((res) => {
      console.log(res.data);
      this.setState({
        listOfFiles: res.data.result,
      });
      console.log(this.state.listOfFiles);
    });
  };

  render() {
    return (
      <div>
        {this.state.listOfFiles.map((file) => (
          <div>
            <h4>{file.name}</h4>
            <a href={`http://localhost:3000/${file.file}`}>See file</a>
          </div>
        ))}
      </div>
    );
  }
}

export default ViewResume;
