// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user1: User = {
  id: 1,
  name: "김윤",
  nickname: "eunice",
  birth: "1999-11-26",
  bio: "안녕하세요",
  location: "서울시",
};

let user2: User = {
  id: 2,
  name: "부승관",
  nickname: "boo",
  birth: "1998-01-16",
  bio: "안녕하세요",
  location: "서울시",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnicedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnicedKingdom: 826,
};
