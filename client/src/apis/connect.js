import axios from "axios";
import { GET_PRODUCTS } from "../modules/productModule";
import { GET_MEMBERS } from "../modules/memberModule";
import { GET_COUNTS, GET_RECIPES } from "../modules/RecipeModule";

export function callGetProductAPI() {
  const requestURL = "http://localhost:5000/product";

  return async function getProducts(dispatch, getState) {
    const result = await axios(requestURL);

    console.log("result : ", result);
    dispatch({ type: GET_PRODUCTS, payload: result.data.results });
  };
}

export function callGetSearchProductAPI(searchTitle, pagination) {
  const requestURL = "http://localhost:5000/product/search";

  return async function getProducts(dispatch, getState) {
    const result = await axios({
      method: "post",
      url: requestURL,
      data: {
        title: searchTitle,
        offset: pagination[0].offset,
        limit: pagination[0].limit,
      },
    });

    console.log("result : ", result);
    dispatch({ type: GET_PRODUCTS, payload: result.data.results });
  };
}

export function callGetProductOneAPI(boardCode) {
  const requestURL = `http://localhost:5000/product/${boardCode}`;

  return async function getProducts(dispatch, getState) {
    const result = await axios(requestURL);

    console.log("result : ", result);
    dispatch({ type: GET_PRODUCTS, payload: result.data.results });
  };
}

// export function callDeleteProductAPI() {

//     const requestURL = 'http://localhost:5000/product';

//     return async function getProducts(dispatch, getState) {

//         const result = await axios.delete(requestURL);

//         console.log('result : ', result);
//         dispatch({ type: GET_PRODUCTS, payload: result.data.results });
//     }
// }

export function callGetMemberAPI(pagination) {
  const requestURL = "http://localhost:5000/member";

  return async function getMembers(dispatch, getState) {
    const result = await axios({
      url: requestURL,
      method: "post",
      data: {
        offset: pagination.offset,
        limit: pagination.limit,
      },
    });

    console.log("result : ", result);
    dispatch({ type: GET_MEMBERS, payload: result.data.result });
  };
}

export function callGetSearchMemberAPI(searchMember) {
  const requestURL = "http://localhost:5000/member/search";

  return async function getMembers(dispatch, getState) {
    const result = await axios({
      method: "post",
      url: requestURL,
      data: {
        id: searchMember,
      },
    });

    console.log("result : ", result);
    dispatch({ type: GET_MEMBERS, payload: result.data.result });
  };
}

// ------------------------------------------------------
export function callRecipeAPI(pagination) {
  const API_KEY = "c4a5d68f8faa4e11aadb";
  const SERVICE_NAME = "COOKRCP01";
  const RETURN_TYPE = "json";
  const START_NUM = "1";
  const END_NUM = "247";

  if (pagination[2].offset == 0) {
    const requestURL = `http://openapi.foodsafetykorea.go.kr/api/${API_KEY}/${SERVICE_NAME}/${RETURN_TYPE}/${
      pagination[2].offset
    }/${pagination[2].offset + pagination[2].limit + 1}`;

    return async function getRecipes(dispatch, getState) {
      const result = await fetch(requestURL)
        .then((res) => res.json())
        .then((data) => data[SERVICE_NAME]);

      console.log("result : ", result);

      dispatch({ type: GET_RECIPES, payload: result });
    };
  } else {
    const requestURL = `http://openapi.foodsafetykorea.go.kr/api/${API_KEY}/${SERVICE_NAME}/${RETURN_TYPE}/${
      pagination[2].offset + 1
    }/${pagination[2].offset + pagination[2].limit + 1}`;

    return async function getRecipes(dispatch, getState) {
      const result = await fetch(requestURL)
        .then((res) => res.json())
        .then((data) => data[SERVICE_NAME]);

      console.log("result : ", result);

      dispatch({ type: GET_RECIPES, payload: result });
    };
  }
}

export function callRecipeDetail(index) {
  const API_KEY = "c4a5d68f8faa4e11aadb";
  const SERVICE_NAME = "COOKRCP01";
  const RETURN_TYPE = "json";
  const START_NUM = "1";
  const END_NUM = "247";

  const requestURL = `http://openapi.foodsafetykorea.go.kr/api/${API_KEY}/${SERVICE_NAME}/${RETURN_TYPE}/${START_NUM}/${END_NUM}`;

  return async function getRecipeDetails(dispatch, getState) {
    const result = await fetch(requestURL)
      .then((res) => res.json())
      .then((data) => data[SERVICE_NAME]["row"][index]);

    //console.log('recipeNum : ', result);

    dispatch({ type: GET_COUNTS, payload: result });
  };
}
