import { connect } from 'react-redux';
import ScoreCard from './ScoreCard';
import { score } from '../../data/actions';

const mapStateToProps = ({ player2Name, player2, player1Serving, winner }) => ({
        player: player2Name,
        score: player2,
        serving: !player1Serving,
        winner,
    });

    const mapDispatchToProps = dispatch => {
        return {
            handlePlayer: () => dispatch(score("player2")),
        };
    };

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);
