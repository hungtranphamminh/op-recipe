import Image from "next/image";
import location from "@/images/profile/location.svg";
import timezone from "@/images/profile/timezone.svg";
import mail from "@/images/profile/mail.svg";
import phone from "@/images/profile/phone.svg";
import key from "@/images/profile/key.svg";

export default function ProfileForm(profileData: any) {
  return (
    <form className="grow max-w-[700px] text-white">
      {/* name */}
      <div className="w-full flex items-end pr-4 py-4">
        <h2 className="leading-none text-lg font-bold font-raleWay uppercase  text-primaryGolden">
          Personal Information
        </h2>
        <div className="grow h-[2px] bg-primaryGolden"></div>
      </div>
      <div className="w-full flex items-center gap-4 flex-wrap pb-4">
        {/* first name */}
        <div className="w-[calc(50%-8px)]">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium "
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            className=" border border-gray-300 text-white text-sm rounded-lg bg-white bg-opacity-25 block w-full p-2.5 "
            placeholder="eg. John"
            value={profileData?.firstName || ""}
            required
          />
        </div>
        {/* last name */}
        <div className="w-[calc(50%-8px)]">
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium  dark:text-white"
          >
            Last name
          </label>
          <input
            type="text"
            id="last_name"
            className=" border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5 bg-white bg-opacity-25"
            placeholder="eg. Doe"
            value={profileData?.lastName || ""}
            required
          />
        </div>
        {/* location */}
        <div className="w-3/4">
          <label
            htmlFor="location"
            className="block mb-2 text-sm font-medium  dark:text-white"
          >
            Location
          </label>
          <div className="flex items-center w-full border border-gray-300 rounded-lg ">
            <div className="flex items-center justify-center size-[40px] rounded-l-lg bg-white">
              <Image src={location} width={20} height={20} alt="location" />
            </div>

            <input
              type="text"
              id="location"
              className="  text-white text-sm rounded-lg block grow p-2.5 bg-white bg-opacity-25 focus:outline-none placeholder:italic"
              placeholder="eg. 22 Jump Street, New York, USA"
              value={profileData?.location || ""}
              required
            />
          </div>
        </div>
        {/* time zone */}
        <div className="w-3/4">
          <label
            htmlFor="time_zone"
            className="block mb-2 text-sm font-medium  dark:text-white"
          >
            Time Zone
          </label>
          <div className="flex items-center w-full border border-gray-300 rounded-lg ">
            <div className="flex items-center justify-center size-[40px] rounded-l-lg bg-white">
              <Image src={timezone} width={20} height={20} alt="location" />
            </div>

            <input
              type="text"
              id="time_zone"
              className="  text-white text-sm rounded-lg block grow p-2.5 bg-white bg-opacity-25 focus:outline-none placeholder:italic"
              placeholder="eg. (GMT+7:00) Bangkok, Hanoi, Jakarta"
              value={profileData?.location || ""}
              required
            />
          </div>
        </div>
      </div>

      {/* contact info */}
      <div className="w-full flex items-end pr-4 py-4">
        <h2 className="leading-none text-lg font-bold font-raleWay uppercase  text-primaryGolden">
          Contacts
        </h2>
        <div className="grow h-[2px] bg-primaryGolden"></div>
      </div>
      <div className="w-full flex items-start gap-4">
        {/* email address */}
        <div className="w-1/2">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Email address
          </label>
          <div className="flex items-center w-full border border-gray-300 rounded-lg ">
            <div className="flex items-center justify-center size-[40px] rounded-l-lg bg-white">
              <Image src={mail} width={20} height={20} alt="location" />
            </div>

            <input
              type="text"
              id="email"
              className="  text-white text-sm rounded-lg block grow p-2.5 bg-white bg-opacity-25 focus:outline-none placeholder:italic"
              placeholder="eg. (GMT+7:00) Bangkok, Hanoi, Jakarta"
              value={profileData?.email || ""}
              required
            />
          </div>
        </div>
        {/* phone no */}
        <div className="w-1/2">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium  dark:text-white"
          >
            Phone number
          </label>

          <div className="flex items-center w-full border border-gray-300 rounded-lg ">
            <div className="flex items-center justify-center size-[40px] rounded-l-lg bg-white">
              <Image src={phone} width={20} height={20} alt="location" />
            </div>
            <input
              type="text"
              id="phone"
              className="  text-white text-sm rounded-lg block grow p-2.5 bg-white bg-opacity-25 focus:outline-none placeholder:italic"
              placeholder="eg. 123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              value={profileData?.phone || ""}
              required
            />
          </div>
        </div>
      </div>
      {/* login info */}
      <div className="w-full flex items-end pr-4 py-4 mt-4">
        <h2 className="leading-none text-lg font-bold font-raleWay uppercase  text-primaryGolden">
          Login Information
        </h2>
        <div className="grow h-[2px] bg-primaryGolden"></div>
      </div>
      {/* old password */}
      <div className="w-1/2 mb-4">
        <label
          htmlFor="old_password"
          className="block mb-2 text-sm font-medium text-white dark:text-white"
        >
          Old Password
        </label>
        <div className="flex items-center w-full border border-gray-300 rounded-lg ">
          <div className="flex items-center justify-center size-[40px] rounded-l-lg bg-white">
            <Image src={key} width={20} height={20} alt="location" />
          </div>
          <input
            type="password"
            id="old_password"
            className="  text-white text-sm rounded-lg block grow p-2.5 bg-white bg-opacity-25 focus:outline-none placeholder:italic"
            placeholder="•••••••••"
            required
          />
        </div>
      </div>
      {/* new password */}
      <div className="w-full flex items-center gap-4">
        <div className="grow">
          <label
            htmlFor="new_password"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            New Password
          </label>
          <div className="flex items-center w-full border border-gray-300 rounded-lg ">
            <div className="flex items-center justify-center size-[40px] rounded-l-lg bg-white">
              <Image src={key} width={20} height={20} alt="location" />
            </div>
            <input
              type="password"
              id="new_password"
              className="  text-white text-sm rounded-lg block grow p-2.5 bg-white bg-opacity-25 focus:outline-none placeholder:italic"
              placeholder="•••••••••"
              required
            />
          </div>
        </div>
        <div className="grow">
          <label
            htmlFor="new_password_cf"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Confirm New Password
          </label>
          <div className="flex items-center w-full border border-gray-300 rounded-lg ">
            <div className="flex items-center justify-center size-[40px] rounded-l-lg bg-white">
              <Image src={key} width={20} height={20} alt="location" />
            </div>
            <input
              type="password"
              id="new_password_cf"
              className="  text-white text-sm rounded-lg block grow p-2.5 bg-white bg-opacity-25 focus:outline-none placeholder:italic"
              placeholder="•••••••••"
              required
            />
          </div>
        </div>
      </div>

      {/* submit button */}
      <button
        type="submit"
        className="text-primaryGolden bg-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-6"
      >
        Save profile
      </button>
    </form>
  );
}
