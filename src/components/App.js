import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodoCompletion, addTodo, deleteTodo, setTodoListFilter } from '../actions';

import Header from './header';
import Input from './input';
import Filter from './filter';
import TodoList from './todoList';
import styles from './App.module.scss';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={`${styles.container}`}>
        <Header />
        <div className={`${styles.content}`}>
          <div className={`${styles.controls}`}>
            <Input addTodo={this.props.addTodo} />
            <Filter
              setTodoListFilter={this.props.setTodoListFilter}
              todoListFilter={this.props.todoListFilter}
            />
          </div>
          <TodoList
            todoList={this.props.todoList}
            toggleTodoCompletion={this.props.toggleTodoCompletion}
            deleteTodo={this.props.deleteTodo}
            todoListFilter={this.props.todoListFilter}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoListFilter: state.todoListFilter,
  todoList: state.todoList,
});

export default connect(
  mapStateToProps,
  { toggleTodoCompletion, addTodo, deleteTodo, setTodoListFilter },
)(App);
