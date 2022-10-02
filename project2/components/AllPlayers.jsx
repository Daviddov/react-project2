import React, { Component } from 'react';
import { useState } from 'react';
import Player from './Player';
function AllPlayers(props) {

const [playersName, setPlayer] =useState([])
const [allGames, setAllGames] =useState([])
const [style, setStyle] =useState({display:  'block'})

function addPlayer() {
    let player = document.getElementById('player').value
    player && setPlayer([...playersName, player])
    
}
let allPlayersGame
function satrtGame() {
    if (playersName.length > 0 )  {
         allPlayersGame =  playersName.map((p, i)=> <Player key={i} name={p} />)
        setAllGames(allPlayersGame)
setStyle({display:  'none'})

}
}
    return (
        <React.Fragment>
            <div style={style}>
            <h1>players: </h1><ol>{playersName.map((p, i) => <li key={i}>{p}</li>)}</ol>
            <input id='player' type="text" placeholder='Enter player'/><br />
            <button onClick={addPlayer}>add players</button>
            <button onClick={satrtGame}>Let's start</button>
</div>
           {allGames}
          
           
        </React.Fragment>
    );
}

export default AllPlayers;