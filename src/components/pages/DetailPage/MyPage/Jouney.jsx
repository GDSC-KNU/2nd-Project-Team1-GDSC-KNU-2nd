import journeyImg1 from "../../../../Assets/journeyImg1.jpg";
import journeyImg2 from "../../../../Assets/journeyImg2.jpg";
import journeyImg3 from "../../../../Assets/journeyImg3.jpg";
import journeyImg4 from "../../../../Assets/journeyImg4.jpg";
import journeyImg5 from "../../../../Assets/journeyImg5.jpg";
import journeyImg6 from "../../../../Assets/journeyImg6.jpg";
import journeyImg7 from "../../../../Assets/journeyImg7.jpg";
import journeyImg8 from "../../../../Assets/journeyImg8.jpg";
import styles from "./Journey.module.css";
import Card from "../../../common/Card";
import { useState, useEffect } from "react";
import { BsCalendarCheck } from "react-icons/bs";

const images = [
  journeyImg1,
  journeyImg2,
  journeyImg3,
  journeyImg4,
  journeyImg5,
  journeyImg6,
  journeyImg7,
  journeyImg8,
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const Journey = (props) => {
  const { region, date } = props;
  const [selectedImage, setSelectedImage] = useState(getRandomImage);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setSelectedImage(getRandomImage);
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    setSelectedImage(getRandomImage);
  }, []);

  useEffect(() => {
    const handleReload = () => {
      setSelectedImage(getRandomImage);
    };

    window.addEventListener("beforeUnload", handleReload);

    return () => {
      window.removeEventListener("beforeUnload", handleReload);
    };
  }, []);

  const onClickCompleteTravel = () => {
    confirm("여행을 완료하시겠습니까?");
  }

  return (
    <Card>
      <div>
        {isLoading ? (
          <div className={styles.skeleton_image} />
        ) : (
          <img
            src={selectedImage}
            alt="랜덤이미지입니다."
            className={styles.image}
          />
        )}
      </div>
      <section className={styles.sectionBox}>
        <div className={styles.firstSection}>
          {isLoading ? (
            <h5 className={styles.skeleton_region} />
          ) : (
            <h5 className={styles.region}>{region}</h5>
          )}
          <BsCalendarCheck size="15.1" onClick={onClickCompleteTravel}/>
        </div >
        <div className={styles.secondSection}>
          {" "}
          {isLoading ? (
            <h3 className={styles.skeleton_title} />
          ) : (
            <h3 className={styles.title}>나의 일정 보러가기</h3>
          )}
          {isLoading ? (
            <p className={styles.skeleton_date} />
          ) : (
            <p className={styles.date}>{date}</p>
          )}
        </div>
      </section>
    </Card>
  );
};

export default Journey;
