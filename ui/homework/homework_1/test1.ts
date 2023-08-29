/*
 - Remove all `any` type
 - Fix type `person`
*/

type Person = {
  occupation?: string;
};

const users: Person[] = [
  {
    name: 'Owen Willson',
    age: 54,
    occupation: 'Actor',
  },
  {
    name: 'Ben Stiller',
    age: 57,
    occupation: 'Filmmaker',
  },
  {
    name: 'Batman',
    age: 18,
    isSuperHero: true,
    occupation: 'vigilante',
  },
];

function logPerson(user: Person) {
  console.log(` - ${user?.name}, ${user?.age}`);
}

users.forEach(logPerson);
