import Image from "next/image";
import SingleRecipeSummary from "./recipe-summary";
import SingleRecipeStep from "./recipe-main";
import AdditionalInfoRec from "./recipe-additional";
import RelatedRecipes from "../related/single-recipe-related";

const MOCKUP_SINGLE_REC = {
  name: "Beef Bourguignon",
  rating: {
    points: 4.5,
    votes: 198,
  },
  author: "INA GARTEN",
  createdAt: "January 10, 2024",
  level: "Intermediate",
  tags: [
    "French Recipes",
    "European Recipes",
    "Beef Bourguignon",
    "Meat",
    "Carrot",
    "Recipes",
    "Vegetable",
    "Mushroom",
    "Tomato",
    "Bacon Recipes",
    "Beef",
  ],
  nutrition: {
    calories: "100",
    total_fat: "5g",
    sugar: "2g",
    sodium: "2g",
    fiber: "3g",
    protein: "10g",
    carbohydrate: "20g",
  },
  description:
    "Beef Bourguignon: A timeless French classic, featuring tender chunks of chuck beef, caramelized onions, and carrots, all simmered to perfection in a rich broth infused with red wine and aromatic herbs. This hearty stew delivers a symphony of flavors with every spoonful, making it a comforting and indulgent choice for any occasion.",
  time: {
    total: "1 hour 45 minutes",
    prep: "30 minutes",
    cook: "1 hour 15 minutes",
  },
  imgUrl:
    "https://res.cloudinary.com/dyeiygws0/image/upload/v1711892692/beef_bd8xfg.jpg",
  ingredients: [
    "1 tablespoon good olive oil",
    "8 ounces dry cured center cut applewood smoked bacon, diced",
    "2 1/2 pounds chuck beef cut into 1-inch cubes",
    "Kosher salt",
    "Freshly ground black pepper",
    "1 pound carrots, sliced diagonally into 1-inch chunks",
    "2 yellow onions, sliced",
    "2 teaspoons chopped garlic (2 cloves)",
    "1/2 cup Cognac",
    "1 (750 ml.) bottle good dry red wine such as Cote du Rhone or Pinot Noir",
    "1 can (2 cups) beef broth",
    "1 tablespoon tomato paste",
    "1 teaspoon fresh thyme leaves (1/2 teaspoon dried)",
    "4 tablespoons unsalted butter at room temperature, divided",
    "3 tablespoons all-purpose flour",
    "1 pound frozen whole onions",
    "1 pound fresh mushrooms stems discarded, caps thickly sliced",
  ],
  steps: [
    "1 Preheat the oven to 250 degrees F.",
    "2 Heat the olive oil in a large Dutch oven. Add the bacon and cook over medium heat for 10 minutes, stirring occasionally, until the bacon is lightly browned. Remove the bacon with a slotted spoon to a large plate.",
    "3 Dry the beef cubes with paper towels and then sprinkle them with salt and pepper. In batches in single layers, sear the beef in the hot oil for 3 to 5 minutes, turning to brown on all sides. Remove the seared cubes to the plate with the bacon and continue searing until all the beef is browned. Set aside.",
    "4 Toss the carrots, and onions, 1 tablespoon of salt and 2 teaspoons of pepper in the fat in the pan and cook for 10 to 15 minutes, stirring occasionally, until the onions are lightly browned. Add the garlic and cook for 1 more minute. Add the Cognac, stand back, and ignite with a match to burn off the alcohol. Put the meat and bacon back into the pot with the juices. Add the bottle of wine plus enough beef broth to almost cover the meat. Add the tomato paste and thyme. Bring to a simmer, cover the pot with a tight-fitting lid and place it in the oven for about 1 1/4 hours or until the meat and vegetables are very tender when pierced with a fork.",
    "5 Combine 2 tablespoons of butter and the flour with a fork and stir into the stew. Add the frozen onions. Saute the mushrooms in 2 tablespoons of butter for 10 minutes until lightly browned and then add to the stew. Bring the stew to a boil on top of the stove, then lower the heat and simmer for 15 minutes. Season to taste.",
    "6 To serve, toast the bread in the toaster or oven. Rub each slice on 1 side with a cut clove of garlic. For each serving, spoon the stew over a slice of bread and sprinkle with parsley.",
  ],
};

export default function SingleRecipe() {
  return (
    <div className="bg-white w-full h-full">
      {/* recipe summarize & image */}
      <SingleRecipeSummary recipeInfo={MOCKUP_SINGLE_REC} />
      {/* additional recipe info */}
      <AdditionalInfoRec recipeInfo={MOCKUP_SINGLE_REC} />
      <div className="w-full mx-auto max-w-[1440px] flex items-start justify-between">
        {/* main recipe content */}
        <div>
          <SingleRecipeStep recipeInfo={MOCKUP_SINGLE_REC} />
        </div>
        {/* related posts and recipes */}
        <RelatedRecipes recipeInfo={MOCKUP_SINGLE_REC} />
      </div>
    </div>
  );
}
