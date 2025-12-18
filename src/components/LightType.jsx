import { useState } from "react";
import { useWorkingModel } from "../context/WorkingModelContext";

export default function LightType() {
  const [openModal, setOpenModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [fade, setFade] = useState(false);

  const { workingModel, setWorkingModel, setBtnClicked } = useWorkingModel();


  const modelList = [
    {
      id: "c1",
      name: "cylinder",
      images: [
        import.meta.env.BASE_URL + "/crystals/crystal1/crystal1.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal1/mock 1.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal1/mock 2.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal1/mock 3.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal1/mock 4.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal1/mock 5.jpg",
      ]
    },
    {
      id: "c2",
      name: "teardrop",
      images: [
        import.meta.env.BASE_URL + "/crystals/crystal 2/crystal2.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal 2/mock 1.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal 2/mock 2.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal 2/mock 3.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal 2/mock 4.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal 2/mock 5.jpg",
      ]
    },
    {
      id: "c3",
      name: "circle",
      images: [
        import.meta.env.BASE_URL + "/crystals/crystal 3/crystal3.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal 3/mock 1.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal 3/mock 2.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal 3/mock 3.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal 3/mock 4.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal 3/mock 5.jpg",
      ]
    }
  ];

  const openCarousel = (index) => {
    setActiveIndex(index);
    setActiveImage(0);
    setOpenModal(true);
  };

  const nextImage = () => {
    setFade(true);
    setTimeout(() => {
      const images = modelList[activeIndex].images;
      setActiveImage((prev) => (prev + 1) % images.length);
      setFade(false);
    }, 200);
  };

  const prevImage = () => {
    setFade(true);
    setTimeout(() => {
      const images = modelList[activeIndex].images;
      setActiveImage((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
      setFade(false);
    }, 200);
  };

  return (
    <>
      {/* ---------- GRID OF CARDS ---------- */}
      <div className="flex flex-wrap justify-evenly items-center w-full h-dvh overflow-auto gap-y-10 p-10">
        {modelList.map((each, index) => (
          <div
            key={each.id + index}
            className="overflow-hidden rounded-3xl bg-gray-700 w-[30%] 
                       hover:scale-105 transition duration-500 hover:shadow-xl relative group"
          >
            <div className="absolute w-full h-full bg-black/70 backdrop-blur-sm 
                            flex flex-col justify-center items-center 
                            group-hover:opacity-100 opacity-0 duration-300 transition-all">
              <button 
              onClick={() => {
                setWorkingModel(each.name);
                 setBtnClicked("detail");
              }
              }
              className="bg-black w-1/4 shadow-white/10 shadow-xl  text-white backdrop-blur-md hover:bg-[#0d0d0d]
                                 px-4 py-2 rounded-full mb-3 transition">
                SELECT
              </button>

              <button
                onClick={() => openCarousel(index)}
                className="bg-black w-1/4 shadow-white/10 shadow-xl  text-white backdrop-blur-md hover:bg-[#0d0d0d]
                                 px-4 py-2 rounded-full mb-3 transition"
              >
                MORE
              </button>
            </div>

            <img src={each.images[0]} className="w-full" />
          </div>
        ))}
      </div>

      {/* ---------- MODERN GLASS MODAL ---------- */}
      {openModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50 
                     animate-fadeIn"
        >
          {/* <div
            className="relative bg-white/10 backdrop-blur-2xl 
                       border border-white/20 rounded-3xl shadow-2xl p-6 
                       animate-slideUp"
          > */}
          <div
            className="relative
                       shadow-2xl
                       animate-slideUp"
          >
            {/* CLOSE */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-[-40px] right-[-50px] bg-transparent text-white text-3xl hover:scale-110 transition"
            >
              ✖
            </button>

            {/* CAROUSEL IMAGE */}
            <div
              className={`h-[700px] flex justify-center items-center 
                         overflow-hidden rounded-2xl transition-opacity duration-300
                         ${fade ? "opacity-0" : "opacity-100"}`}
            >
              <img
                src={modelList[activeIndex].images[activeImage]}
                className="w-full h-full object-contain"
              />
            </div>

            {/* BUTTONS */}
            <div className="flex justify-between absolute 
            z-50 w-[120%] transform -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 text-[25px]">
              <button
                onClick={prevImage}
                className="text-white bg-transparent w-10">
                ⟨
              </button>

              <button
                onClick={nextImage}
                className="text-white bg-transparent w-10">
                ⟩
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------- ANIMATIONS ---------- */}
      <style>
        {`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.35s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        `}
      </style>
    </>
  );
}
