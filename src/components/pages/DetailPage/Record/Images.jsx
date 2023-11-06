import classes from "./Images.module.css";
import { useState } from "react";
import { TbCameraPlus } from "react-icons/tb";
import { BiXCircle } from "react-icons/bi";

const Images = () => {
  const [showImages, setShowImages] = useState([]);

  // 이미지 상대경로 저장
  const handleAddImages = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  return (
    <div className={classes.addPicture}>
      <label
        htmlFor="input-file"
        className={classes.addButton}
        onChange={handleAddImages}
      >
        <input
          type="file"
          id="input-file"
          multiple
          className={classes.addButton}
        />
        <div className={classes.cameraBox}>
          <TbCameraPlus size="27" />
        </div>
      </label>
      <div className={classes.imageContainer}>
        {showImages.map((image, id) => (
          <div className={classes.imgBox} key={id}>
            <img
              className={classes.cameraBox}
              src={image}
              alt={`${image}-${id}`}
            />
            <BiXCircle onClick={() => handleDeleteImage(id)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
