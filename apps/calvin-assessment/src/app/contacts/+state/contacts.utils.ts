import * as faker from 'faker';
import { Entity } from './contacts.reducer';

export const generateContact = (): Entity => {
  return {
    id: faker.id(),
    index: faker.random.number(),
    name: {
      first: faker.name.firstName(),
      last: faker.name.lastName()
    },
    picture: faker.image.imageUrl(),
    company: faker.company.companyName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber()
  };
};

export const generateContacts = (
  count = faker.random.number({ min: 1, max: 20 })
): Entity[] => {
  return Array.apply(null, Array(count)).map(() => generateContact());
};
