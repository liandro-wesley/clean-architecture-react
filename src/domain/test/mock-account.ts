import { AccountModel } from "@domain/models/account-model";
import { AuthenticationParams } from "@domain/usecases/authentication";
import faker from "@faker-js/faker";

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export const mockAuccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid(),
  name: faker.internet.userName(),
});
