import "./BtnList.css";
import bus from "../../../../assets/bus.png";
import car from "../../../../assets/car.png";
import { useDispatch, useSelector } from "react-redux";
import { selectTransport } from "../../../store/selectSlice";

const TransportBtn = () => {
  const dispatch = useDispatch();
  const selectedTransports = useSelector(
    (state) => state.select.selectedTransports
  );

  const handleTransportClick = (transport) => {
    if (selectedTransports.length === 0 || selectedTransports.includes(transport)) {
      dispatch(selectTransport(transport));
    } else {
      alert("교통수단은 1개만 선택 가능합니다.");
      return;
    }
  };
  return (
    <div className="btnSection">
      <button
        className={`clickSquareBtn ${
          selectedTransports.includes("대중교통") ? "active" : ""
        }`}
        type="button"
        onClick={() => handleTransportClick("대중교통")}
      >
        <img src={bus} alt="버스이미지입니다." />
        대중교통
      </button>
      <button
        className={`clickSquareBtn ${
          selectedTransports.includes("자가용") ? "active" : ""
        }`}
        type="button"
        onClick={() => handleTransportClick("자가용")}
      >
        <img src={car} alt="자동차이미지입니다." />
        자가용
      </button>
    </div>
  );
};
export default TransportBtn;
