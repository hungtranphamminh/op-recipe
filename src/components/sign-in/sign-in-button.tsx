"use client";
import { CreateAccountSession } from "@/utils/lib/session";
import { SignInFormState } from "@/utils/lib/sign-in-authen";
import { useEffect } from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { useUserInfo } from "@/utils/store/user-store";

export default function SignInButton(currentFormState: SignInFormState) {
  const { pending } = useFormStatus();
  const router = useRouter();

  const updateUserId = useUserInfo().updateUserId;

  useEffect(() => {
    console.log("pending", pending);
    if (
      !pending &&
      currentFormState &&
      "token" in currentFormState &&
      currentFormState.token
    ) {
      /* save access token to local storage */
      CreateAccountSession(currentFormState.token);
      /* save userId to zustand storage for further usages */
      updateUserId(currentFormState.userId);
      /* navigate back to home page */
      router.push("/home");
    }
  }, [pending]);

  return (
    <button
      type="submit"
      className="group bg-primarydblue text-white font-medium font-raleWay w-full text-sm group py-2 rounded-md relative mt-4 border hover:border-primarydblue"
    >
      {!pending ? (
        <>
          <div
            className="absolute z-10 w-0 h-full bg-white top-0 right-0 
        group-hover:left-0 group-hover:w-full transition-all duration-300 rounded-md
        "
          ></div>
          <p className="group-hover:text-primarydblue relative z-20 group-hover:scale-105 group-hover:font-semibold">
            Sign in
          </p>
        </>
      ) : (
        "Submitting..."
      )}
    </button>
  );
}
