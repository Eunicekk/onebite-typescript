// 타입 추론
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "김윤",
  profile: {
    nickname: "유니스",
  },
  url: ["www.naver.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

let d;
d = 10;
d.toFixed();
d = "hello";
d.toUpperCase();

const num = 10;
const str = "hello";

let arr1 = [1, "string"];

export {};
