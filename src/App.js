import React from 'react';
import Header from './components/Header'
import ScoreCard from './components/ScoreCard';
import Button from './components/Button';
import Alert from './components/Alert';


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
        <ScoreCard 
          player="Player 1" 
          serving={ player1Serving }          
          score={ scoreP1 }
          handlePlayer={ handleP1 }
          winner={ winner }
        />

        <ScoreCard 
          player="Player 2"
          serving={ !player1Serving }
          score={ scoreP2 }
          handlePlayer={ handleP2 }
          winner={ winner }
        />
      </div>

      <Alert winner={ winner } />

      <hr />

      <Button
        label="Reset"
        buttonClass="btn btn-danger"
        handleClick={ handleReset }
        disable={ false }
      />

    </>
);

export default App;
