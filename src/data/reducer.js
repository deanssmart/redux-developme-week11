import initial from './initial';

const alternate = (state) => {
  return (state.player1 >= 20 && state.player2 >= 20) ? 2 : 5;  
};

const server = (state) => {
  const total = state.player1 + state.player2;

  return { 
    ...state, 
    player1Serving: total % alternate(state) === 0 ? !state.player1Serving : state.player1Serving
  };
};

const score = (state, { player }) => {
  return { 
    ...state, 
    [player]: state[player] + 1, 
  };
};

const player1Wins = (state) => {
  return state.player1 >= 21 && state.player1 - state.player2 >= 2;
};

const player2Wins = (state) => {
  return state.player2 >= 21 && state.player2 - state.player1 >= 2;
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
        score: state.player1,
        won: player1Wins(state),
      },
      
      player_2:{
        score: state.player2,
        won: player2Wins(state),
      },

    }] : state.history
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SCORE": return history(winner(server(score(state, action))));
    case "RESET": return {
      ...initial,
      history: state.history,
    };
    default: return state;
  };
};


export default reducer;