export default function SearchBox() {
  return (
    <div className="border w-[350px] flex flex-col">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="border-b"
      />
      <div className="flex gap-2">
        <button className="bg-primarydblue text-white px-4 py-2">Search</button>
        <button className="bg-primarydblue text-white px-4 py-2">Filter</button>
      </div>
    </div>
  );
}
