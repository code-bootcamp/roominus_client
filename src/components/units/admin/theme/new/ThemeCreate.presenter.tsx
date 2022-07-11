import { Rate } from "antd";

export default function ThemeCreateUI(props) {
  return (
    <section>
      <h1>테마등록</h1>
      <Rate onChange={props.setValue} value={props.value} />
      <form onSubmit={props.handleSubmit(props.onSubmitCreateTheme)}>
        <input
          type="text"
          placeholder="cafeName"
          {...props.register("cafeName")}
        />
        <input
          type="text"
          placeholder="genreName"
          {...props.register("genreName")}
        />
        <input type="text" placeholder="title" {...props.register("title")} />
        <input
          type="text"
          placeholder="intro_title"
          {...props.register("intro_title")}
        />
        <input
          type="text"
          placeholder="intro_content"
          {...props.register("intro_content")}
        />
        <input
          type="number"
          placeholder="agelimit"
          {...props.register("agelimit")}
        />
        <button>테마 등록</button>
      </form>
    </section>
  );
}
