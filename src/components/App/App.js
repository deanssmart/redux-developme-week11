import React from 'react';
import Header from '../Header'
import ScoreCard1 from '../ScoreCard/ScoreCard1';
import ScoreCard2 from '../ScoreCard/ScoreCard2';
import ResetButton from '../Buttons/ResetButton';
import Alert from '../Alert';
import Table from '../Table';
import StartForm from '../Forms';


const App = ({ savedSettings }) => (
    <>
        <Header />
        { !savedSettings ? <StartForm /> :
          <>
            <div className="row mb-4">
              <ScoreCard1 />
              <ScoreCard2 />
            </div>
            <Alert />
            <hr />
            <ResetButton buttonClass="btn btn-danger"/>
            <hr />
            <Table />
          </>
        }
      </>
    
);

export default App;
