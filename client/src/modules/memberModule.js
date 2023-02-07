import { createActions, handleAction, handleActions } from 'redux-actions';
import axios from 'axios';
import { LOGOUT } from './authModule';

// 초기값
const initialState = [
    {
        name: '',
        age: 0,
        id: '',
        password: ''
    },
    {
        accessToken: ''
    },
    {
        searchId: '',
        searchAge: 0,
        searchName: ''
    },
    {
        members: []
    }
];

// 액션
export const GET_MEMBERS = 'member/GET_MEMBERS';
export const SHOW_MEMBERS = 'member/SHOW_MEMBERS';
export const TRY_LOGIN = 'member/TRY_LOGIN';
export const TRY_LOGOUT = 'member/TRY_LOGOUT';
export const TOKEN = 'member/TOKEN';
export const SEARCH_MEMBERS = 'member/SEARCH_MEMBERS'
export const TRY_SIGNUP = 'member/TRY_SIGNUP'

// 액션 함수
const actions = createActions({
    [GET_MEMBERS]: () => {},
    [TRY_LOGIN]: () => {},
    [TRY_LOGOUT]: () => {},
    [TOKEN]: () => {},
    [TRY_SIGNUP]: () => {}
});

export const memberReducer = handleActions(
    {
        [GET_MEMBERS]: (state, { payload }) => {

            return payload
        },

        [TRY_LOGIN]: (state, { payload }) => {
            
            //console.log("event id : ", payload.event.id)
            //console.log("event value : ", payload.event.value)

            if(payload.event.id === 'id') {
                state[0].id = payload.event.value
            } else if(payload.event.id === 'password') {
                state[0].password = payload.event.value
            }

            //console.log(state[0])

            return [...state];
        },

        [TRY_LOGOUT]: (state, { payload }) => {

            state[0].name = '';
            state[0].age =  0;
            state[0].id =  '';
            state[0].password = '';

            console.log("fail ", state)

            return [...state];
        },

        [TOKEN]: (state, { payload }) => {

            state = payload.accessToken;

            return {...state}
        },

        [TRY_SIGNUP]:(state, { payload }) => {

            state[0][payload.id] = payload.value;

            console.log('안녕', state[0])
            return state;
        }

    }, initialState
);

export const searchMemberReducer = handleActions(
        {
            [SEARCH_MEMBERS]: (state, { payload }) => {

                switch(payload.event.id) {
                    case 'id': state[2].searchId = payload.event.value;
                }

                return state;
            }
        }, initialState
    );