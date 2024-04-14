export default function HeaderLanding({ atSlide }: any) {
  return (
    <div className="absolute w-full z-50 flex items-center px-20 py-5">
      <div
        className={`text-4xl font-stixToText font-bold ${
          atSlide !== 0 ? " text-white " : "text-primarydblue"
        }`}
      >
        Nom
        <span className="text-orange-500">Nom</span>
      </div>
    </div>
  );
}
