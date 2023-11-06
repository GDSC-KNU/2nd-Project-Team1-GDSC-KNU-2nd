import React, { useState } from "react";
import styles from "./Budget.module.css";

const Budget = ({onBudgetChange}) => {
  const [money, setMoney] = useState(0);
  const [showWon, setShowWon] = useState(false);

  const addComma = (price) => {
    let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return returnString;
  };

  const onChangePoints = (e) => {
    const { value } = e.target;
    let str = value.replaceAll(",", "");
    setMoney(str);
    setShowWon(false);

    if (onBudgetChange) {
      onBudgetChange(parseInt(str)); // Convert to integer before passing
    }
  };

  const onFocus = () => {
    setShowWon(false);
  };

  const onBlur = () => {
    setShowWon(true);
  };

  return (
    <div className={styles.Budget}>
      <div className={styles.input}>
        <input
          type="number"
          placeholder="금액을 입력해주세요."
          className={styles.inputMoney}
          onChange={(e) => onChangePoints(e)}
          onFocus={onFocus}
          onBlur={onBlur}
          value={addComma(money) || ""}
        />
        {showWon && <span className={styles.won}>만원</span>}
      </div>
    </div>
  );
};

export default Budget;
