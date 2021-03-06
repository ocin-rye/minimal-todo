import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styles from './Todo.module.scss';

class Todo extends Component {
  render() {
    return (
      <div className={`${styles.todo}`}>
        <p className={``}>{this.props.todo.completed ? 'Completed' : 'Active'}</p>
        <p className={``}>{this.props.todo.text}</p>
        <div className={`${styles.actions}`}>
          <p
            className={`${styles.action} toggleCompleted`}
            onClick={() => this.props.toggleTodoCompletion(this.props.todo)}
          >
            Mark as {this.props.todo.completed ? 'Active' : 'Completed'}
          </p>
          <p
            className={`textRight ${styles.action} ${styles.delete}`}
            onClick={() => this.props.deleteTodo(this.props.todo)}
          >
            Delete
          </p>
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleTodoCompletion: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default Todo;
