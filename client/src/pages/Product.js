import ProductList from "../components/lists/ProductList";
import productStyle from "./ProductStyle.module.css";

function Product() {

    return(
        <div className={ productStyle.product }>
            {/* <h1 className={ productStyle.title }>게시판 목록 페이지입니다.</h1> */}
            <ProductList/>
        </div>
    );
}

export default Product;