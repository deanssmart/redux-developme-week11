import { connect } from 'react-redux';
import ScoreCard from './ScoreCard';
import { patchScore } from '../../data/actions/api';

const mapStateToProps = ({ player2Name, player2, player1Serving, winner }) => ({
        player: player2Name,
        score: player2,
        serving: !player1Serving,
        winner,
    });

    const mapDispatchToProps = dispatch => {
        return {
            handlePlayer: () => dispatch(patchScore(2)),
        };
    };

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);
