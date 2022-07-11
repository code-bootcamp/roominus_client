export default function ThemeDetailUI(props) {
  return (
    <section>
      <h1>테마상세</h1>
      <div>{props.ThemeDetail?.id}</div>
      <div>{props.ThemeDetail?.title}</div>
      <div>{props.ThemeDetail?.rank}</div>
      <div>{props.ThemeDetail?.intro_title}</div>
      <div>{props.ThemeDetail?.intro_content}</div>
      <div>{props.ThemeDetail?.agelimit}</div>
      <div>{props.ThemeDetail?.like}</div>
    </section>
  );
}
