import "./BtnList.css";
import styles from "./ActivityBtn.module.css";
import coffee from "../../../../assets/coffee.png";
import flower from "../../../../assets/flower.png";
import castle from "../../../../assets/castle.png";
import animal from "../../../../assets/animal.png";
import history from "../../../../assets/history.png";
import art from "../../../../assets/art.png";
import guide from "../../../../assets/guide.png";
import shot from "../../../../assets/shot.png";
import museum from "../../../../assets/museum.png";
import science from "../../../../assets/science.png";
import sightseeing from "../../../../assets/sightseeing.png";
import walking from "../../../../assets/walking.png";
import hiking from "../../../../assets/hiking.png";
import { useDispatch, useSelector } from "react-redux";
import { selectActivity } from "../../../store/selectSlice";

const AcitivityBtn = () => {
  const dispatch = useDispatch();
  const selectedActivities = useSelector(
    (state) => state.select.selectedActivities
  );

  const handleActivityClick = (activity) => {
    if (
      selectedActivities.length === 0 ||
      selectedActivities.length < 5 ||
      selectedActivities.includes(activity)
    ) {
      dispatch(selectActivity(activity));
    } else {
      alert("활동은 최대 5개까지만 선택가능합니다.");
    }
  };

  return (
    <div className="btnSection">
      <button
        className={`clickSquareBtn ${
          selectedActivities.includes("카페") ? "active" : ""
        }`}
        type="button"
        onClick={() => handleActivityClick("카페")}
      >
        <img
          src={coffee}
          alt="Coffee icons created by Chanut-is-Industries - Flaticon"
          className={styles.img}
        />
        카페
      </button>
      <button
        className={`clickSquareBtn ${
          selectedActivities.includes("경치관람") ? "active" : ""
        }`}
        type="button"
        onClick={() => handleActivityClick("경치관람")}
      >
        <img
          src={sightseeing}
          alt="Sightseeing icons created by amonrat rungreangfangsai - Flaticon"
          className={styles.img}
        />
        경치관람
      </button>
      <button
        className={`clickSquareBtn ${
          selectedActivities.includes("수목원/정원") ? "active" : ""
        }`}
        type="button"
        onClick={() => handleActivityClick("수목원/정원")}
      >
        <img
          src={flower}
          alt="Flower icons created by Smashicons - Flaticon"
          className={styles.img}
        />
        수목원 / 정원
      </button>
      <button
        className={`clickSquareBtn ${
          selectedActivities.includes("테마파크/아쿠아리움") ? "active" : ""
        }`}
        type="button"
        onClick={() => handleActivityClick("테마파크/아쿠아리움")}
      >
        <img
          src={castle}
          alt="Playground icons created by Smashicons - Flaticon"
          className={styles.img}
        />
        테마파크 / 아쿠아리움
      </button>
      <button
        className={`clickSquareBtn ${
          selectedActivities.includes("가벼운_산책") ? "active" : ""
        }`}
        type="button"
        onClick={() => handleActivityClick("가벼운_산책")}
      >
        <img
          src={walking}
          alt="Walking icons created by Freepik - Flaticon"
          className={styles.img}
        />
        가벼운 산책
      </button>
      <button
        className={`clickSquareBtn ${
          selectedActivities.includes("가벼운_등산") ? "active" : ""
        }`}
        type="button"
        onClick={() => handleActivityClick("가벼운_등산")}
      >
        <img
          src={hiking}
          alt="Hiking icons created by Smashicons - Flaticon"
          className={styles.img}
        />
        가벼운 등산
      </button>
      <button
        className={`clickSquareBtn ${
          selectedActivities.includes("역사") ? "active" : ""
        }`}
        type="button"
        onClick={() => handleActivityClick("역사")}
      >
        <img
          src={history}
          alt="Seoul icons created by Freepik - Flaticon"
          className={styles.img}
        />
        역사
      </button>
      <button
        className={`clickSquareBtn ${
          selectedActivities.includes("미술/예술") ? "active" : ""
        }`}
        type="button"
        onClick={() => handleActivityClick("미술/예술")}
      >
        <img
          src={art}
          alt="Painting icons created by Freepik - Flaticon"
          className={styles.img}
        />
        미술 / 예술
      </button>
      <button
        className={`clickSquareBtn ${
          selectedActivities.includes("자연/과학") ? "active" : ""
        }`}
        type="button"
        onClick={() => handleActivityClick("자연/과학")}
      >
        <img
          src={science}
          alt="Planet icons created by smalllikeart - Flaticon"
          className={styles.img}
        />
        자연 / 과학
      </button>
      <button
        className={`clickSquareBtn ${
          selectedActivities.includes("테마박물관") ? "active" : ""
        }`}
        type="button"
        onClick={() => handleActivityClick("테마박물관")}
      >
        <img
          src={museum}
          alt="Museum icons created by photo3idea_studio - Flaticon"
          className={styles.img}
        />
        테마박물관
      </button>
      <button
        className={`clickSquareBtn ${
          selectedActivities.includes("사격") ? "active" : ""
        }`}
        type="button"
        onClick={() => handleActivityClick("사격")}
      >
        <img
          src={shot}
          alt="Shooting icons created by Smashicons - Flaticon"
          className={styles.img}
        />
        사격
      </button>
      <button
        className={`clickSquareBtn ${
          selectedActivities.includes("동물/이색체험") ? "active" : ""
        }`}
        type="button"
        onClick={() => handleActivityClick("동물/이색체험")}
      >
        <img
          src={animal}
          alt="Animals icons created by Eucalyp - Flaticon"
          className={styles.img}
        />
        동물 / 이색체험
      </button>
      <button
        className={`clickSquareBtn ${
          selectedActivities.includes("가이드투어/클래스") ? "active" : ""
        }`}
        type="button"
        onClick={() => handleActivityClick("가이드투어/클래스")}
      >
        <img
          src={guide}
          alt="Tour guide icons created by Freepik - Flaticon"
          className={styles.img}
        />
        가이드 투어 / 클래스
      </button>
    </div>
  );
};

export default AcitivityBtn;
