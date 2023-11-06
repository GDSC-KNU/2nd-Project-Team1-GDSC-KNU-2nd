import "./BtnList.css";
import { useDispatch, useSelector } from "react-redux";
import { selectRegion } from "../../../store/selectSlice";

const RegionBtn = () => {
  const dispatch = useDispatch();
  const selectedRegions = useSelector((state) => state.select.selectedRegions);

  const handleRegionClick = (region) => {
    if(selectedRegions.length === 0 || selectedRegions.length < 3 || selectedRegions.includes(region) ){
      dispatch(selectRegion(region));
    }
    else{
      alert("여행가능한 지역은 최대 3개만 선택가능합니다.");
    }
    
  };

  return (
    <div className="btnSection">
      <button
        className={`clickBtn ${
          selectedRegions.includes("중구") ? "active" : ""
        }`}
        type="button"
        onClick={() => handleRegionClick("중구")}
      >
        중구
      </button>
      <button
        className={`clickBtn ${
          selectedRegions.includes("서구") ? "active" : ""
        }`}
        type="button"
        onClick={() => handleRegionClick("서구")}
      >
        서구
      </button>
      <button
        className={`clickBtn ${
          selectedRegions.includes("동구") ? "active" : ""
        }`}
        type="button"
        onClick={() => handleRegionClick("동구")}
      >
        동구
      </button>
      <button
        className={`clickBtn ${
          selectedRegions.includes("남구") ? "active" : ""
        }`}
        type="button"
        onClick={() => handleRegionClick("남구")}
      >
        남구
      </button>
      <button
        className={`clickBtn ${
          selectedRegions.includes("북구") ? "active" : ""
        }`}
        type="button"
        onClick={() => handleRegionClick("북구")}
      >
        북구
      </button>
      <button
        className={`clickBtn ${
          selectedRegions.includes("수성구") ? "active" : ""
        }`}
        type="button"
        onClick={() => handleRegionClick("수성구")}
      >
        수성구
      </button>
      <button
        className={`clickBtn ${
          selectedRegions.includes("달서구") ? "active" : ""
        }`}
        type="button"
        onClick={() => handleRegionClick("달서구")}
      >
        달서구
      </button>
      <button
        className={`clickBtn ${
          selectedRegions.includes("달성군") ? "active" : ""
        }`}
        type="button"
        onClick={() => handleRegionClick("달성군")}
      >
        달성군
      </button>
      <button
        className={`clickBtn ${
          selectedRegions.includes("군위군") ? "active" : ""
        }`}
        type="button"
        onClick={() => handleRegionClick("군위군")}
      >
        군위군
      </button>
    </div>
  );
};

export default RegionBtn;
