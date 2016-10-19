import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './HomePage.less';

function HomePage() {
  return (
    <div className={styles.normal}>
      <h1>Welcome to dva home!</h1>
      <hr />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/sorrycc/blog/issues/8" target="_blank">Getting Started</a></li>
      </ul>
    </div>
  );
}

HomePage.propTypes = {
};

export default connect()(HomePage);
