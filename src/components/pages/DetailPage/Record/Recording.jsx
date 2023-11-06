import Footer from "../../../common/Footer";
import styles from "./Recording.module.css";
// import photo from "../../../../Assets/photo.png";
import logoBtn from "../../../../Assets/buttonLogo.png";
import Images from "./Images";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Recording = () => {
  const navigate = useNavigate();
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredContent, setEnteredContent] = useState("");

  const titleChangeHandler = (event) => {
    // console.log("titleChangeHandler", event.target.value);
    setEnteredTitle(event.target.value);
  };

  const contentChangeHandler = (event) => {
    // console.log("contentChangeHandler", event.target.value);
    setEnteredContent(event.target.value);
  };

  const submitHandler = (event) => {
    if (confirm("업로드하시겠습니까?")) {
      alert("확인 되었습니다.");
      event.preventDefault();
      // const makeFormData = { title: setEnteredTitle, content: setEnteredTitle };
      setEnteredTitle("");
      setEnteredContent("");
      navigate("/mypage");
    } else {
      event.preventDefault();
    }
  };

  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <h4 className={styles.headerContents}>작성하기</h4>
      </header>
      <main className={styles.mainContents}>
        <section>
          <form onSubmit={submitHandler}>
            <article className={styles.registerPhoto}>
              <Images />
            </article>
            <article className={styles.registerTitle}>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
                placeholder="제목"
                className={styles.title}
              />
            </article>
            <article className={styles.registerContent}>
              <textarea
                value={enteredContent}
                onChange={contentChangeHandler}
                placeholder="여행 중 가장 기억에 남는 순간에 대해 서술해보세요. 아름다운 풍경을 마주했거나, 재미있는 사건을 마주하거나, 소중한 인연을 만났을 수도 있습니다. 그 순간이 어떻게 특별했는지, 왜 인상깊게 남았는지를 상세하게 기록해보세요."
                wrap="hard"
                className={styles.Input}
              />
            </article>
            <div className={styles.btnAction}>
              <button type="submit" className={styles.submitBtn}>
                <img src={logoBtn} alt="버튼로고 이미지입니다." />
              </button>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Recording;
