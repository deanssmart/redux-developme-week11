import { connect } from 'react-redux';
import ScoreCard from './ScoreCard';

const mapStateToProps = ({ player1, player1Serving, winner }) => ({
        score: player1,
        serving: player1Serving,
        winner,
    });

export default connect(mapStateToProps)(ScoreCard);