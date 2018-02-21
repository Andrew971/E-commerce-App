import React, { Component } from 'react';


export default class Home extends Component {
  render() {
   let input
  
    return (
      <main className="container">
        <div align="center">
            <h1>My home page</h1>
            <form action="/shop">
  
        <input type="text" className="form-control" ref={type => {
          input = type;
        }} />
        <button onClick={(e) => {
          this.props.handler(input.value)
      }}>Submit</button>
        <br />
      </form>
        </div>
      </main>
    );
  }
}


