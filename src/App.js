import React from "react";

const App = ({ 
    scoreP1,
    handleP1,
    scoreP2, 
    handleP2,
    handleReset,
    player1Serving,
    winner,
}) => (
    <React.Fragment>
        {/* header */}
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>

        {/* scores */}
        <div className="row mb-4">
            <div className="col-md-6 mt-4">
                <div className={ "card text-center" + (player1Serving ? " bg-dark text-white" : "") }>
                    <h5 className="card-header">Player 1</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{ scoreP1 }</p>
                    </div>
                    <div className="card-footer">
                        <button 
                          className="form-control btn btn-success"
                          onClick={ handleP1 }
                          disabled={ winner !== 0 }                          
                        >
                          +
                        </button>
                    </div>
                </div>
            </div>

            <div className="col-md-6 mt-4">
                <div className={ "card text-center" + (!player1Serving ? " bg-dark text-white" : "") }>
                    <h5 className="card-header">Player 2</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{ scoreP2 }</p>
                    </div>
                    <div className="card-footer">
                        <button 
                          className="form-control btn btn-success"
                          onClick={ handleP2 }
                          disabled={ winner !== 0 }  
                        >
                          +
                        </button>
                    </div>
                </div>
            </div>
        </div>

        { /* winner message */}
        {winner === 0 ? null : 
        <h2 className="alert alert-success">Player { winner } wins!</h2>
        }
        <hr />

        { /* reset button */}
        <button 
          className="btn btn-danger"
          onClick={ handleReset }
        >
          Reset
        </button>
    </React.Fragment>
);

export default App;
