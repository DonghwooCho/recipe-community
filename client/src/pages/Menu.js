import RecipeList from "../components/lists/RecipeList";
import { useDispatch, useSelector } from "react-redux";
import MenuStyle from "./Menu.module.css";


function Menu() {

     const result = useSelector(state => state.recipeReducer)

    return(
        <div className={ MenuStyle.Menu }>
            {/* <h1 >메뉴 목록</h1> */}
            <RecipeList/>
        </div>
    )

}

export default Menu;