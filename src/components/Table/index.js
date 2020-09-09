import { connect } from 'react-redux';
import Table from './Table';

const mapStateToProps = ({ history }) => ({ history });

export default connect(mapStateToProps)(Table);