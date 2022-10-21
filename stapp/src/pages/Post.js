import React, { Component } from 'react';

function Post(){
return (
	<div
	style={{ width: '50%', margin: '0px auto' }}
	>
	<h2>{localStorage.getItem('title')}</h2>
	<img src={localStorage.getItem('image')}
	alt={'C - language'}
	/>
	<p style={{width: '50%', margin: '0px auto'}}
	>{localStorage.getItem('message')}</p>

	</div>
);
}
export default Post;
