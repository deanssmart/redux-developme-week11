import React from 'react';
import Header from './Header'
import ScoreCard1 from './ScoreCard/ScoreCard1';
import ScoreCard2 from './ScoreCard/ScoreCard2';
import Button from './Button';
import Alert from './Alert/index';
import Table from './Table';


const App = ({ 
    scoreP1,
    handleP1,
    scoreP2, 
    handleP2,
    handleReset,
    player1Serving,
    winner,
}) => (
    <>
      <Header />

      <div className="row mb-4">
        <ScoreCard1 
          player="Player 1" 
          handlePlayer={ handleP1 }
        />

        <ScoreCard2 
          player="Player 2"
          handlePlayer={ handleP2 }
        />
      </div>

      <Alert />

      <hr />

      <Button
        label="Reset"
        buttonClass="btn btn-danger"
        handleClick={ handleReset }
        disable={ false }
      />

      <hr />

      <Table
        columnHeader1="Player 1"
        columnHeader2="Player2"
        rowHeader1="Won"
        row1Data1="1"
        row1Data2="21"
        rowHeader2="Score"
        row2Data1="5"
        row2Data2="12"
      />

    </>
);

export default App;
