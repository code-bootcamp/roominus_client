import WebSmallPurpleButton from "../../../../commons/buttons/buttonDesktop/WebSmallPurpleButton";
import ListCards from "../../../cafe/list/card/ListCards";
import * as S from "./AdminCafeList.styles";
import { IAdminCafeListUIProps, IFetchCafesProps } from "./AdminCafeList.types";

export default function AdminCafeListUI(props: IAdminCafeListUIProps) {
  return (
    <S.Wrapper>
      <S.Title>매장리스트(관리자)</S.Title>
      <S.ButtonBox>
        <WebSmallPurpleButton onClick={props.onClickNew} title="매장등록" />
      </S.ButtonBox>
      <S.Etc>
        {props.data?.fetchCafes.map((el: IFetchCafesProps) => (
          <span key={el.id} id={el.id} onClick={props.onClickCard(el)}>
            <ListCards el={el} />
          </span>
        ))}
      </S.Etc>
    </S.Wrapper>
  );
}
