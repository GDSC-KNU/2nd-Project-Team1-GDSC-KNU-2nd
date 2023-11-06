import Footer from "../../../common/Footer";
// import Layout from "../../../common/Layout";
// import Header from "../../../common/Header";
import classes from "./MyPage.module.css";
// import warning from "../../../../Assets/warning.png";
import Journey from "./Jouney";

const DUMMY_DATA = [
  { id: "p1", region: "수성구, 달서구", date: "2023.10.02~2023.10.03" },
];

const MyPage = (props) => {
  return (
    <div className={classes.main}>
      <header className={classes.header}>
        <h4 className={classes.headerContents}>마이 페이지</h4>
      </header>
      <ul className={classes.buttonBox}>
        <li>
          <button className={classes.button}>내 여행일정</button>
          <button className={classes.button}>완료한 일정</button>
        </li>
      </ul>
      <main className={classes.pageBox}>
        {/* <img
          src={warning}
          alt="경고 이미지입니다."
        />
        <h1 className={classes.warning}>생성된 일정이 없습니다.</h1> */}
        {DUMMY_DATA.map((data) => (
          <Journey
            key={data.id}
            id={data.id}
            region={data.region}
            date={data.date}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default MyPage;
