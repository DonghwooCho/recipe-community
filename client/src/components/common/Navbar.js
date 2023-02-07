import navbarStyle from "./NavbarStyle.module.css";
import { NavLink }  from 'react-router-dom';

function Navbar() {

    return(
        <div className={ navbarStyle.navbar }>
            <NavLink to='/' className={ navbarStyle.navlink }>메인 화면</NavLink><br/>
            <NavLink to='/about' className={ navbarStyle.navlink }>소개 화면</NavLink><br/>
            <NavLink to={`/product/1`} className={ navbarStyle.navlink }>게시판</NavLink><br/>
            <NavLink to='/member/1' className={ navbarStyle.navlink }>회원 목록</NavLink><br/>
            {/* <NavLink to='/member/test' className={ navbarStyle.navlink }>테스트 화면</NavLink><br/> */}
            <NavLink to='/menu/1' className={ navbarStyle.navlink }>메뉴 목록</NavLink><br/>
        </div>
    );
}

export default Navbar;