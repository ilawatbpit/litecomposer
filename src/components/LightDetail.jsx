import { useMemo } from "react";
import { useWorkingModel } from "../context/WorkingModelContext";
import modelList from "../../public/data";

export default function LightDetail() {
  const { workingModel, setWorkingModel, setBtnClicked } = useWorkingModel();

  const selectedData = useMemo(
    () => modelList.find((m) => String(m.id) === String(workingModel.model)),
    [workingModel.model]
  );

  const specs = selectedData?.specification ?? {};

  return (
    <div className="w-full min-h-dvh flex items-center justify-center">
      <div className="w-full max-w-6xl min-h-dvh flex flex-col">
        {/* Header */}
        <div className="px-4 sm:px-8 lg:px-16 xl:px-24 pt-8 sm:pt-10">
          <h1 className="text-2xl sm:text-3xl font-bold">Material / Finish</h1>
          {selectedData?.name && (
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              {selectedData.name}
            </p>
          )}
        </div>

        {/* Content (scrollable) */}
        <div className="flex-1 overflow-auto px-4 sm:px-8 lg:px-16 xl:px-24 py-6 sm:py-10">
          {Object.keys(specs).length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-300 p-6 text-gray-600">
              No specifications found for this model.
            </div>
          ) : (
            <div className="space-y-10">
              {Object.entries(specs).map(([specName, values]) => (
                <section key={specName} className="space-y-3">
                  <div className="flex items-baseline justify-between gap-3">
                    <h2 className="text-lg sm:text-xl font-semibold">
                      {specName}
                    </h2>

                    {/* Selected pill */}
                    {/* {workingModel?.[specName] && (
                      <span className="text-xs sm:text-sm px-3 py-1 rounded-full bg-black/5 text-gray-800">
                        Selected: {String(workingModel[specName])}
                      </span>
                    )} */}
                  </div>

                  {/* Options */}
                  <div className="flex flex-wrap gap-3">
                    {(Array.isArray(values) ? values : []).map((val) => {
                      const isSelected =
                        String(workingModel?.[specName]) === String(val);

                      return (
                        <button
                          key={`${specName}-${val}`}
                          type="button"
                          onClick={() =>
                            setWorkingModel((prev) => ({
                              ...prev,
                              [specName]: val,
                            }))
                          }
                          className={[
                            "px-4 py-2 rounded-xl border text-sm sm:text-base",
                            "transition active:scale-[0.98]",
                            isSelected
                              ? "bg-black text-white border-black"
                              : "bg-white text-black border-black/30 hover:border-black hover:bg-black hover:text-white",
                          ].join(" ")}
                        >
                          {val}
                        </button>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          )}
        </div>

        {/* Footer (sticky on mobile) */}
        <div className="sticky bottom-0 w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-4">
          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => setBtnClicked("composition")}
              className="px-6 sm:px-8 py-3 rounded-xl bg-black text-white hover:bg-[#0d0d0d] transition"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
