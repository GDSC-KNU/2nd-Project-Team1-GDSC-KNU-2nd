import headerLogo from "../../Assets/headerLogo.png";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <img src={headerLogo} alt="헤더 로고입니다." />
      </div>
    </header>
  );
};

export default Header;
