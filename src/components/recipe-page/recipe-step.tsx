export default function SingleRecipeStep({ recipeInfo }: any) {
  return (
    <div className="w-full flex items-center flex-col">
      <section className="w-full max-w-[1440px] flex items-start justify-between pt-6">
        {/* ingredients */}
        <div className="max-w-[390px] w-full px-2">
          <div className="w-full font-renner font-bold text-[20px] leading-[28px] text-black mb-6 pb-4 border-b-2 border-b-[rgb(226,221,204)]">
            Ingredients
          </div>
          {recipeInfo.ingredients.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="font-srcSerif px-2 py-1 text-[14px] leading-[20px] font-normal"
              >
                {item}
              </div>
            );
          })}
        </div>
        {/* steps */}
        <div className="grow flex flex-col items-center">
          <div className="w-full font-renner text-center font-bold text-[20px] leading-[28px] text-black mb-6 pb-4 border-b-2 border-b-[rgb(226,221,204)]">
            Directions
          </div>
          <div className="w-full max-w-[700px] px-10 flex flex-col font-stixToText text-[16px] leading-[27px] font-normal">
            {recipeInfo.steps.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className="border-b border-b-[#e0e0e0] w-full text-left py-2 first-letter:text-4xl first-letter:float-left first-letter:font-bold first-letter:mr-3"
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        {/* more info */}
        <div className="max-w-[390px] w-full px-4">
          <div className="w-full font-renner font-bold text-[20px] leading-[28px] text-black mb-6 pb-4 border-b-2 border-b-[rgb(226,221,204)]">
            Additional Info
          </div>
          <div className="gap-2.5 flex flex-col items-start justify-between">
            {/* level */}
            <div>
              Level:
              <span className="font-bold ml-1">{recipeInfo.level}</span>
            </div>
            {/* total */}
            <div>
              Total:
              <span className="font-bold ml-1">{recipeInfo.time.total}</span>
            </div>
            {/* prep */}
            <div>
              Prep:
              <span className="font-bold ml-1">{recipeInfo.time.prep}</span>
            </div>
            {/* cook */}
            <div>
              Cook:
              <span className="font-bold ml-1">{recipeInfo.time.cook}</span>
            </div>
            {/* cook */}
            <div>
              Yield:
              <span className="font-bold ml-1">6 servings</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
