import React, { Component } from 'react';
import { todoListFilters } from '../../actions/paramConstants';

import styles from './Filter.module.scss';

class Filter extends Component {
  renderButtons() {
    return Object.keys(todoListFilters).map(key => {
      return (
        <button
          onClick={() => this.props.setTodoListFilter(todoListFilters[key])}
          className={`${styles.button} ${
            this.props.todoListFilter === todoListFilters[key] ? styles.buttonActivated : null
          } ${todoListFilters[key]}`}
          key={`filter button ${todoListFilters[key]}`}
        >
          {todoListFilters[key]}
        </button>
      );
    });
  }

  render() {
    return (
      <div className={`${styles.container}`}>
        <p>Filter Todos</p>
        {this.renderButtons()}
      </div>
    );
  }
}

export default Filter;
