import React, { Component } from 'react';
import { FILTER_ACTIVE, FILTER_ALL, FILTER_COMPLETED } from '../../Constants';
import { Actions } from '../../actions/Actions';
import { qs } from 'quantum-store';

export class Filter extends Component {

  constructor() {
    super();
    this.state = { filter: FILTER_ALL };
  }

  render() {
    const { filter } = this.state;
    return (
      <div>
        Filter:
          <button disabled={filter === FILTER_ALL}
          onClick={() => Actions.changeFilter(FILTER_ALL)}>{FILTER_ALL}</button>
        <button disabled={filter === FILTER_ACTIVE}
          onClick={() => Actions.changeFilter(FILTER_ACTIVE)}>{FILTER_ACTIVE}</button>
        <button disabled={filter === FILTER_COMPLETED}
          onClick={() => Actions.changeFilter(FILTER_COMPLETED)}>{FILTER_COMPLETED}</button>
      </div>
    );
  }

  componentDidMount() {
    qs.connect("todo", this, (state) => { return { filter: state.filter } });
  }

  componentWillUnmount() {
    qs.disconnect("todo", this);
  }
}