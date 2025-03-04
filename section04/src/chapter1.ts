// 함수 타입 정의

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 명시
// 어떤 타입의 매개변수를 받고, 어떤 타입의 결과값을 반환하는지 명시
function func(a: number, b: number) {
  return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number, b: number) => a + b;

// 함수의 매개변수
function introduce(name = "김윤", age: number, tall?: number) {
  console.log(`name: ${name}`);
  if (typeof tall === "number") {
    console.log(`tall: ${tall + 5}`);
  }
}

introduce("김윤", 27, 167);
introduce("김윤", 27);

function getSum1(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

function getSum2(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum1(1, 2, 3);
getSum2(1, 2, 3, 4, 5);
