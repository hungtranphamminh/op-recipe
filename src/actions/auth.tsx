"use server";
import { SigninFormSchema, FormState } from "@/utils/lib/sign-in-authen";

export async function signin(state: any, payload: any) {
  // Validate form fields
  const validatedFields = SigninFormSchema.safeParse({
    email: payload.get("email"),
    password: payload.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  // Return a new Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Sign in with email:", email);
      // Resolve the Promise after the delay
      resolve({ message: "form data valid" });
    }, 5000);
  });
}
