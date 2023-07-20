import styles from "./Footer.module.css";
//import homeBtn from "../../Assets/home.png";
// import plusCircleBtn from "../../Assets/plus-circle.png";
// import mapBtn from "../../Assets/map.png";
import { AiOutlineHome, AiOutlinePlusCircle} from "react-icons/ai";
import { GiMapleLeaf } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.contents}>
        <li>
          {/* <img src={homeBtn} alt="홈 버튼입니다."/> */}
          <AiOutlineHome size="27" />
        </li>
        <li>
          {/* <img
            src={plusCircleBtn}
            alt="일정추가하기 버튼입니다."
          /> */}
          <AiOutlinePlusCircle size="27" />
        </li>
        <li>
          {/* <img src={mapBtn} alt="마이페이지 버튼입니다." /> */}
          <GiMapleLeaf size="27" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
