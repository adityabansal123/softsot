import React, { Component } from 'react';

class List extends Component{

	constructor(props){
	  super(props);
	  this.state = {
		list: ['Demo', 'Text']
	  }
	}

	render() {
	  const { list } = this.state;
	  return (
	    <div className="App">
	      <h1>List of items</h1>
	      {list.length ? (
	        <div>
		  {list.map((item) => {
			return (<div>{item}</div>);
		  })}
		</div>
	      ):(
		<div><h2>No List Items found</h2></div>
	      )}
	       </div>
	  );
	}
}
export default List;
