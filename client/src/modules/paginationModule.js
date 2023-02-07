import { createActions, handleActions } from 'redux-actions';

const initialState = [
    {
        offset: 0, // 시작 게시물 번호
        limit: 10, // 한 페이지 개수
        current: 1, // 현재 페이지
        list: 10, // 페이지 당 목록 개수
        total: 0, // 총 페이지 개수
        totalBoard: 21, // 총 게시물 개수 ( 초기 게시물 13개 )
        currentPageBoard: [] // 페이지 목록
    },
    {
        offset: 0, // 시작 게시물 번호
        limit: 10, // 한 페이지 개수
        current: 1, // 현재 페이지
        list: 10, // 페이지 당 목록 개수
        total: 0, // 총 페이지 개수
        totalMember: 32, // 총 게시물 개수 ( 초기 회원 25명 )
        currentPageMember: [] // 페이지 목록
    },
    {
        offset: 0, // 시작 게시물 번호
        limit: 9, // 한 페이지 개수
        current: 1, // 현재 페이지
        list: 10, // 페이지 당 목록 개수
        total: 0, // 총 페이지 개수
        totalMenu: 64, // 총 메뉴 개수 ( 초기 메뉴 247개 )
        currentPageMenu: [] // 페이지 목록
    }
];

export const SETTING = 'pagination/SETTING';
export const MOVE_PAGE = 'pagination/MOVE_PAGE';
export const SETTING_MEMBER = 'pagination/SETTING_MEMBER';
export const MOVE_PAGE_MEMBER = 'pagination/MOVE_PAGE_MEMBER';
export const SETTING_MENU = 'pagination/SETTING_MENU';
export const MOVE_PAGE_MEMU = 'pagination/MOVE_PAGE_MENU';

const actions = createActions({
    [SETTING]: () => {},
    [MOVE_PAGE]: () => {},
    [SETTING_MEMBER]: () => {},
    [MOVE_PAGE_MEMBER]: () => {},
    [SETTING_MENU]: () => {},
    [MOVE_PAGE_MEMU]: () => {}
});

export const paginationReducer = handleActions(
    {
        [SETTING]: (state, { payload }) => {

            state[0].total = Math.ceil(state[0].totalBoard / state[0].limit);

            const numForPagination = [];
            for(let i = 0; i < state[0].total; i++) {
                numForPagination.push(i + 1);
            }
            console.log(numForPagination)
            state[0].currentPageBoard = numForPagination;
            //numForPagination.slice(state[0].offset, state[0].offset + state[0].limit)

           // console.log('page :', state[0])

            return state;
        },
        
        [MOVE_PAGE]: (state, { payload }) => {
            
            //console.log("aaaa", payload)
            state[0].offset = (payload - 1) * state[0].limit;

            return state;
        },

        [SETTING_MEMBER]: (state, { payload }) => {

            state[1].total = Math.ceil(state[1].totalMember / state[1].limit);

            const numForPagination = [];
            for(let i = 0; i < state[1].total; i++) {
                numForPagination.push(i + 1);
            }
            console.log(numForPagination)
            state[1].currentPageMember = numForPagination;
            //numForPagination.slice(state[1].offset, state[1].offset + state[1].limit)

           // console.log('page :', state[0])

            return state;
        },

        [MOVE_PAGE_MEMBER]: (state, { payload }) => {
            
            //console.log("aaaa", payload)
            state[1].offset = (payload - 1) * state[1].limit;

            return state;
        },

        [SETTING_MENU]: (state, { payload }) => {

            state[2].total = Math.ceil(state[2].totalMenu / state[2].limit);

            const numForPagination = [];
            for(let i = 0; i < state[2].total; i++) {
                numForPagination.push(i + 1);
            }
            console.log(numForPagination)
            state[2].currentPageMenu = numForPagination;
            //numForPagination.slice(state[2].offset, state[2].offset + state[2].limit)

           // console.log('page :', state[0])

            return state;
        },

        [MOVE_PAGE_MEMU]: (state, { payload }) => {
            
            //console.log("aaaa", payload)
            state[2].offset = (payload - 1) * state[2].limit;

            return state;
        }

        
    }, initialState
);
