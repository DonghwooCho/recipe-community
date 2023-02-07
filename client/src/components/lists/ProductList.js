import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { callGetSearchProductAPI } from "../../apis/connect";
import { MOVE_PAGE, SETTING } from "../../modules/paginationModule";
import { NEW_BOARD, SHOW_PRODUCTS } from "../../modules/productModule";
import { writeBoardAlert } from "../common/alertDesign";
import productListStyle from "./productListStyle.module.css";

function ProductList() {
  const param = useParams("pageNum");
  const navigate = useNavigate();
  const products = useSelector((state) => state.productReducer);
  const pagination = useSelector((state) => state.paginationReducer);
  const searchResult = useSelector((state) => state.searchProductReducer[1]);

  //console.log("parrrrrram", param)
  console.log("product", products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(callGetSearchProductAPI(searchResult.searchTitle, pagination));
    dispatch({ type: SETTING, payload: param }); // 페이지네이션
    //console.log('aaa', pagination[0])
  }, [pagination[0].offset]);

  // const onClickDelete = () => {
  //     dispatch(callDeleteProductAPI())
  // }

  const isOn = async () => {
    const auth = await axios("http://localhost:5000/auth", {
      headers: { accessToken: localStorage.getItem("accessToken") },
    });
    console.log(
      "qkwqk",
      auth.config.headers.accessToken,
      localStorage.getItem("accessToken")
    );
    dispatch({ type: NEW_BOARD });
    console.log(auth.config.headers.accessToken);
    if (
      auth.config.headers.accessToken === null ||
      typeof auth.config.headers.accessToken == "undefined"
    ) {
      writeBoardAlert();
      navigate("/signin");
    }
  };

  const onClickHandler = async () => {
    dispatch(callGetSearchProductAPI(searchResult.searchTitle, pagination));
    dispatch({ type: SETTING });
  };

  const onChangeHandler = (e) => {
    dispatch({ type: SHOW_PRODUCTS, payload: { event: e.target } });
  };

  const onKeyUpHandler = () => {
    if (window.event.keyCode == 13) {
      onClickHandler();
    }
  };

  const movePage = () => {
    dispatch({ type: MOVE_PAGE, payload: param.pageNum });
    //console.log('qoekek', pagination[0]);
  };

  return (
    <div className={productListStyle.productList}>
      {/* <h1 className={ productListStyle.title }>게시판 목록</h1> */}
      <div className={productListStyle.boardTop}>
        <div className={productListStyle.search}>
          <input
            className={productListStyle.searchInput}
            type="text"
            name="title"
            id="title"
            placeholder="게시물 제목을 입력하세요."
            onChange={onChangeHandler}
            onKeyUp={onKeyUpHandler}
          />
          <button
            className={productListStyle.searchButton}
            type="submit"
            onClick={onClickHandler}
          >
            검색
          </button>
        </div>

        <div className={productListStyle.search}>
          <NavLink
            className={productListStyle.write}
            to="/product/write"
            onClick={isOn}
          >
            글쓰기
          </NavLink>
        </div>
      </div>

      <table className={productListStyle.boardList}>
        <thead>
          <tr>
            <th className={productListStyle.th1}>번호</th>
            <th className={productListStyle.th2}>제목</th>
            <th className={productListStyle.th3}>작성자</th>
            <th className={productListStyle.th4}>작성 날짜</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {products.map((product) => (
                <div>
                  <tr>
                    <NavLink
                      key={product.boardCode}
                      className={productListStyle.navlinkList}
                      to={`/product/${param.pageNum}/${product.boardCode}`}
                    >
                      {/* <button onClick={ onClickDelete }>X</button> */}
                      <td className={productListStyle.td1}>
                        {product.boardCode}
                      </td>
                    </NavLink>
                  </tr>
                  <hr />
                </div>
              ))}
            </td>
            <td>
              {products.map((product) => (
                <div>
                  <tr>
                    <NavLink
                      key={product.boardCode}
                      className={productListStyle.navlinkList}
                      to={`/product/${param.pageNum}/${product.boardCode}`}
                    >
                      {/* <button onClick={ onClickDelete }>X</button> */}
                      <td className={productListStyle.td2}>
                        {product.boardTitle}
                      </td>
                    </NavLink>
                  </tr>
                  <hr />
                </div>
              ))}
            </td>
            <td>
              {products.map((product) => (
                <div>
                  <tr>
                    <NavLink
                      key={product.boardCode}
                      className={productListStyle.navlinkList}
                      to={`/product/${param.pageNum}/${product.boardCode}`}
                    >
                      {/* <button onClick={ onClickDelete }>X</button> */}
                      <td className={productListStyle.td3}>
                        {product.boardOwner}
                      </td>
                    </NavLink>
                  </tr>
                  <hr />
                </div>
              ))}
            </td>
            <td>
              {products.map((product) => (
                <div>
                  <tr>
                    <NavLink
                      key={product.boardCode}
                      className={productListStyle.navlinkList}
                      to={`/product/${param.pageNum}/${product.boardCode}`}
                    >
                      {/* <button onClick={ onClickDelete }>X</button> */}
                      <td className={productListStyle.td3}>
                        {product.boardDate}
                      </td>
                    </NavLink>
                  </tr>
                  <hr />
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>

      <div className={productListStyle.pageList}>
        {/* 페이지네이션  */}
        <div className={productListStyle.search}>
          <button className={productListStyle.pageMove}>이전</button>
          {pagination[0].currentPageBoard.map((pageNum) => (
            <NavLink
              className={productListStyle.navlink}
              key={pageNum}
              to={`/product/${pageNum}`}
              onClick={movePage}
            >
              {pageNum}
            </NavLink>
          ))}
          <button className={productListStyle.pageMove}>다음</button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
