import React, { Component, Fragment  } from 'react';

import classes from './Room.module.css';
import Table from '../../components/Table/Table';
import Player from '../../components/Player/Player';
import AddPlayerModal from '../../components/UI/AddPlayerModal/AddPlayerModal';

class Room extends Component {
  state = {
    players: [],
    showModal: false,
    config: {
      maxNumPlayers: 6,
      bigBlind: 10
    }
  };

  updatePlayersState = (name, chips, target) => {
    const player = new Player(name, chips);
    console.log(target);
    this.setState(prevState => {
      const oldPlayerArray = prevState.players;
      oldPlayerArray.push(player);

      return { players: oldPlayerArray, showModal: false };
    });
  };

  addPlayerButtonHandler = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({
      showModal: false
    });
  };

  render = () => {
    const currentPlayerNames = this.state.players.map(player => player.name);

    return (
      <Fragment>
        <div className = { classes.Room } >
          <h1> { this.props.title } </h1>
          <h3>Current players: { currentPlayerNames.length }</h3>
          <h3>Current players: { currentPlayerNames.join(', ') }</h3>
          <h3>Max number of players: { this.state.config.maxNumPlayers }</h3>
          <Table viewportWidth = { window.innerWidth } 
            maxNumPlayers = { this.state.config.maxNumPlayers } 
            onAddButtonClick = { this.addPlayerButtonHandler } 
            players = { this.state.players }/>
          <AddPlayerModal show = { this.state.showModal } modalClosed = { this.closeModal } addPlayerHandler = { this.updatePlayersState }/>
        </div>
      </Fragment>
    );
  };
};

export default Room;