// 맵드 타입

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in "id" | "name" | "age"]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // ...기능
  return {
    id: 1,
    name: "부승관",
    age: 28,
  };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // 수정하는 기능
}

updateUser({
  // id: 1,
  // name: "부승관",
  age: 25,
});
