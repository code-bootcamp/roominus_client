import { MouseEvent, useState } from "react";
import Paginations01UI from "./Paginations.presenter";
import { IPaginations01Props } from "./Paginations.types";

export default function Paginations01(props: IPaginations01Props) {
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = props.count ? Math.ceil(props.count / 10) : 0;
  // 보드리스트 컨테이너에서 받아와 라스트 페이지 구성
  // 10 페이지씩 보여주기 때문에 10으로 나누고 1개의 게시물이 있어도 목록을 보여주어야 하기 때문에 올림 메서드 사용

  console.log(lastPage, "lastPage");

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (!(event.target instanceof Element)) return; // 태그가 없으면 리턴 .. 아마 페이지 번호가 없으면 이 함수 안나오게하는 듯
    const activedPage = Number(event.target.id); // 현재 활성화된 페이지 - String으로 되어 있어 형변환
    setActivedPage(activedPage);
    props.refetch({ page: activedPage });
  };

  const onClickPrevPage = () => {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10); // 이전보다 10페이지 적은
    setActivedPage(startPage - 10);
    props.refetch({ page: startPage - 10 }); // 누르면 시작번호-10의 페이지를 리패치
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    // if (!(startPage + 10 <= lastPage)) return;
    setStartPage((prev) => prev + 10); // 이전보다 10페이지 많은
    setActivedPage(startPage + 10);
    props.refetch({ page: startPage + 10 }); // 누르면 시작번호+10의 페이지를 리패치
  };

  return (
    <Paginations01UI
      startPage={startPage}
      lastPage={lastPage}
      activedPage={activedPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
