import { SeasonalIngredientCard } from "../recipe-card/ingredientCard";

const MOCKUP_SI_POSTS = [
  {
    ingredient: "Beef",
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709623012/ingre/beef_biz1us.webp",
  },
  {
    ingredient: "Butternut Squash",
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709623012/ingre/hasselback-butternut-squash-BA-111616_b3poj3.webp",
  },
  {
    ingredient: "Swiss Chard",
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709623012/ingre/1119-Sides-Coconut-Creamed-Greens_gfmwgo.webp",
  },
  {
    ingredient: "Chicory",
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709623012/ingre/chicory-salad_l79xis.webp",
  },
  {
    ingredient: "Brussels Sprouts",
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709623013/ingre/Roasted-Brussels-Sprouts-with-Garlic-and-Pancetta-14092018_yn3xgo.webp",
  },
  {
    ingredient: "Sweet Potato",
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709623012/ingre/charred-sweet-potatoes-with-toum-recipe-BA-011718_x8evmd.webp",
  },
  {
    ingredient: "Lemon",
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709623013/ingre/pasta-with-brown-butter-whole-lemon-and-parmesan-recipe-BA-030620_accix3.webp",
  },
  {
    ingredient: "Green Bean",
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709623012/ingre/green-beans-blistered-with-tomato-pesto_du2umb.webp",
  },
  {
    ingredient: "Pork Chop",
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709623013/ingre/pork-chop-salad_w0xdyy.webp",
  },
];

const SeasonalIngredients = () => {
  return (
    <section className="py-5 w-full flex flex-col items-center justify-start">
      {/* title */}
      <h1 className="text-[24px] leading-[26px] font-medium text-[rgb(51,51,51)]">
        SEASONAL INGREDIENTS
      </h1>
      <div className="w-[100px] border-b-2 border-b-[rgb(235,0,0)] mt-4 mb-[40px]"></div>
      {/* info */}
      <section className="w-full px-16 max-w-[1850px] flex items-center justify-center gap-4">
        {MOCKUP_SI_POSTS.map((item, index) => {
          return (
            <div key={index}>
              <SeasonalIngredientCard {...item} />
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default SeasonalIngredients;
