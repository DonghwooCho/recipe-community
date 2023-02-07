import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { INSERT_BOARD, NEW_BOARD, SET_IMAGE } from "../modules/productModule";
import {
  writeBoardCancleAlert,
  writeBoardFailAlert,
  writeBoardSuccessAlert,
} from "../components/common/alertDesign";
import WriteBoardStyle from "./WriteBoard.module.css";
import axios from "axios";

function WriteBoard() {
  const navigate = useNavigate();
  const products = useSelector((state) => state.productReducer[0]);
  const member = useSelector((state) => state.memberReducer[0]);
  // console.log("게시물 정보들 : ", products);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    dispatch({ type: INSERT_BOARD, payload: { event: e.target } });
    // console.log("게시물 정보들 : ", products);
  };

  const onClickHandler = () => {
    console.log("게시물 정보들 : ", products);
    axios({
      method: "post",
      url: "http://localhost:5000/product/write",
      data: {
        boardTitle: products.boardTitle,
        boardContent: products.boardContent,
        boardOwner: member,
      },
    }).catch(writeBoardFailAlert());
    // console.log(products);
    if (products.boardTitle != "" && products.boardContent != "") {
      writeBoardSuccessAlert();
      navBack();
    }
  };
  // console.log("aaa", products);
  const cancle = () => {
    if (products.boardTitle == "" && products.boardContent == "") {
      navBack();
    } else {
      writeBoardCancleAlert(navBack);
    }
  };

  const navBack = () => {
    navigate(-1);
  };

  // const [image, setImage] = useState({
  //     image_file: "",
  //     preview_URL: "img/default_image.png",
  //   });

  // const saveImage = (e) => {
  //     const fileReader = new FileReader();

  //     if(e.target.files[0]){
  //         fileReader.readAsDataURL(e.target.files[0])
  //       }

  //     fileReader.onload = () => {
  //         setImage(
  //             {
  //               image_file: e.target.files[0],
  //               preview_URL: fileReader.result
  //             }
  //           )
  //     }

  //     console.log(image)
  //     console.log('ahha')
  // }

  return (
    <div className={WriteBoardStyle.writeBoard}>
      <h1>게시글</h1>
      <label className={WriteBoardStyle.label} htmlFor="title">
        제목
      </label>
      <br />
      <input
        className={WriteBoardStyle.title}
        type="text"
        name="title"
        id="title"
        autoFocus
        placeholder="제목을 입력하세요."
        onChange={onChangeHandler}
      />
      <br />
      <label className={WriteBoardStyle.label} htmlFor="content">
        내용
      </label>
      <br />
      <textarea
        className={WriteBoardStyle.content}
        type="text"
        name="content"
        id="content"
        rows="1"
        placeholder="내용을 입력하세요."
        onChange={onChangeHandler}
      />
      <br />

      {/* 파일 업로드 구현 http://localhost:9000/photo */}
      {/* <label className={ WriteBoardStyle.uploadLabel}
                     htmlFor="file"
            >
                이미지 업로드
            </label>
            <input className={ WriteBoardStyle.upload}
                          onChange={ saveImage }
                          id="file"
                          type="file"
                          accept="image/*"/> */}

      <button
        className={WriteBoardStyle.button}
        type="submit"
        onClick={onClickHandler}
      >
        등록
      </button>
      <button className={WriteBoardStyle.back} onClick={cancle}>
        취소
      </button>
      <br />
    </div>
  );
}

export default WriteBoard;
