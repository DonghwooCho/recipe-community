import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { callGetMemberAPI, callGetSearchMemberAPI } from '../../apis/connect';
import { SEARCH_MEMBERS } from '../../modules/memberModule';
import { MOVE_PAGE_MEMBER, SETTING_MEMBER } from '../../modules/paginationModule';
import memberListStyle from './memberListStyle.module.css';

function MemberList() {

    const param = useParams('pageNum');
    const results = useSelector(state => state.memberReducer);
    const pagination = useSelector(state => state.paginationReducer[1]);
    const searchResult = useSelector(state => state.searchMemberReducer[2]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(callGetMemberAPI(pagination));
        dispatch({ type: SETTING_MEMBER, payload: param });
        console.log(pagination)
    }, [pagination.offset])

    const onClickHandler = async () => {
        dispatch(callGetSearchMemberAPI(searchResult.searchId));
    };

    const onChangeHandler = (e) => {
        dispatch({ type: SEARCH_MEMBERS, payload: { event: e.target} });
    };

    const onKeyUpHandler = () => {
        if(window.event.keyCode==13) {
            onClickHandler();
        }
    };

    const movePage = () => {
        dispatch({ type: MOVE_PAGE_MEMBER, payload: param.pageNum})
        console.log(pagination)
    }

    return( 
        <div className={ memberListStyle.memberList }>
            <h1>자랑스러운 회원 소개</h1>
            <div className={ memberListStyle.search }>
                <input  className={ memberListStyle.searchInput }
                        type="text"
                        name="id"
                        id="id"
                        placeholder="검색할 아이디를 입력하세요."
                        onChange={ onChangeHandler }
                        onKeyUp={ onKeyUpHandler }/>
                <button className={ memberListStyle.searchButton }
                type="submit" onClick={ onClickHandler }>검색</button>
            </div>

            <div className={ memberListStyle.pageList }>
                {/* 페이지네이션  */}
                <div className={ memberListStyle.search }>
                            <button className={ memberListStyle.pageMove }>
                                이전
                            </button> 
                        {
                        pagination.currentPageMember.map(pageNum => (
                                <NavLink    className={ memberListStyle.navlink }
                                            key={ pageNum }
                                            to={`/member/${ pageNum }`}
                                            onClick={ movePage }>
                                            { pageNum }
                                </NavLink>
                                )
                            )
                        }
                    <button className={ memberListStyle.pageMove }>
                        다음
                    </button> 
                </div>
            </div>
            <div className={ memberListStyle.memberList }>
                <div>
                    { results.map(member =>
                    <span key={ results.id } className={ memberListStyle.memberBox }>
                        <b>아이디 : { member.id }</b><br/>
                        이름 : { member.name }<br/>
                        나이 : { member.age }<br/>
                    </span>) }
                </div>
            </div>
        </div>
    );
}

export default MemberList;