import React, { Fragment } from 'react';
import classes from './App.module.css';
import Room from '../Room/Room';

const App = props => {
  return (
    <Fragment>
      <div className = { classes.App }>
        <Room title = { props.appTitle }/>
      </div>
    </Fragment>
  );
}

export default App;
