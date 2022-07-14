import * as S from "./ThemeMenuCreate.styles";
export default function ThemeMenuCreateUI(props) {
  return (
    <section>
      <h1>테마 메뉴 추가 페이지</h1>
      <form onSubmit={props.handleSubmit(props.onSubmitCreateThemeMenu)}>
        <div>
          <span>예약시간</span>
          <input type="time" {...props.register("reservation_time")} />
        </div>
        <S.Error>{props.formState.errors.reservation_time?.message}</S.Error>
        <div>
          <span>인원수</span>
          <input type="number" {...props.register("people_number")} />
        </div>
        <S.Error>{props.formState.errors.people_number?.message}</S.Error>
        <div>
          <span>가격</span>
          <input type="text" {...props.register("price")} />
        </div>
        <S.Error>{props.formState.errors.price?.message}</S.Error>
      </form>
      <div>
        <span>매장명</span>
        <input type="text" value={props.cafeName} />
      </div>
      <div>
        <span>테마 타이틀</span>
        <input type="text" value={props.themeTitle} />
      </div>
      <form onSubmit={props.handleSubmit(props.onSubmitCreateThemeMenu)}>
        <button>등록</button>
      </form>
    </section>
  );
}
