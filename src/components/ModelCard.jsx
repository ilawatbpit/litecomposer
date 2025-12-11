export default function ModelCard({modelName, imgLink, imgId, onClick, rightContent}){

    return (
      // ${styles.active}
      <div
        className={`w-[165px] h-[187px] relative rounded-[10px] box-border my-[10px] overflow-hidden
                    md:w-[185px] md:h-[210px] shadow-lg
                    hover:scale-105
                    transition-transform duration-500
                    ${rightContent === imgId && "ring-2 ring-slate-300 scale-[1.03]"}
          `}

        key={imgId}

        onClick={onClick}
      >
        <img className="w-full" src={imgLink} alt="" data-id={imgId} />
        <p className="absolute bottom-[10px] right-[10px]" data-id={imgId}>{modelName}</p>
      </div>
    );
}