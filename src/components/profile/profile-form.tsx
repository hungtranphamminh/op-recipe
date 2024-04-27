export default function ProfileForm(profileData: any) {
  return (
    <form className="grow max-w-[700px] mr-20 text-white">
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium "
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            className=" border border-gray-300 text-primarydblue text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="eg. John"
            value={profileData?.firstName || ""}
            required
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium  dark:text-white"
          >
            Last name
          </label>
          <input
            type="text"
            id="last_name"
            className=" border border-gray-300 text-primarydblue text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="eg. Doe"
            value={profileData?.lastName || ""}
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium  dark:text-white"
          >
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            className=" border border-gray-300 text-primarydblue text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="eg. 123-45-678"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            value={profileData?.phone || ""}
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-white dark:text-white"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          className=" border border-gray-300 text-primarydblue text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="eg. john.doe@company.com"
          value={profileData?.email || ""}
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-white dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className=" border border-gray-300 text-primarydblue text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="•••••••••"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="confirm_password"
          className="block mb-2 text-sm font-medium text-white dark:text-white"
        >
          Confirm password
        </label>
        <input
          type="password"
          id="confirm_password"
          className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0"
          placeholder="•••••••••"
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Save profile
      </button>
    </form>
  );
}
