import React, { Fragment } from 'react';

import classes from './Table.module.css';
import Button from '../../components/UI/Button/Button';
import tablePositions from '../../constants/tablePositions.json';

const Table = props => {
  const sitButtonsJsx = [];

  for (let i = 0; i < props.maxNumPlayers; i++) {
    const tablePositionStyles = tablePositions[props.maxNumPlayers].positions[i];
    console.log(tablePositionStyles);
    sitButtonsJsx.push(
      <div key = { i } className = { classes.seat } style = { tablePositionStyles.styles } >
        <Button 
          color = 'white' 
          clicked = { props.onAddButtonClick }>
            Sit Here
        </Button>
      </div>
    );
  };

  return (
    <Fragment>
      <div className = { classes.table } >
        { sitButtonsJsx }
      </div>
    </Fragment>
  );
};

export default Table;