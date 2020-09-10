import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = ({ savedSettings }) => ({ savedSettings });

export default connect(mapStateToProps)(App);