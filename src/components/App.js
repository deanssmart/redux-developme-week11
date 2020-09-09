import React from 'react';
import Header from './Header'
import ScoreCard1 from './ScoreCard/ScoreCard1';
import ScoreCard2 from './ScoreCard/ScoreCard2';
import ResetButton from './Buttons/ResetButton';
import Alert from './Alert';
import Table from './Table';


const App = ({ 
    scoreP1,
    handleP1,
    scoreP2, 
    handleP2,
    handleReset,
    player1Serving,
    winner,
    p1Score,
}) => (
    <>
      <Header />

      <div className="row mb-4">
        <ScoreCard1 />
        <ScoreCard2 />
      </div>

      <Alert />

      <hr />

      <ResetButton
        label="Reset"
        buttonClass="btn btn-danger"
      />

      <hr />

      <Table />

    </>
);

export default App;
