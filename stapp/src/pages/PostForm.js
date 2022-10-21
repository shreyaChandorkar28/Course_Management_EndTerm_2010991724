
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PostForm.css'
const postBtnStyle = {
  border: 'none',
  margin: 0,
  color: '#fff',
  fontWeight: 'bold',
  padding: '16px 20px',
  background: '#7D4C92 ',
  width: '417px',
}
const parentDiv = {
  align: 'center',
  margin: '0px auto auto auto',
  textAlign: 'center',
}

class PostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const image = this.getImage.value;
    localStorage.setItem('title', title);
    localStorage.setItem('message', message);
    localStorage.setItem('image', image);
    this.getTitle.value = '';
    this.getMessage.value = '';
    this.getImage.value = '';
  }
  render() {
    return (
      <div style={parentDiv}>
        <br />
        <h1>Post Your Images</h1>
        <h3>Create a new Post</h3>
        <form onSubmit={this.handleSubmit} className='formStyle'>
          <input className='inputFields' required type="text"
            placeholder="Enter Post Title"
            ref={(input) => this.getTitle = input}
          /><br /><br />
          <input className='inputFields' required type="text"
            placeholder="Paste your image url here"
            ref={(input) => this.getImage = input}
          /><br></br>
          <br></br>
          <textarea className='inputFields'
            required rows="5" cols="28"

            placeholder="Enter Comment"
            ref={(input) => this.getMessage = input} />
          <br /><br />
          <button style={postBtnStyle}>Post</button>
        </form>
        <Link to='/gallery'>
          <button className='galleryStyle'>
            View Gallery
          </button>
        </Link>
        {/* <div className='op2'>
          <input type="file" id="files" />
          <p id="state">No images stored in your browser.</p>
          <div id="list">
          </div>
          <a href="#" id="deleteImgs">Delete Images</a>
        </div> */}
      </div>
    );
  }
}
export default PostForm;