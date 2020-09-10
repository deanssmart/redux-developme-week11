import { connect } from 'react-redux';
import Alert from './Alert';

const mapStateToProps = ({ 
    winner,
    player1Name,
    player2Name,
 }) => ({ 
        winner, 
        player1Name,
        player2Name,
    });

export default connect(mapStateToProps)(Alert);