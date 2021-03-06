import initial from './initial';
// import { save } from './actions';

// const alternate = (state) => {
//   return (state.player1 >= 20 && state.player2 >= 20) ? 2 : state.alternate;  
// };

const server = (state, { player1Serving }) => {
  return { 
    ...state, 
    player1Serving,
  };
};

const score = (state, { player1, player2 }) => {
  return { 
    ...state, 
    player1,
    player2,
  };
};

const player1Wins = (state) => {
  return state.player1 >= state.winningScore && state.player1 - state.player2 >= 2;
};

const player2Wins = (state) => {
  return state.player2 >= state.winningScore && state.player2 - state.player1 >= 2;
};

const winner = (state) => {
  return {
    ...state,
    winner: player1Wins(state) ? 1 : (player2Wins(state) ? 2 : 0),
  };
};

const history = (state) => {
  return {
    ...state,
    history: player1Wins(state) || player2Wins(state) ? [...state.history, {
      player_1: {
        name: state.player1Name,
        score: state.player1,
        won: player1Wins(state),
      },
      
      player_2:{
        name: state.player2Name,
        score: state.player2,
        won: player2Wins(state),
      },

    }] : state.history
  };
};

const saveSettings = (state, {
  gameID,
  player1Name, 
  player2Name, 
  winningScore, 
  alternate, 
}) => ({ 
  ...state,   
  gameID,         
  player1Name, 
  player2Name, 
  winningScore, 
  alternate,
  savedSettings: true,
});

const reset = (state) => {
  return {
    ...initial,
    savedSettings: false,
    player1Name: state.player1Name, 
    player2Name: state.player2Name,
    history: state.history,
  };  
};


const reducer = (state, action) => {
  switch (action.type) {
    case "NEW_GAME": return saveSettings(state, action);
    case "SCORE": return history(winner(server(score(state, action), action)));
    case "RESET": return reset(state);
    default: return state;
  };
};


export default reducer;