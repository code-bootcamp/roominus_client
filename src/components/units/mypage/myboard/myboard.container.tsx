import MyBoardUI from "./myboard.presenter";

export default function MyBoard() {
  const data = [
    {
      price: 10000,
      usepoint: 3000,
    },
    {
      price: 15000,
      usepoint: 2000,
    },
    {
      price: 18000,
      usepoint: 1000,
    },
  ];
  return <MyBoardUI data={data} />;
}
