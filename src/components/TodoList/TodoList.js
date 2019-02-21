import React, { Component } from 'react';
import './TodoList.css';
import { qs } from 'quantum-store';
import { Actions } from '../../actions/Actions';
import { TodoItem } from '../TodoItem/TodoItem';
import { FILTER_ALL } from '../../Constants';

export class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = { showList: [] };
  }

  render() {
    return (
      <ul>
        {
          this.state.showList.map((item, i) =>
            (<TodoItem key={item.id} onClick={() => Actions.toggleTodo(item.id)}
              text={item.text} type={item.type} />))
        }
      </ul>
    );
  }

  componentDidMount() {
    qs.connect("todo", this, (state) => {
      const { filter, list } = state;
      return {
        showList: list.filter(item => item.type === filter || state.filter === FILTER_ALL)
      };
    });
  }

  componentWillUnmount() {
    qs.disconnect("todo", this);
  }
}