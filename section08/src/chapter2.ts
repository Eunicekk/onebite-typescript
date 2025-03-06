// keyof 연산자
// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "부승관",
  age: 28,
};

getPropertyKey(person, "name"); // 부승관
