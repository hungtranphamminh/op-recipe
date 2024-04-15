import RelatedTagsRecs from "./related-tags";
import SameTagsRelated from "./same-tag-recipes";
import SameTagsSecondaryRelated from "./same-tag-secondary";
const MOCKUP_RELATED_REC_TAGS = {
  title: "French recipes",
  recipes: [
    {
      title: "Homemade French Baguettes",
      time: "1 hour 35 minutes",
      rating: 4.5,
      votes: 280,
      isSaved: true,
      author: "Kelsey Nixon",
      imgUrl:
        "https://res.cloudinary.com/dyeiygws0/image/upload/v1712508034/baguette_lhlkjo.jpg",
    },
    {
      title: "Creme Brulee",
      time: "3 hours 30 minutes",
      rating: 5.0,
      votes: 511,
      isSaved: false,
      author: "Alton Brown",
      imgUrl:
        "https://res.cloudinary.com/dyeiygws0/image/upload/v1712508085/cremebrulee_gexbj7.jpg",
    },
  ],
};

const MOCKUP_RELATED_REC_TAGS_SEC = {
  title: "European recipes",
  recipes: [
    {
      title: "Homemade Soft Pretzel",
      time: "1 hour 55 minutes",
      rating: 5.0,
      votes: 891,
      isSaved: false,
      author: "Alton Brown",
      imgUrl:
        "https://res.cloudinary.com/dyeiygws0/image/upload/v1712548473/pretzel_wsn1sg.jpg",
    },
    {
      title: "Chicken Piccata",
      time: "40 minutes",
      rating: 5.0,
      votes: 2881,
      isSaved: false,
      author: "Giada De Laurentiis",
      imgUrl:
        "https://res.cloudinary.com/dyeiygws0/image/upload/v1712548473/piccata_pvrfli.jpg",
    },
    {
      title: "Patatas Bravas Home Fries with Roasted Tomato Aioli",
      time: "1 hour 12 minutes",
      rating: 4.5,
      votes: 32,
      isSaved: false,
      author: "Bobby Flay",
      imgUrl:
        "https://res.cloudinary.com/dyeiygws0/image/upload/v1712548473/fries_h9fqyi.jpg",
    },
  ],
};

export default function RelatedRecipes({ recipeInfo }: any) {
  return (
    <div className="max-w-[390px] w-full pl-8 flex flex-col gap-6">
      <div className="w-full text-center pb-2 font-semibold text-2xl font-renner">
        YOU MIGHT ALSO LIKE
      </div>
      {/* Recipes with same tags */}
      <SameTagsRelated {...MOCKUP_RELATED_REC_TAGS} />
      {/* Recommend tags */}
      <RelatedTagsRecs tags={recipeInfo.tags} />
      {/* Secondary Recipes with the same tags */}
      <SameTagsSecondaryRelated {...MOCKUP_RELATED_REC_TAGS_SEC} />
    </div>
  );
}
