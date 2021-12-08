export type UserId = string;

export interface User {
  id: UserId;
  username: string;
  firstName: string;
  lastName?: string;
  email: string;
  phoneNumber: string;
  profilePictureUrl?: string;
}
