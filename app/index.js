import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
  render() {
    return (
      <div>
        <input type="text"/>
        <h1>Hi, I'm H1</h1>
      </div>
    );
  }
}

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);