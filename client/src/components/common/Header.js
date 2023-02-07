import headerStyle from "./HeaderStyle.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TRY_LOGOUT } from "../../modules/memberModule";
import { LOGOUT } from "../../modules/authModule";
import { logoutAlert } from './alertDesign';

function Header () {

    const navigate = useNavigate();
    const authResult = useSelector(state => state.authReducer);
    const member = useSelector(state => state.memberReducer[0]);
    //console.log(member)
    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch({ type: LOGOUT });
        dispatch({ type: TRY_LOGOUT });
        //console.log(authResult[0].isAuth);
        logoutAlert();
    };

    //console.log("isAuth : " , authResult[0].isAuth)
    return (
        !authResult[0].isAuth? 
        <div className={ headerStyle.header }>
            <div className={ headerStyle.wrapper }>
                <NavLink expect to="/" className={ headerStyle.navbar }>
                    <h1 className={ headerStyle.title }>Gogingamlae Board</h1>
                </NavLink> 
                <NavLink to="/signin"><p className={ headerStyle.signUp}> 로그인 </p></NavLink> 
                <NavLink to="/signup"><p className={ headerStyle.signIn}> 회원가입 </p></NavLink>
            </div>
        </div>
        :<div className={ headerStyle.header }>
        <div className={ headerStyle.wrapper }>
            <h1 className={ headerStyle.title }>Buttetin Board</h1>
            <NavLink to="/"
                    onClick={ onClickHandler }>
                        <p className={ headerStyle.signOut}> 로그아웃 </p>
            </NavLink>
            <p className={ headerStyle.signIn}> {authResult[0].id}님 환영합니다 </p>
        </div>
    </div>

    );
}

export default Header;