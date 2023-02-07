import { combineReducers } from 'redux';
import { productReducer, searchProductReducer } from './productModule';
import { memberReducer, searchMemberReducer } from './memberModule';
import { paginationReducer } from './paginationModule';
import { authReducer } from './authModule';
import { recipeReducer } from './RecipeModule';

const rootReducer = combineReducers({
  
    productReducer
  , searchProductReducer

  , memberReducer
  , searchMemberReducer

  , authReducer

  , paginationReducer
  
  , recipeReducer

});

export default rootReducer;