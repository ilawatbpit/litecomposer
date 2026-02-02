import { useState } from "react";
import { useWorkingModel } from "../context/WorkingModelContext";
import modelList from "../../public/data";

export default function LightType() {
  const [openModal, setOpenModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [fade, setFade] = useState(false);

  const { setWorkingModel, setBtnClicked } = useWorkingModel();

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
      setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setFade(false);
    }, 200);
  };

  return (
    <>
      {/* ---------- GRID OF CARDS (RESPONSIVE) ---------- */}
      <div className="min-h-dvh w-full overflow-auto p-4 sm:p-6 lg:p-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {modelList.map((each, index) => (
              <div
                key={each.id + index}
                className="relative overflow-hidden rounded-3xl bg-gray-700 shadow-lg
                           transition duration-500 hover:shadow-2xl hover:scale-[1.02]"
              >
                {/* Image */}
                <img
                  src={each.images[0]}
                  alt={each.name}
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />

                {/* Hover/Focus Overlay */}
                <div
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm
                             flex flex-col items-center justify-center gap-3
                             opacity-0 group-hover:opacity-100 hover:opacity-100
                             transition-opacity duration-300
                             sm:opacity-0 sm:hover:opacity-100"
                />

                {/* Use group on parent (extra wrapper for reliable hover) */}
                <div className="absolute inset-0 group">
                  <div
                    className="absolute inset-0 bg-black/70 backdrop-blur-sm
                               flex flex-col justify-center items-center gap-3
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <button
                      onClick={() => {
                        setWorkingModel((prev) => ({
                          ...prev,
                          model: each.id,
                          modelName: each.name,
                        }));
                        setBtnClicked("detail");
                      }}
                      className="w-[160px] sm:w-[180px]
                                 bg-black/80 text-white
                                 px-4 py-2 rounded-full
                                 shadow-white/10 shadow-xl
                                 hover:bg-[#0d0d0d] transition"
                    >
                      SELECT
                    </button>

                    <button
                      onClick={() => openCarousel(index)}
                      className="w-[160px] sm:w-[180px]
                                 bg-black/80 text-white
                                 px-4 py-2 rounded-full
                                 shadow-white/10 shadow-xl
                                 hover:bg-[#0d0d0d] transition"
                    >
                      MORE
                    </button>
                  </div>
                </div>

                {/* Optional label (looks nice + helps UI) */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="inline-flex max-w-full items-center rounded-full bg-black/50 px-3 py-1 text-sm text-white backdrop-blur">
                    <span className="truncate">{each.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- RESPONSIVE GLASS MODAL ---------- */}
      {openModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md
                     flex items-center justify-center p-3 sm:p-6"
          onClick={() => setOpenModal(false)} // click outside closes
        >
          {/* Stop propagation so clicks inside won't close */}
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4
                         h-10 w-10 rounded-full
                         bg-black/60 text-white text-xl
                         hover:scale-110 transition
                         flex items-center justify-center"
              aria-label="Close"
            >
              ✖
            </button>

            {/* IMAGE CONTAINER (RESPONSIVE HEIGHT) */}
            <div
              className={`relative overflow-hidden rounded-2xl bg-white/5 border border-white/10
                          transition-opacity duration-300
                          ${fade ? "opacity-0" : "opacity-100"}`}
              style={{
                height: "min(78vh, 720px)", // responsive cap
              }}
            >
              <img
                src={modelList[activeIndex].images[activeImage]}
                alt={`${modelList[activeIndex].name} ${activeImage + 1}`}
                className="w-full h-full object-contain"
              />

              {/* Left / Right Buttons (NO weird 120% width hacks) */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2
                           h-10 w-10 sm:h-12 sm:w-12 rounded-full
                           bg-black/50 text-white text-2xl
                           hover:bg-black/70 transition"
                aria-label="Previous image"
              >
                ⟨
              </button>

              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2
                           h-10 w-10 sm:h-12 sm:w-12 rounded-full
                           bg-black/50 text-white text-2xl
                           hover:bg-black/70 transition"
                aria-label="Next image"
              >
                ⟩
              </button>

              {/* Simple counter */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2
                              rounded-full bg-black/50 px-3 py-1 text-sm text-white">
                {activeImage + 1} / {modelList[activeIndex].images.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------- ANIMATIONS ---------- */}
      <style>
        {`
        .animate-fadeIn { animation: fadeIn 0.3s ease forwards; }
        .animate-slideUp { animation: slideUp 0.35s ease forwards; }

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
