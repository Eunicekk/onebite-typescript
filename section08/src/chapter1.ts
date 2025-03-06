// 인덱스드 엑세스 타입
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo(author: PostList[number]["author"]) {
  console.log(`${author.name} - ${author.id}`);
}

const post: PostList[number] = {
  title: "게시물 제목",
  content: "게시물 본문",
  author: {
    id: 1,
    name: "부승관",
    age: 28,
  },
};

printAuthorInfo(post.author);

type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];

type TupNum = Tup[number];
