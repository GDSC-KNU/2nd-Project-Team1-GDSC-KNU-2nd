import koreanFood from "../../../../assets/koreanFood.png";
import chineseFood from "../../../../assets/chineseFood.png";
import japaneseFood from "../../../../assets/japaneseFood.png";
import westernFood from "../../../../assets/westernFood.png";
import { useDispatch, useSelector } from "react-redux";
import { selectFood } from "../../../store/selectSlice";

const EatBtn = () => {
  const dispatch = useDispatch();
  const selectedFoods = useSelector((state) => state.select.selectedFoods);

  const handleFoodClick = (food) => {
    if (
      selectedFoods.length === 0 ||
      selectedFoods.length < 3 ||
      selectedFoods.includes(food)
    ) {
      dispatch(selectFood(food));
    } else {
      alert("음식은 최대 3개만 선택가능합니다.");
      return;
    }
  };

  return (
    <div className="btnSectionEat">
      <button
        className={`clickSquareBtn ${
          selectedFoods.includes("한식") ? "active" : ""
        }`}
        type="button"
        onClick={() => handleFoodClick("한식")}
      >
        <img src={koreanFood} alt="음식이미지입니다." />
        한식
      </button>
      <button
        className={`clickSquareBtn ${
            selectedFoods.includes("중식") ? "active" : ""
          }`}
        type="button"
        onClick={() => handleFoodClick("중식")}
      >
        <img src={chineseFood} alt="음식이미지입니다." />
        중식
      </button>
      <button
        className={`clickSquareBtn ${
            selectedFoods.includes("일식") ? "active" : ""
          }`}
        type="button"
        onClick={() => handleFoodClick("일식")}
      >
        <img src={japaneseFood} alt="음식이미지입니다." />
        일식
      </button>
      <button
        className={`clickSquareBtn ${
            selectedFoods.includes("양식") ? "active" : ""
          }`}
        type="button"
        onClick={() => handleFoodClick("양식")}
      >
        <img src={westernFood} alt="음식이미지입니다." />
        양식
      </button>
    </div>
  );
};

export default EatBtn;
