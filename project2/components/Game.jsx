import Button from "./Buttun";
import React, { Component } from 'react';

class Game extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        num: Math.floor(Math.random() * 100),
        step: 0,
        wonSteps: '',
        displyPlayer: true,
        displayBtn: false
        
    }

    increment = () => {
        let myNum = this.state.num + 1
        let myStep = this.state.step + 1
        this.setState({
            num: myNum,
            step: myStep
        })
       
        console.log(this.state.step,1);
        myNum === 100 && this.sucseed()
    }
    decrement = () => {
        let myNum = this.state.num - 1
        let myStep = this.state.step + 1
        this.setState({
            num: myNum,
            step: myStep
        })
        myNum === 100 && this.sucseed()
    }
    multiplayTow = () => {
        let myNum = this.state.num * 2
        let myStep = this.state.step + 1
        this.setState({
            num: myNum,
            step: myStep
        })
        myNum === 100 && this.sucseed()
    }
    devisionTow = () => {
        let myNum = this.state.num / 2
        let myStep = this.state.step + 1
        this.setState({
            num: myNum,
            step: myStep
        })
        myNum === 100 && this.sucseed()
    }

    sucseed = () => {
        this.setState({displyPlayer: false})
        this.setState({displayBtn: true}) 
    }

    nextGame = () => {
        this.setState({
            num: Math.floor(Math.random() * 100),
            step: 0,
            wonSteps: `${this.state.wonSteps + this.state.step}, `
        })
        this.setState({displyPlayer: true})
        this.setState({displayBtn: false}) 
       
    }

    quit = () => {
        this.setState({displyPlayer: false})
        this.setState({displayBtn: false})
      
    }

    render() {
        return (
            <React.Fragment>
                <div id="player" style={{display:this.state.displyPlayer ? 'block': 'none'}}>
                    <h1>Player: {this.props.name}</h1>
                    <h1>My number is: {this.state.num}</h1>
                    <h1>step: {this.state.step}</h1>
                    <h1>won steps: {this.state.wonSteps}</h1>
                    <Button hendelClick={this.increment} name={'+1'} />
                    <Button hendelClick={this.decrement} name={'-1'} />
                    <Button hendelClick={this.multiplayTow} name={'*2'} />
                    <Button hendelClick={this.devisionTow} name={'/2'} />
                </div>

                <div id="nextOrNot" style={{display:this.state.displayBtn ? 'block': 'none'}}>
                    <button onClick={this.quit}>Quit</button>
                    <button onClick={this.nextGame}>Next Game</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Game;