import { useState } from "react";
import Styles from"./LightType.module.css";
import ModelCard from "./ModelCard";
import ImageGallery from "./ImageGallery/ImageGallery.jsx";

export default function LightType() {
  const [imgGalleryVisible, setImgGalleryVisible] = useState(false);
  const [rightContent, setRightContent] = useState("a1");
  const modelList = [
    {
      id: "a1",
      name: "Model 1",
      image: import.meta.env.BASE_URL +"/types/a1.png",
    },
    {
      id: "a2",
      name: "Model 2",
      image: import.meta.env.BASE_URL +"/types/a2.png",
    },
    {
      id: "a3",
      name: "Model 3",
      image: import.meta.env.BASE_URL +"/types/a3.png",
    },
    {
      id: "a4",
      name: "Model 4",
      image: import.meta.env.BASE_URL +"/types/a4.png",
    }
  ];

  function handleClickModel(event) {
    const id = event.target.dataset.id;
    setRightContent(id);
    setImgGalleryVisible(true);
  }

  const selectedModel = modelList.find((item) => item.id === rightContent);

  return (
    <div className={`flex flex-col md:flex-row ${Styles["hide-scrollbar"]}`} >
  {/* left Side */}
      <div className="flex flex-col pt-0 pr-5 pb-0 pl-2.5 md:max-w-[25%] h-[90vh] md:h-[95vh]">
        <h1 className="text-4xl my-10">Types</h1>
        <div className={`overflow-y-auto ${Styles["hide-scrollbar"]}`} style={{flex: 2}}>
          <div className="flex flex-wrap justify-evenly">
            {modelList.map(({ name, image, id }) => (
              <ModelCard
                keyid={id}
                onClick={handleClickModel}
                modelName={name}
                imgId={id}
                imgLink={image}
                rightContent={rightContent}
              ></ModelCard>
            ))}
          </div>
        </div>
      </div>
  {/* Right Side */}
        <div className={`absolute top-1/2 -translate-y-1/2 left-0 items-end justify-center p-3 h-screen
                        md:relative md:flex flex-col md:m-0 md:translate-y-0 md:bg-transparent
                        ${imgGalleryVisible? "flex bg-black bg-opacity-90" : "hidden" }
                        `}
                        >
                  <span className="absolute top-5 right-5 z-50 text-[30px] md:hidden text-white" onClick={()=> setImgGalleryVisible(false)}>&times;</span>
          <ImageGallery typeSelected={selectedModel}/>
      </div>
    </div>
  );
}
