import { useDispatch, useSelector } from "react-redux";
import "./BtnList.css";
import { addNumber, minusNumber } from "../../../store/CounterSlice";

const TotalPeople = () => {
  const dispatch = useDispatch();
  const globalNumber = useSelector((state) => state.counter.number);

  const onClickAddNumberHandler = () => {
    // 5. Action creator를 dispatch 해주고, 그때 Action creator의 인자에 number를 넣어줍니다.
    console.log(1);
    dispatch(addNumber(1));

  };

  const onClickMinusNumberHandler = () => {
    if (globalNumber === 0) {
      alert("0보다 작을 수 없습니다.");
      return;
    }
    dispatch(minusNumber(1));
    
  };

 

  return (
    <div className="btnSection">
      <button
        type="button"
        className="countBtn"
        onClick={onClickMinusNumberHandler}
      >
        -
      </button>
      <div>{globalNumber}</div>
      <button
        type="button"
        className="countBtn"
        onClick={onClickAddNumberHandler}
      >
        +
      </button>
    </div>
  );
};

export default TotalPeople;
