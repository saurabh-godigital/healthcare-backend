import { createUser, getUserByEmail } from "../models/user.model";

export const createNewUser = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string
) => {
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const user = await createUser({
    email,
    firstName,
    lastName,
    password,
  });
  return user;
};