import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
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

Filter.propTypes = {
  setTodoListFilter: PropTypes.func.isRequired,
  todoListFilter: PropTypes.string.isRequired,
};

export default Filter;
