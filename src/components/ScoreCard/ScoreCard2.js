import { connect } from 'react-redux';
import ScoreCard from './ScoreCard';

const mapStateToProps = ({ player2, player1Serving, winner }) => ({
        score: player2,
        serving: !player1Serving,
        winner,
    });

export default connect(mapStateToProps)(ScoreCard);