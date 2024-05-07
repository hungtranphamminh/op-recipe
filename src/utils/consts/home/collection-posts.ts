import brunch from "@/images/home/collections/brunch.jpeg";
import berries from "@/images/home/collections/berries.jpg"
import meat from "@/images/home/collections/meat.jpg"
import clamp from "@/images/home/collections/clamp.jpg"


export const MOCKUP_MAIN_POSTS = {
  title: "Celebrate Holiday Season With a Showstopping Brunch",
  author: "NomNom kitchen",
  description:
    "Indulge in the festive spirit with our holiday brunch collection, featuring an array of delightful recipes perfect for leisurely mornings and special gatherings.",
  imgUrl: brunch.src,
};

export const MOCKUP_SIDE_POSTS = [
  {
    title: "Weeknights Roasted Wonders",
    author: "NomNom kitchen",
    description:
      "Indulge in the festive spirit with our holiday brunch collection, featuring an array of delightful recipes perfect for leisurely mornings and special gatherings.",
    imgUrl: meat.src,
    recipesCount: 54,
  },
  {
    title: "Summer With the Best of Berries",
    author: "NomNom kitchen",
    description:
      "Indulge in the festive spirit with our holiday brunch collection, featuring an array of delightful recipes perfect for leisurely mornings and special gatherings.",
    imgUrl: berries.src,
    recipesCount: 36,
  },
  {
    title: "Fresh and Flavorful Seafood Recipes",
    author: "NomNom kitchen",
    description:
      "Indulge in the festive spirit with our holiday brunch collection, featuring an array of delightful recipes perfect for leisurely mornings and special gatherings.",
    imgUrl: clamp.src,
    recipesCount: 24,
  },
]