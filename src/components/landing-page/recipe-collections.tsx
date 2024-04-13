import Image from "next/image";

const MOCKUP_MAIN_POSTS = {
  title: "Fresh And Flavorful Spring Weeknight Dinners",
  author: "ANTONIO DANTAHARES",
  description:
    "From satisfying mains (that are a little lighter and brighter) to easy sides made with the season’s best veggies, these quick and simple recipes are perfect for celebrating the change of season.",
  imgUrl:
    "https://res.cloudinary.com/dyeiygws0/image/upload/v1712917410/weekendfresh_ypucwk.jpg",
};

export default function RecipeCollections() {
  return (
    <div className="w-full md:h-[750px] bg-[url('/images/background/whitekitchen.jpeg')] bg-cover bg-bottom p-10">
      {/* section */}
      <div className="md:max-w-[1440px] w-full mx-auto">
        {/* main featured collection */}
        <div className="w-full flex items-center">
          {/* included recipes */}
          <div className="grow md:h-[550px] bg-white"></div>
          {/* main collection */}
          <div
            className={`md:w-[1000px] md:h-[550px] bg-cover bg-center bg-no-repeat rounded-md shadow-md`}
            style={{
              backgroundImage: `url("${MOCKUP_MAIN_POSTS.imgUrl}")`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
