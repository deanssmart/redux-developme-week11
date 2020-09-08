import { connect } from 'react-redux';
import Alert from './Alert';

const mapStateToProps = ({ winner }) => ({ winner });

export default connect(mapStateToProps)(Alert);