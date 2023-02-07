import { createActions, handleActions } from "redux-actions";

/* 초기 state값 */
const initialState = [
    { 
        id: 0,
        recipeNum: 0,
        menuName: '안녕',
        isThere: true
    }
];

/* 액션 타입 설정 */
export const GET_RECIPES = 'recipes/GET_RECIPES';
export const GET_COUNTS = 'recipes/GET_COUNTS';
export const GET_MENUNAME = 'recipes/GET_MENUNAME';

/*레시피 관련 액션 함수 */
const actions = createActions({
    [GET_RECIPES]: () => {},
    [GET_COUNTS]: () => {},
    [GET_MENUNAME]: () => {}
});

//console.log('recipeActions : ', actions);

/* 리듀서 함수 */
export const recipeReducer = handleActions(
    {
        [GET_RECIPES]: (state = initialState[0], { payload }) => {

            return payload;
        },
        [GET_COUNTS]: (state = initialState[0], { payload }) => {

            return payload;
        },
        [GET_MENUNAME]: (state= initialState[0], { payload }) => {
 
            //console.log('menuName : ', payload);

            return payload;
        }
    },
    initialState
);

export default recipeReducer;

