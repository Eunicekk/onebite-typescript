// 기본 타입과의 호환성
let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

// 객체 타입간의 호환성
// -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "부끄",
  color: "white",
  breed: "시츄",
};

animal = dog;
// dog = animal;

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잡아먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook;
// programmingBook = book;

// 초과 프로퍼티 검사
// 초기화할 때 정해진 객체 타입보다 더 많은 값을 가지고 있다면 오류가 발생함

type Book = {
  name: string;
  price: number;
};

let book2: Book = {
  name: "한 입 크기로 잡아먹는 리액트",
  price: 33000,
  // skill: "reactjs",
};

let book3: Book = programmingBook;

function func(book: Book) {}
func(programmingBook);
func({
  name: "한 입 크기로 잡아먹는 리액트",
  price: 33000,
  // skill: "reactjs",
});

export {};
