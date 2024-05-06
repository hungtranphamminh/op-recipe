import { SeasonalIngredientCard } from "../recipe-card/ingredient-card";

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
    <section className="py-5 w-full flex flex-col items-center justify-start mt-10 bg-[#fff]">
      {/* title */}
      <h1 className="text-2xl font-medium text-[rgb(51,51,51)] font-raleWay tracking-[0.32em]">
        SEASONAL
      </h1>
      <div className="w-[100px] h-[2px] bg-primaryGolden my-6"></div>
      <div className="font-alexBrush text-3xl tracking-widest text-[#888]">
        Enjoy the Very Best of this Season
      </div>
      {/* info */}
      <div className="w-full flex items-center">
        {/* desc */}
        <div className="max-w-[450px] font-raleWay text-right text-lg leading-8 tracking-wide">
          As summer arrives, indulge in the season's freshest flavors with our
          handpicked selection of in-season ingredients. From juicy beef to
          vibrant Swiss chard and zesty lemon, elevate your dishes with the
          essence of summer bounty, including Brussels sprouts, sweet potatoes,
          and green beans.
        </div>
        {/* ingredients */}
        <div className="grow px-16 flex items-center justify-center gap-3 mt-10 flex-wrap">
          {MOCKUP_SI_POSTS.map((item, index) => {
            return (
              <div key={index}>
                <SeasonalIngredientCard {...item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SeasonalIngredients;
