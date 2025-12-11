import "./ImageGallery.css";
import { useState } from "react";
export default function ImageGallery({ typeSelected = 0}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const directory = import.meta.env.BASE_URL + `/types/` + typeSelected.id;
  const images = [
    directory + "/image-01.png",
    directory + "/image-02.png",
    directory + "/image-03.png",
    directory + "/image-04.png",
    directory + "/image-05.png",
    directory + "/image-06.png",
    directory + "/image-07.png",
    directory + "/image-08.png",
  ];

  // function handleSelectImage(index) {
  //   setActiveIndex(index);
  // }
  function handleArrowClick(event) {
    let index = 0;
    const { name } = event.currentTarget;
    name == "right"
      ? activeIndex === images.length - 1
        ? (index = 0)
        : (index = activeIndex + 1)
      : activeIndex === 0
      ? (index = images.length - 1)
      : (index = activeIndex - 1);
    setActiveIndex(index);
  }

  return (
    // <div className={`w-full h-screen flex flex-col justify-center ${imgGalleryVisible ? "bg-black md:bg-transparent" : "bg-transparent  "}`}>
    <div>

      <div className="image-container max-h-[90vh] overflow-hidden relative rounded-[20px]">
        <button className="arrow left-0" name="left" onClick={handleArrowClick}>
          <i
            className={`material-symbols-outlined text-[30px] md:text-[50px]`}
            data-name="type"
            style={{
              fontVariationSettings:
                "  'FILL' 0,  'wght' 300,  'GRAD' 0,  'opsz' 24",
            }}
          >
            arrow_back_ios
          </i>
        </button>
        <button className="arrow right-0" name="right" onClick={handleArrowClick}>
          <i
            className={`material-symbols-outlined text-[30px] md:text-[50px]`}
            data-name="type"
            style={{
              fontVariationSettings:
                "  'FILL' 0,  'wght' 300,  'GRAD' 0,  'opsz' 24",
              
            }}
          >
           arrow_forward_ios
          </i>
        </button>
        <div
          className="hidden md:flex absolute w-[70%] h-[120px] left-1/2 -translate-x-1/2 bottom-[20px] gap-[10px]
                        items-center
        "
        >
          {/* {images.map((image, index) => (
            <div
              className={
                index == activeIndex
                  ? "thumbnail-wrapper thumbnail-active"
                  : "thumbnail-wrapper"
              }
              onClick={() => handleSelectImage(index)}
              key={index}
            >
              <img
                className="thumbnails-img w-[100%] m-auto"
                src={image}
                alt=""
                loading="lazy"
              />
            </div>
          ))} */}
        </div>
        <img
          className="main-image w-[100%] m-auto"
          src={images[activeIndex]}
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  );
}
