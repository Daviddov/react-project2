import Button from "./Buttun";
import React, { Component } from 'react';

class Player extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        num: Math.floor(Math.random() * 100),
        step: 0,
        wonSteps: '',
    }

    increment = () => {
        this.setState({
             num: this.state.num + 1, 
            step: this.state.step + 1 
        })

        this.state.num === 100 && this.sucseed()
    }
    decrement = () => {
        this.setState({ 
            num: this.state.num - 1, 
            step: this.state.step + 1
         })
        this.state.num === 100 && this.sucseed()
    }
    multiplayTow = () => {
        this.setState({ 
            num: this.state.num * 2, 
            step: this.state.step + 1
         })
        this.state.num === 100 && this.sucseed()
    }
    devisionTow = () => {
        this.setState({ num: this.state.num / 2, 
        step: this.state.step + 1 
    })
        this.state.num === 100 && this.sucseed()
    }

    sucseed = () => {
        this.setState({
            num: Math.floor(Math.random() * 100),
            step: 0,
            wonSteps: `${this.state.wonSteps + this.state.step}, `  
          })
        document.getElementById('player').style.display = 'none'
      document.getElementById('nextOrNot').style.display = 'block'
    }

    nextGame = () => {
       
          document.getElementById('player').style.display = 'block'
          document.getElementById('nextOrNot').style.display = 'none'
    }

    quit = () => {
        document.getElementById('player').style.display = 'none'
        document.getElementById('nextOrNot').style.display = 'none'
    }

    render() {
        return (
            <React.Fragment>
<div id="player" style={this.state.displyStyle}>
               <h1>Player: {this.props.name}</h1> 
                <h1>My number is:{this.state.num}</h1>
                <h1>step: {this.state.step}</h1>
                <h1>won steps: {this.state.wonSteps}</h1>
                <Button hendelClick={this.increment} name={'+1'} />
                <Button hendelClick={this.decrement} name={'-1'} />
                <Button hendelClick={this.multiplayTow} name={'*2'} />
                <Button hendelClick={this.devisionTow} name={'/2'} />
</div>

<div id="nextOrNot" style={{display: 'none'}}>
    <button onClick={this.quit}>Quit</button>
    <button onClick={this.nextGame}>Next Game</button>
</div>
            </React.Fragment>
        );
    }
}

export default Player;