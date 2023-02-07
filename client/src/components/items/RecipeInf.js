import { NavLink, useParams } from 'react-router-dom';
import { useEffect } from 'react';
// import { callRecipeDetail } from '../../apis/RecipeAPI';

function RecipeInf({ recipe, index }) {

    const { pageNum } = useParams();

    useEffect(
        () => {
            // dispatch(callRecipeDetail(index));
        }
        , []
    );

    return (
        <div>    
            <h3 
                style={{
                height: "3vh",
                whiteSpace: "norwal",
                color: "white"
            }}>
                <NavLink style={{textDecoration: "none",
                                 color: "#F3F3F3",
                                 fontSize: "15px"
                                }}
                        to={`/menu/${ pageNum }/${ index }`}>
                        { recipe.RCP_NM }
                </NavLink>
            </h3>
            {/* <h4>메뉴 구분 : { recipe.RCP_PAT2 }</h4> */}
            {/* <h4>조리 방법 : { recipe.RCP_WAY2 }</h4> */}
            <img 
                src={recipe.ATT_FILE_NO_MK}
                style={{ width: "13vw", 
                         height: "13vh",
                         border: "solid",
                         borderRadius: "1em",
                         borderColor: "black"
                      }}
            />
        </div>
    );
}

export default RecipeInf;