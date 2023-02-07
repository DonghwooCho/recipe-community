import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { callGetSearchMemberAPI } from '../apis/connect';
import axios from 'axios';

function TestPage() {

    const fastAPITest = async () => {
        const name = (Math.random() * 10);
        const result = await axios(`http://127.0.0.1:9000/hello/${name}`);
        console.log(result.data.message);
    }

    return(
        <div>
            <h1>테스트 페이지 입니다.</h1>
            <button onClick={ fastAPITest }>테스트</button>
        </div>
    )
}

export default TestPage;