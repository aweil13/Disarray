import { connect } from 'react-redux';
import { login } from '../../actions/sessionActions';
import LoginForm from './loginForm';

const mSTP = (state) => {
    return {
        errors: state.errors.session
    };
};

const mDTP = (dispatch) => {
    return {
        login: user => dispatch(login(user))
    }
}

export default connect(mSTP, mDTP)(LoginForm);