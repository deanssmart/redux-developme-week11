import { connect } from 'react-redux';
import StartForm from './StartForm';
import { save } from '../../data/actions';

const mapStateToProps = ({
    player1Name, 
    player2Name, 
    winningScore, 
    alternate,
    saved,
}) => {
    return {
        player1Name, 
        player2Name, 
        winningScore, 
        alternate, 
        saved,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleSave: (
            player1Name, 
            player2Name, 
            winningScore, 
            alternate,
            saved,
            ) => dispatch(save(
                player1Name, 
                player2Name, 
                winningScore, 
                alternate,
                saved,
                )),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartForm);