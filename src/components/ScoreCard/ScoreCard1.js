import { connect } from 'react-redux';
import ScoreCard from './ScoreCard';

const mapStateToProps = ({ player1Name, player1, player1Serving, winner }) => ({
        player: player1Name,
        score: player1,
        serving: player1Serving,
        winner,
    });

const mapDispatchToProps = dispatch => {
    return {
        handlePlayer: () => dispatch({ type: "SCORE", player: "player1" }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);