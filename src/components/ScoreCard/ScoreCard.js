import React from 'react';
import Button from '../Button'

const ScoreCard = ({
    player,
    serving,
    score,
    handlePlayer,
    winner,
}) => (
        <div className="col-md-6 mt-4">
            <div className={ "card text-center" + (serving ? " bg-dark text-white" : "") }>
                <h5 className="card-header">{ player }</h5>
                <div className="card-body">
                    <p className="card-text display-1">{ score }</p>
                </div>
                <div className="card-footer">
                    <Button 
                        label="+"
                        buttonClass="form-control btn btn-success"
                        handleClick={ handlePlayer }
                        disable={ winner !== 0 }
                    />
                </div>
            </div>
        </div>
);

export default ScoreCard;
