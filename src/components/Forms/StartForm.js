import React, { Component } from 'react';
import Input from '../Inputs/Input';

class StartForm extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            player1Name: props.player1Name,
            player2Name: props.player2Name,
            winningScore: props.winningScore,
            alternate: props.alternate,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e, input) {
        let change = {}
        change[input] = e.currentTarget.value;
        this.setState(change);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { 
            player1Name, 
            player2Name, 
            winningScore, 
            alternate,
        } = this.state;

        return player1Name === "" || player2Name === "" ? null : 

        this.props.handleSave(
            player1Name, 
            player2Name, 
            winningScore, 
            alternate,
            );

    };

    render() {
        const { 
            player1Name, 
            player2Name, 
            winningScore, 
            alternate, 
        } = this.state;

        return (
            <form onSubmit={ this.handleSubmit } className="container">
                <Input 
                    label="Player 1 Name"
                    name="player1Name"
                    type="text"
                    value={ player1Name }
                    handleChange={ (e) => this.handleChange(e, "player1Name") }
                    required
                />
                <Input 
                    label="Player 2 Name"
                    name="player2Name"
                    type="text"
                    value={ player2Name }
                    handleChange={ (e) => this.handleChange(e, "player2Name") }
                    required
                />
                <Input 
                    label="Winning Score"
                    name="winningScore"
                    type="number"
                    value={ winningScore }
                    handleChange={ (e) => this.handleChange(e, "winningScore") }
                />
                <Input 
                    label="Alternate Every"
                    name="alternate"
                    type="number"
                    value={ alternate }
                    handleChange={ (e) => this.handleChange(e, "alternate") }
                />                                                

                <button className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default StartForm;