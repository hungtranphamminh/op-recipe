"use client";

import Image from "next/image";
import { useUserInfo } from "@/utils/store/user-store";
import ProfileForm from "./profile-form";
import avatarfake from "@/images/profile/avatar-fake.jpg";
import { useEffect, useState } from "react";

const MOCK_PROFILE = {
  firstName: "Gucci",
  lastName: "Bi",
  phone: "123-45-678",
  email: "guccibi@gmail.com",
  avatar: avatarfake.src,
};

export default function UserProfile() {
  const { userId } = useUserInfo();

  const [profile, setProfile] = useState<any>(null);

  const fetchUserProfile = async () => {
    /* TODO: Attach api */
    setProfile(MOCK_PROFILE);
  };

  useEffect(() => {
    fetchUserProfile();
  }, [userId]);

  return (
    <div className="w-full bg-[url('/images/background/black-kitchen.jpeg')] bg-cover py-10">
      <div className="mx-auto w-full max-w-[900px] h-[900px] bg-black bg-opacity-55 rounded-md">
        {/* image */}
        <div className="w-full flex items-start justify-start px-[60px] py-10">
          <div className="border-2 rounded-full p-1 shadow-md">
            {profile && (
              <Image
                src={profile.avatar}
                alt="avatar fake"
                width={150}
                height={150}
                className="rounded-full hover:scale-105 transition-all duration-200"
              />
            )}
          </div>
          <div className="grow border-t-2 mt-[75px] border-white p-6">
            <ProfileForm {...profile} />
          </div>
        </div>
      </div>
    </div>
  );
}
