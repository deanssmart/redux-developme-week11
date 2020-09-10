import { connect } from 'react-redux';
import ScoreCard from './ScoreCard';
import { score } from '../../data/actions/state';

const mapStateToProps = ({ player1Name, player1, player1Serving, winner }) => ({
        player: player1Name,
        score: player1,
        serving: player1Serving,
        winner,
    });

const mapDispatchToProps = dispatch => {
    return {
        handlePlayer: () => dispatch(score("player1")),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);