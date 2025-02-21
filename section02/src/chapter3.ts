// object (객체 리터럴 타입으로 정의해야 점 표기법 사용 가능)
// 구조적 타입 시스템: 프로퍼티를 기준으로 타입을 지정하는 시스템
let user: { id?: number; name: string } = {
  id: 1,
  name: "김윤",
};

user = {
  name: "부승관",
};

let dog: { name: string; color: string } = {
  name: "부끄",
  color: "white",
};

let config: { readonly apiKey: string } = {
  apiKey: "MY API KEY",
};
