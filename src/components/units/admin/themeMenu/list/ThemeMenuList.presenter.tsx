import * as S from "./ThemeMenuList.styles";

export default function ThemeMenuListUI(props) {
  return (
    <section>
      <h1>테마 메뉴들</h1>
      <S.Texts>{props.el?.id}</S.Texts>
      <S.Texts>예약 시간:{props.el?.reservation_time}</S.Texts>
      <S.Texts>인원수:{props.el?.people_number}</S.Texts>
      <S.Texts>가격:{props.el?.price}</S.Texts>
      <S.Texts>매장명:{props.el?.cafe?.name}</S.Texts>
      <S.Texts>테마 메뉴 타이들:{props.el?.theme?.title}</S.Texts>
    </section>
  );
}
