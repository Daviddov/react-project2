import React, { Component } from 'react';
import Player from './Player';
function AllPlayers(props) {

    return (
        <React.Fragment>
            <Player name={'David'} />
            <Player name={'Sara'} />
        </React.Fragment>
    );
}

export default AllPlayers;