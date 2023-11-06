import Calendar from "./Calendar";
import Footer from "../../../common/Footer";
import styles from "./Create.module.css";
import logoBtn from "../../../../Assets/buttonLogo.png";
import RegionBtn from "./RegionBtn";
import TransportBtn from "./TransportBtn";
import EatBtn from "./EatBtn";
import AcitivityBtn from "./ActivityBtn";
import TotalPeople from "./TotalPeople";
import Budget from "./Budget";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { resetState } from "../../../store/selectSlice";
import { resetStateCount } from "../../../store/CounterSlice";

const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const selectedRegions = useSelector((state) => state.select.selectedRegions);
  const selectedTransports = useSelector(
    (state) => state.select.selectedTransports
  );
  const selectedFoods = useSelector((state) => state.select.selectedFoods);
  const selectedActivities = useSelector(
    (state) => state.select.selectedActivities
  );
  const totalPeople = useSelector((state) => state.select.number);


  const [selectedDateRange, setSelectedDateRange] = useState(null);
  const [budgetAmount, setBudgetAmount] = useState(0);

  const handleDateRangeChange = (dateRange) => {
    setSelectedDateRange(dateRange);
  }; // 캘린더 dateRange값

  const handleBudgetChange = (amount) => {
    setBudgetAmount(amount);
  }; // budget값

  const submitHandler = (event) => {
    event.preventDefault();

    if (!selectedDateRange) {
      alert("날짜를 선택해주세요.");
      return;
    }

    if (budgetAmount <= 0) {
      alert("올바른 예산을 입력해주세요.");
      return;
    }

    console.log("Selected Date Range:", selectedDateRange);
    console.log("Budget Amount:", budgetAmount);
    console.log("Total People:", totalPeople);
    console.log("Selected Regions:", selectedRegions);
    console.log("Selected Transports:", selectedTransports);
    console.log("Selected Foods:", selectedFoods);
    console.log("Selected Activities:", selectedActivities);

    if (confirm("일정을 생성하시겠습니까?")) {
      alert("확인 되었습니다.");
      event.preventDefault();

      dispatch(resetState()); // Reset Redux state
      dispatch(resetStateCount());
      setSelectedDateRange(null); // Reset local state
      setBudgetAmount(0); // Reset local state
      navigate("/mypage");
    } else {
      event.preventDefault();
    }
  };

  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <h4 className={styles.headerContents}>일정 생성하기</h4>
      </header>
      <main className={styles.mainContents}>
        <form onSubmit={submitHandler}>
          <div className={styles.select}>
            <h3 className={styles.Question}>날짜를 선택해주세요.</h3>
            <div className={styles.Calendar}>
              <Calendar onDateRangeChange={handleDateRangeChange} />
            </div>
          </div>
          <div className={styles.select}>
            <h3 className={styles.Question}>어디로 여행을 가시나요?</h3>
            <RegionBtn />
          </div>
          <div className={styles.select}>
            <h3 className={styles.Question}>몇 명이서 가시나요?</h3>
            <TotalPeople />
          </div>
          <div className={styles.select}>
            <h3 className={styles.Question}>
              예산이 얼마신가요?(최대 999만원까지 입력가능합니다.)
            </h3>
            <Budget onBudgetChange={handleBudgetChange} />
          </div>
          <div className={styles.select}>
            <h3 className={styles.Question}>어떤 교통수단을 이용하시나요?</h3>
            <TransportBtn />
          </div>
          <div className={styles.select}>
            <h3 className={styles.Question}>어떤 음식을 좋아하세요?</h3>
            <EatBtn />
          </div>
          <div className={styles.select}>
            <h3 className={styles.Question}>어떤 활동을 하고 싶으세요?</h3>
            <AcitivityBtn />
          </div>
          <div className={styles.btnAction}>
            <button type="submit" className={styles.submitBtn}>
              <img src={logoBtn} alt="버튼로고 이미지입니다." />
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Create;
