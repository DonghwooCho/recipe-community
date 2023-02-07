import { createActions, handleActions } from 'redux-actions';

const initialState = [
    {
        boardContent: 0,
        boardTitle: '',
        boardContent: '',
        boardOwner: '',
        boardDate: ''
    },
    {
        searchNum: 0,
        searchTitle: '',
        searchId: ''
    }
];

export const GET_PRODUCTS = 'product/GET_PRODUCTS';
export const SHOW_PRODUCTS = 'product/SHOW_PRODUCTS';
export const INSERT_BOARD = 'product/INSERT_BOARD';
export const NEW_BOARD = 'product/NEW_BOARD';

const actions = createActions({
    [GET_PRODUCTS]: () => {},
    [SHOW_PRODUCTS]: () => {},
    [INSERT_BOARD]: () => {},
    [NEW_BOARD]: () => {}
});


export const productReducer = handleActions(
    {
        [GET_PRODUCTS]: (state, { payload }) => {

            return payload;
        },

        [INSERT_BOARD]: (state, { payload }) => {
            
            console.log("event id : ", payload.event.id)
            console.log("event value : ", payload.event.value)

            if(payload.event.id === 'title') {
                state[0].boardTitle = payload.event.value
            } else if(payload.event.id === 'content') {
                state[0].boardContent = payload.event.value
            }

            console.log("state : ", state[0])

            return state;
        },

        [NEW_BOARD]: (state, { payload }) => {

            state[0].boardTitle = '';
            state[0].boardContent = '';

            return state;
        }

    }, initialState
);

export const searchProductReducer = handleActions(
    {
        [SHOW_PRODUCTS]: (state, { payload }) => {

            switch(payload.event.id) {
                case 'title': state[1].searchTitle = payload.event.value;
            }
            console.log('a111111111111aa', state)
            return state;
        }

    }, initialState
);
