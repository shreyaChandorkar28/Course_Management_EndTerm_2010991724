import React, { Component } from 'react';
import Post from './Post';

const parentDiv = {
align: 'center',
margin: '5px',
textAlign: 'center',
}
function AllPost(){
	return (
	<div style={parentDiv}>
        <br/>
	<h1>Images</h1>
	<hr></hr>
	<h1>All Posts</h1>
    <br/>
	<Post/>
	</div>
	);
}

export default AllPost;
