import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';   

export class Input extends React.Component {  
  // constructor function takes a parameter of props and calls super(props) on its first line
  constructor(props) {
    super(props);
    // state as with empty string on page load
    this.state = {
      userInput: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  // sets the state to reflect what the user types
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }

  // listen for a change on the input, create a new method
  // add value attribute that reflects user input
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={this.state.userInput}/>
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);