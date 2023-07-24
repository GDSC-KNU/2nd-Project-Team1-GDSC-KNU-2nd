import Footer from "../../../common/Footer";
import styles from "./Recording.module.css";

const Recording = () => {
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <h4 className={styles.headerContents}>작성하기</h4>
      </header>
      <main className={styles.mainContents}>
        <section>사진등록부분입니다.</section>
        <section>제목부분입니다.</section>
        <section>글쓰기 부분입니다.</section>
      </main>
      <Footer />
    </div>
  );
};

export default Recording;
