import RelatedTagsRecs from "./related-tags";
import SameTagsRelated from "./same-tag-recipes";
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

export default function RelatedRecipes({ recipeInfo }: any) {
  return (
    <div className="max-w-[390px] w-full pl-8 flex flex-col gap-6">
      <div className="">You might like</div>
      {/* Recipe with same tags */}
      <SameTagsRelated {...MOCKUP_RELATED_REC_TAGS} />
      {/* Recommend tags */}
      <RelatedTagsRecs tags={recipeInfo.tags} />
    </div>
  );
}
