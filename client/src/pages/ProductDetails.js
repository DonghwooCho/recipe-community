import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { callGetProductOneAPI } from "../apis/connect"
import ProductDetailStyle from "./ProductDetails.module.css"

function ProductDetails() {

    const { pageNum } = useParams();
    const { boardCode } = useParams();

    const product = useSelector(state => state.productReducer);
    console.log(product[0])
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(callGetProductOneAPI(boardCode))
        
    }, [])

    return(
        <div className={ ProductDetailStyle.divbox}>
            <h1 className={ ProductDetailStyle.title}>제목 : {product[0].board_title}</h1>
            <h3 className={ ProductDetailStyle.owner}>작성자 : {product[0].board_owner}</h3>
            <h3 className={ ProductDetailStyle.owner}>날짜 : {product[0].board_date}</h3>
            <div className={ ProductDetailStyle.content}>{product[0].board_content}</div>
            <NavLink className={ ProductDetailStyle.back} to={`/product/${ pageNum }`}>돌아가기</NavLink><br/>
        </div>
    );
}

export default ProductDetails;