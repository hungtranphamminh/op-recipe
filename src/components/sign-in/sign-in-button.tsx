export default function SignInButton() {
  return (
    <button
      type="submit"
      className="group bg-primarydblue text-white font-medium font-raleWay w-full text-sm group py-2 rounded-md relative mt-4 border hover:border-primarydblue"
    >
      <div
        className="absolute z-10 w-0 h-full bg-white top-0 right-0 
      group-hover:left-0 group-hover:w-full transition-all duration-300 rounded-md
      "
      ></div>
      <p className="group-hover:text-primarydblue relative z-20 group-hover:scale-105 group-hover:font-semibold">
        Sign in
      </p>
    </button>
  );
}
