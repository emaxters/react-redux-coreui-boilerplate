import { toastr } from 'react-redux-toastr';

export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const USER_LOGGED_OUT = "USER_LOGGED_OUT";

export const someAction = (props) => {
    return (dispatch, getState) => {
        toastr.success('Success', 'You clicked this button');
    }
}

export const login = (props) => {
    return (dispatch, getState) => {
        dispatch({
            type: USER_LOGGED_IN,
            payload: { username: "Siva", token: "Some Token" }
        });
    }
}

export const logout = (props) => {
    return (dispatch, getState) => {
        dispatch({
            type: USER_LOGGED_OUT,
            payload: null
        });
        toastr.success('Success', 'You clicked login');
    }
}