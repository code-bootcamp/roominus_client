import { Page } from "./Paginations01.styles";
import { IPageinations01UIProps } from "./Paginations01.types";

export default function Paginations01UI(props: IPageinations01UIProps) {
  return (
    <div>
      <Page onClick={props.onClickPrevPage}>{`<`}</Page>
      {new Array(10).fill(1).map(
        // 배열 10개 만들어서 채우고 뿌리기 - 1은 의미 없어서 괜찮음
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            // 페이지네이션 데이터 있는 부분까지만 표기하는 옵셔널 체이닝, 없으면 숫자 안보이게
            <Page
              key={props.startPage + index} // 스타트페이지 + 배열인덱스
              onClick={props.onClickPage}
              id={String(props.startPage + index)} // 버튼 id값 - String으로 형변환
              isActive={props.startPage + index === props.activedPage} // 현재 페이지 컬러
            >
              {props.startPage + index}
            </Page>
            // 1 ~ 10 나타냄 (map)
          )
      )}
      <Page onClick={props.onClickNextPage}>{`>`}</Page>
    </div>
  );
}
