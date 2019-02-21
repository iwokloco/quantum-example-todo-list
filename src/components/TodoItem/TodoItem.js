import React, { Component } from 'react';
import './TodoItem.css';
import { FILTER_COMPLETED } from '../../Constants';

export class TodoItem extends Component {
  render() {
    const { text, type, onClick } = this.props;
    return (
      <li onClick={onClick}>
        <span className={type === FILTER_COMPLETED ? 'completed' : ''}>{text}</span>
      </li>
    );
  }
}