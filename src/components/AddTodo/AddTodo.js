import React, { Component } from 'react';
import { Actions } from '../../actions/Actions';

export class AddTodo extends Component {

  value = '';

  render() {
    return (
      <div>
        <input type="text" onChange={(e) => { this.value = e.target.value; }} />
        <button onClick={() => Actions.addTodo(this.value)}>Add ToDo</button>
      </div>
    );
  }
}