import MemberList from "../components/lists/MemberList";
import MemberStyle from "./Member.module.css";

function Member() {
    
    return(
        <div className={ MemberStyle.member }>
            {/* <h1 className={ MemberStyle.title }>회원 목록 페이지입니다.</h1> */}
            <MemberList/>
        </div>
    );
}

export default Member;