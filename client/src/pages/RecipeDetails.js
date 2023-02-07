import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { callRecipeDetail } from '../apis/connect'; 
import RecipeDetailsStyle from "./RecipeDetails.module.css";
import noImage from "../components/items/noImage.png";

function RecipeDetails() {

    const { index } = useParams();
    const result = useSelector(state => state.recipeReducer);
    const dispatch = useDispatch();

    const handleImgError = (e) => {
        e.target.src = noImage
    }

    //console.log(result)
    useEffect(
        () => {
            dispatch(callRecipeDetail(index))
        },
        []
    );

    return(
        <div className={ RecipeDetailsStyle.RecipeDetails}>
            <h1>{result.RCP_NM}</h1>
            <br/>
            <img src={result.ATT_FILE_NO_MAIN} alt="사진 불러오는 중... 잠시만 기다려주세요" />
            <br/>
            <h2>메뉴 구분</h2>
            <h3>{result.RCP_PAT2}</h3>
            <h2>조리 방법</h2>
            <h3>{result.RCP_WAY2}</h3>
            <h2>영양 성분 & 열량</h2>
            <table className={ RecipeDetailsStyle.table}> 
                <thead>
                    <th>탄수화물</th>
                    <th>단백질</th>
                    <th>지방</th>
                    <th>열량</th>
                    <th>나트륨</th>
                </thead>
                <tr>
                    <td>{result.INFO_CAR}g</td>
                    <td>{result.INFO_PRO}g</td>
                    <td>{result.INFO_FAT}g</td>
                    <td>{result.INFO_ENG}kcal</td>
                    <td>{result.INFO_NA}mg</td>
                </tr>
            </table>
            <div className={ RecipeDetailsStyle.recipe}>
                <h2>재료</h2>
                <h3>{result.RCP_PARTS_DTLS}</h3>
                <br/>
                <h3>{result.MANUAL01}</h3>
                <img src={result.MANUAL_IMG01} onError={ handleImgError }/>
                <br/>
                <h3>{result.MANUAL02}</h3>
                <img src={result.MANUAL_IMG02} onError={ handleImgError }/>
                <br/>
                <h3>{result.MANUAL03}</h3>
                <img src={result.MANUAL_IMG03} onError={ handleImgError }/>
                <br/>
                <h3>{result.MANUAL04}</h3>
                <img src={result.MANUAL_IMG04} onError={ handleImgError }/>
                <br/>
                <h3>{result.MANUAL05}</h3>
                <img src={result.MANUAL_IMG05} onError={ handleImgError }/>
                <br/>
                <h3>{result.MANUAL06}</h3>
                <img src={result.MANUAL_IMG06} onError={ handleImgError }/>
                <br/>
                <h3>{result.MANUAL07}</h3>
                <img src={result.MANUAL_IMG07} onError={ handleImgError }/>
                <br/>
                <h3>{result.MANUAL08}</h3>
                <img src={result.MANUAL_IMG08} onError={ handleImgError }/>
                <br/>
                <h3>{result.MANUAL09}</h3>
                <img src={result.MANUAL_IMG09} onError={ handleImgError }/>
                <br/>
                <h3>{result.MANUAL10}</h3>
                <img src={result.MANUAL_IMG10} onError={ handleImgError }/>
                <br/>
                <h3>{result.MANUAL11}</h3>
                <img src={result.MANUAL_IMG11} onError={ handleImgError }/>
                <br/>
                <h3>{result.MANUAL12}</h3>
                <img src={result.MANUAL_IMG12} onError={ handleImgError }/>
                <br/>
                <h3>{result.MANUAL13}</h3>
                <img src={result.MANUAL_IMG13} onError={ handleImgError }/>
                <br/>
                <h3>{result.MANUAL14}</h3>
                <img src={result.MANUAL_IMG14} onError={ handleImgError }/>
                <br/>
                <h3>{result.MANUAL15}</h3>
                <img src={result.MANUAL_IMG15} onError={ handleImgError }/>
                <br/>
                <h3>{result.MANUAL16}</h3>
                <img src={result.MANUAL_IMG16} onError={ handleImgError }/>
                <br/>
                <h3>{result.MANUAL17}</h3>
                <img src={result.MANUAL_IMG17} onError={ handleImgError }/>
                <br/>
                <h3>{result.MANUAL18}</h3>
                <img src={result.MANUAL_IMG18} onError={ handleImgError }/>
                <br/>
                <h3>{result.MANUAL19}</h3>
                <img src={result.MANUAL_IMG19} onError={ handleImgError }/>
                <br/>
                <h3>{result.MANUAL20}</h3>
                <img src={result.MANUAL_IMG20} onError={ handleImgError }/>
                <br/>
            </div>

        </div>
    )
}

export default RecipeDetails;