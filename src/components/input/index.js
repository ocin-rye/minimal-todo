import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import nanoid from 'nanoid';

import styles from './Input.module.scss';

class Input extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      error: false,
      confirmed: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.confirmed) {
      // Execute if there is an existing timeout ID
      // Clear current timeout
      // Execute to prevent multiple timeouts being active
      if (this.hideConfirmation) {
        clearTimeout(this.hideConfirmation);
      }

      // Create timeout to remove confirmation notifaction
      // Return timeout ID
      this.hideConfirmation = setTimeout(() => {
        this.setState(() => ({ confirmed: false }));
      }, 5000);
    }
  }

  componentWillUnmount() {
    // Prevents state update on an unmounted component
    clearTimeout(this.hideConfirmation);
  }

  handleSumbit() {
    if (this.state.input.length === 0) {
      return this.setState({
        error: true,
        confirmed: false,
      });
    }

    //Generate todo id. Not done in action creator for testing purposes.
    const todoId = nanoid();

    this.props.addTodo(this.state.input, todoId);
    this.setState({
      input: '',
      error: false,
      confirmed: true,
    });
  }

  onEnter = event => {
    if (event.key === 'Enter') {
      this.handleSumbit();
    }
  };

  renderInputText() {
    // if (this.state.confirmed === false && this.state.error === false) {
    //   return <p className={`${styles.textInitial}`}>Enter Todo Text:</p>;
    // }
    if (this.state.error) {
      return <p className={`${styles.textError}`}>Error: Please Enter Valid Todo Text</p>;
    }
    if (this.state.confirmed) {
      return <p className={`${styles.textSuccess}`}>Success: New Todo Created</p>;
    }
    return <p className={`${styles.textInitial}`}>Enter Todo Text:</p>;
  }

  render() {
    return (
      <div className={`${styles.inputContainer}`}>
        {this.renderInputText()}
        <input
          type="text"
          placeholder="Todo Text"
          value={this.state.input}
          onChange={event => this.setState({ input: event.target.value })}
          onKeyDown={this.onEnter}
          className={`${styles.textInputField}`}
        />
        <button className={`${styles.button}`} onClick={() => this.handleSumbit()}>
          Add
        </button>
      </div>
    );
  }
}

Input.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default Input;
