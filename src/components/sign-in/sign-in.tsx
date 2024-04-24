"use client";
import Image from "next/image";
import bg from "@/images/login/bg.jpeg";
import { signin } from "@/actions/auth";
import { useFormState, useFormStatus } from "react-dom";
import SignInButton from "./sign-in-button";

export default function SignIn() {
  const [state, action] = useFormState(signin, undefined);
  const { pending } = useFormStatus();

  return (
    <div className="w-full h-screen relative flex">
      {/* bg */}
      <div className="w-full h-screen absolute top-0 left-0 z-10">
        <Image src={bg} alt="bg" fill style={{ objectFit: "cover" }} />
      </div>
      {/* sign in box */}
      <div className="relative z-20 w-full h-full bg-transparent flex items-center md:justify-start">
        <div className="bg-white mt-10 ml-56 p-10 w-full max-w-[500px]">
          {/* logo */}
          <div className="text-4xl font-raleWay font-medium text-primarydblue">
            Nom
            <span className="text-orange-400">Nom</span>
          </div>
          {/* sign in with email */}
          <section className="w-full mt-6 ">
            <h1 className="text-2xl font-srcSerif font-medium">Sign in</h1>
            {
              /* sign in form */
              <form action={action} className="mt-6">
                {/* email */}
                <h2 className="font-raleWay font-semibold text-sm">
                  Email Address
                </h2>
                <div className="border mt-3">
                  {/* <label htmlFor="email">Email</label> */}
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder=""
                    className=" px-2 py-1 w-full border-none focus:outline-none md: max-w-[500px]"
                  />
                </div>
                {/* password */}
                <h2 className="font-raleWay font-semibold text-sm mt-4">
                  Password
                </h2>
                <div className="border mt-3">
                  {/* <label htmlFor="password">Password</label> */}
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className=" px-2 py-1 w-full border-none focus:outline-none md: max-w-[500px]"
                  />
                </div>
                <SignInButton />
              </form>
            }
          </section>
          {/* separate bar */}
          <div className="w-full my-4 flex items-center justify-between">
            <div className="grow h-[1px] mx-3 bg-primarydblue"></div>
            <p>or</p>
            <div className="grow h-[1px] mx-3 bg-primarydblue"></div>
          </div>
          {/* sign up n others sign in methods */}
          <section className="w-full flex flex-col justify-start gap-6">
            {/* sign up */}
            <div className=" w-full border border-primarydblue py-2 flex items-center  justify-center">
              <p className="text-primarydblue uppercase text-xs">
                Sign up with email
              </p>
            </div>
            {/* sign in w google */}
            <div className=" w-full border border-primarydblue py-2 flex items-center  justify-center">
              <p className="text-primarydblue uppercase text-xs">
                Continue with Google
              </p>
            </div>
            {/* sign in w google */}
            <div className=" w-full border border-primarydblue py-2 flex items-center  justify-center">
              <p className="text-primarydblue uppercase text-xs">
                Continue with Apple
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
