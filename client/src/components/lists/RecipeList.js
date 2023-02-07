import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RecipeInf from "../items/RecipeInf";
import { callRecipeAPI } from "../../apis/connect";
import RecipeListStyle from "./RecipeList.module.css"
import { NavLink, useParams } from "react-router-dom";
import { MOVE_PAGE, MOVE_PAGE_MEMU, SETTING, SETTING_MENU } from "../../modules/paginationModule";

function RecipeList() {

    const param = useParams('pageNum');
    const pagination = useSelector(state => state.paginationReducer);
    const result = useSelector(state => state.recipeReducer);
    // console.log('recipeReducer result : ', result);

    const recipes = result['row'];
    console.log('recipes : ', recipes);

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(callRecipeAPI(pagination))
            console.log('aaaa', result)
            dispatch({ type: SETTING_MENU, payload: param }); // 페이지네이션
            console.log(param)
        },
        [pagination[2].offset]
    );

    const movePage = () => {
        dispatch({ type: MOVE_PAGE_MEMU, payload: param.pageNum})
        console.log('qoekek', pagination[2]);
    }

    return (
        recipes && <div>
            <div className={ RecipeListStyle.pageList }>
                {/* 페이지네이션  */}
                <div className={ RecipeListStyle.search }>
                        <button className={ RecipeListStyle.pageMove }>
                            이전
                        </button> 
                    {
                    pagination[2].currentPageMenu.map(pageNum => (
                            
                            <NavLink    className={ RecipeListStyle.navlink }
                                        key={ pageNum }
                                        to={`/menu/${ pageNum }`}
                                        onClick={ movePage }>
                                        { pageNum }
                            </NavLink>
                            )
                        )
                    }
                    <button className={ RecipeListStyle.pageMove }>
                        다음
                    </button> 
                </div>
             </div>
        
            <div className={ RecipeListStyle.RecipeList }>
                {/* <h2>레시피 개수 : { recipes.length }</h2> */}
                {/* <button onClick={ () => dispatch(callRecipeAPI(result)) } >이전</button> */}
                {/* <button onClick={ () => dispatch(callRecipeAPI(result)) } >다음</button> */}
                { recipes.map((recipe, index) => {
                    return (
                        <div style={{
                            width: "16.7vw",
                            height: "27vh",
                            backgroundColor: "#183981",
                            border: "2px solid",
                            borderRadius: "15vh",
                            color: "white",
                            display: "inline-block",
                            margin: "12px",
                            textAlign: "center" 
                        }}>
                            <RecipeInf key={ result.RESULT.CODE } recipe={ recipe } index={ index }/>
                        </div>
                    )
                })}
            </div>
        </div>
        
    );
}

export default RecipeList;