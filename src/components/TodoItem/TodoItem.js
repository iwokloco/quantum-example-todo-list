import React, { Component } from 'react';
import './TodoItem.css';
import { FILTER_COMPLETED } from '../../Constants';

export class TodoItem extends Component {
  render() {
    const { text, type, onClick } = this.props;
    return (
      <li onClick={onClick}>
        <img alt="check" className="imgCheck" src={type === FILTER_COMPLETED ? 'checked.png' : 'unchecked.png'} />
        <span>{text}</span>
      </li>
    );
  }
}