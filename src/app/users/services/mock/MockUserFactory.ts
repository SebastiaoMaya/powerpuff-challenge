import { User, UserId } from "app/users/models";
import { Chance } from "chance";

export class MockUserFactory {
  private static newUser(overrides: Partial<User>): User {
    const chance = new Chance();
    return {
      id: overrides?.id ?? chance.guid(),
      firstName: overrides?.firstName ?? chance.first(),
      lastName: overrides?.lastName ?? chance.last(),
      email: overrides?.email ?? chance.email(),
      username:
        overrides?.username ??
        `${chance.character()}_${chance.integer({ max: 3000 })}`,
      phoneNumber: overrides?.phoneNumber ?? chance.phone(),
    };
  }

  static createUser(userId: UserId) {
    const chance = new Chance();
    return new Promise<User>((resolve, _) => {
      setTimeout(() => {
        resolve(
          MockUserFactory.newUser({
            id: userId,
            profilePictureUrl: `https://randomuser.me/api/portraits/${chance.pickone(
              ["men", "women"]
            )}/${chance.integer({ min: 1, max: 100 })}.jpg`,
          })
        );
      }, 500);
    });
  }
}
