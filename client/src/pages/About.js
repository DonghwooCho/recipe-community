import aboutStyle from "./AboutStyle.module.css";

function About() {
  return (
    <div className={aboutStyle.about}>
      <h1>소개 화면입니다.</h1>
      <br />
      <h2>제 이름은 조동후입니다.</h2>
    </div>
  );
}

export default About;
