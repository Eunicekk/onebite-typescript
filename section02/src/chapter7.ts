// void
// void -> 공허 -> 아무것도 없다.
// 아무것도 없음을 의미하는 타입
// undefined와 config 설정에 따라 null 값을 담을 수 있음

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

function func3(): undefined {
  console.log("hello");
  return undefined;
}

function func4(): null {
  console.log("hello");
  return null;
}

// never
// never -> 존재하지 않는
// 불가능한 타입
// 어떠한 값도 담을 수 없음, any타입의 값도 물가

function func5(): never {
  while (true) {}
}
