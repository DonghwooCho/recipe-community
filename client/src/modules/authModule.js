import { createActions, handleActions } from 'redux-actions';

const initialState = [
    {
        id: '',
        accessToken: '',
        isAuth: false
    }
];

export const LOGIN = 'auth/LOGIN';
export const LOGOUT = 'auth/LOGOUT';

const actions = createActions({
    [LOGIN]: () => {},
    [LOGOUT]: () => {}
});

export const authReducer = handleActions(
    {
        [LOGIN]: (state, { payload }) => {

            if(payload.token) {

                state[0].accessToken = payload.token
                state[0].id = payload.member.id
                state[0].isAuth = true

            }

            return state;
        }, 
        [LOGOUT]: (state, { payload }) => {

            state[0].accessToken = '';
            state[0].id = '';
            state[0].isAuth = false;

            localStorage.removeItem('accessToken');
            console.log('real :', localStorage.getItem('accessToken'))


            return state;
        }

    }, initialState
);
