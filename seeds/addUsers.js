const faker = require("faker");

const createFakeUser = () => ({
  email: faker.internet.email(),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
});

exports.seed = async function (knex, Promise) {
  // Deletes ALL existing entries
  const fakeUsers = [];
  const desiredFakeUsers = 1000;
  for (let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFakeUser());
  }

  await knex("users").insert(fakeUsers);
};
