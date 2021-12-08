import { User } from "../models";
import { MockUserFactory } from "./mock/MockUserFactory";

export const doLogin = async (): Promise<User> => {
  const user = await MockUserFactory.createUser("1");
  return user;
};
