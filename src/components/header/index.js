import React, { Component } from 'react';

import styles from './Header.module.scss';

class Header extends Component {
  render() {
    return (
      <div className={`${styles.container}`}>
        <h1 className={`${styles.title}`}>Minimal Todo App</h1>
      </div>
    );
  }
}

export default Header;
