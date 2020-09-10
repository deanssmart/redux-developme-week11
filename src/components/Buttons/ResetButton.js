import { connect } from 'react-redux';
import Button from './Button';
import { reset } from '../../data/actions/state';

const mapStateToProps = () => ({ label: "Reset" });

const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => dispatch(reset()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);