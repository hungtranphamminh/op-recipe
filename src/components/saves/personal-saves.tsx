import SavesRecipes from "./saves-recipes";

export default function PersonalSaves() {
  return (
    <div className="w-full flex flex-col items-center py-10">
      <div className="uppercase font-semibold text-4xl font-raleWay text-primaryGolden text-center w-full py-4 tracking-[0.32em]">
        Saves
      </div>
      <SavesRecipes />
    </div>
  );
}
