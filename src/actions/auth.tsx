"use server";
import { SignInFormState, SigninFormSchema } from "@/utils/lib/sign-in-authen";

const MOCKUP_ACCESS_TOKEN = "1234567";

export async function signin(currentState: SignInFormState, formData: any) {
  //safe parse the form data
  const validatedFields = SigninFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  return {
    token: "123456",
    userId: "12345678",
  };
}
