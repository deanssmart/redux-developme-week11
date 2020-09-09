import { connect } from 'react-redux';
import Button from './Button';

const mapStateToProps = () => ({ label: "Reset" });

const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => dispatch({ type: "RESET" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);