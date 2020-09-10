import { connect } from 'react-redux';
import StartForm from './StartForm';
import { save } from '../../data/actions';

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
            ) => dispatch(save(
                player1Name, 
                player2Name, 
                winningScore, 
                alternate,             
                )),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartForm);