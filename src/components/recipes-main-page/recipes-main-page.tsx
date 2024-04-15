import Recipes from "./recipes";
import SearchBox from "./search-box";

export default function RecipesMainPage() {
  return (
    <div className="w-full relative h-[3000px] flex flex-col items-center">
      {/* main search section */}
      <div className="md:max-w-[1440px] w-full flex items-start gap-6 mt-[120px]">
        {/* search box */}
        <SearchBox />
        {/* recipes */}
        <div className="grow">
          <Recipes />
        </div>
      </div>
    </div>
  );
}
