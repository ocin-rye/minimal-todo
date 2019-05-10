import React, { Component } from 'react';
import { todoListFilters } from '../../actions/paramConstants';
import Todo from '../todo';
import styles from './TodoList.module.scss';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      filterError: false,
    };
  }

  toggleTodoListVisibility(filter) {
    switch (filter) {
      // case todoListFilters.SHOW_ALL:
      //   return this.setState(() => ({ todoList: this.props.todoList }));
      case todoListFilters.SHOW_COMPLETED:
        return this.setState(() => ({
          todoList: this.props.todoList.filter(todo => todo.completed === true),
        }));
      case todoListFilters.SHOW_ACTIVE:
        return this.setState(() => ({
          todoList: this.props.todoList.filter(todo => todo.completed === false),
        }));
      // Default case for show all filter
      default:
        return this.setState(() => ({ todoList: this.props.todoList }));
    }
  }

  componentDidMount() {
    this.toggleTodoListVisibility(this.props.todoListFilter);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.todoList !== prevProps.todoList ||
      this.props.todoListFilter !== prevProps.todoListFilter
    ) {
      this.toggleTodoListVisibility(this.props.todoListFilter);
    }
  }

  renderHeader() {
    if (this.state.todoList.length === 0) {
      if (this.props.todoListFilter === 'Completed' || this.props.todoListFilter === 'Active') {
        return `No ${this.props.todoListFilter} Todos`;
      }
      return 'No Todos';
    }

    return `${this.props.todoListFilter} Todos: ${this.state.todoList.length}`;
  }

  renderTodoList = () => {
    if (this.state.todoList.length === 0) {
      return null;
    }
    return this.state.todoList.map(todoObject => {
      return (
        <Todo
          todo={todoObject}
          key={todoObject.id}
          toggleTodoCompletion={this.props.toggleTodoCompletion}
          deleteTodo={this.props.deleteTodo}
        />
      );
    });
  };

  render() {
    return (
      <div className={`${styles.container}`}>
        <p className={`textCenter ${styles.header}`}>{this.renderHeader()}</p>
        {this.renderTodoList()}
      </div>
    );
  }
}

export default TodoList;
