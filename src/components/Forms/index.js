import { connect } from 'react-redux';
import StartForm from './StartForm';
// import { newGame } from '../../data/actions/state';
import { postNewGame } from '../../data/actions/api';

const mapStateToProps = ({
    player1Name, 
    player2Name, 
    winningScore, 
    alternate,
    savedSettings,
}) => {
    return {
        player1Name, 
        player2Name, 
        winningScore, 
        alternate, 
        savedSettings,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleSave: (
            player1Name, 
            player2Name, 
            winningScore, 
            alternate,       
            ) => dispatch(postNewGame(
                player1Name, 
                player2Name, 
                winningScore, 
                alternate,             
                ))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartForm);