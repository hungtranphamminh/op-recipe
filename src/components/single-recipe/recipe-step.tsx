export default function SingleRecipeStep({ recipeInfo }: any) {
  return (
    <div className="w-full flex items-center flex-col">
      {/* main information */}
      <section className="w-full max-w-[1050px] flex items-start justify-between pt-6">
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
        <div className="grow max-w-[660px] flex flex-col items-center">
          <div className="w-full font-renner text-center font-bold text-[20px] leading-[28px] text-black mb-6 pb-4 border-b-2 border-b-[rgb(226,221,204)]">
            Directions
          </div>
          <div className="w-full max-w-[700px] px-10 flex flex-col font-stixToText text-[16px] leading-[27px] font-normal">
            {recipeInfo.steps.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className="border-b border-b-[#e0e0e0] w-full text-left py-2 first-letter:text-4xl first-letter:float-left first-letter:font-bold first-letter:mr-3 first-letter:bg-[url('/images/single-rec/orange2.png')] first-letter:p-1"
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
