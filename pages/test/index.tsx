import { TextField } from "@mui/material";
import { useState } from "react";

export default function Page() {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle(false);

    if (title === "") {
      setTitleError(true);
    }

    if (title) {
      console.log(title);
    }
  };

  return (
    <>
      <form>
        <TextField
          color="secondary"
          fullWidth
          required
          onChange={onChangeTitle}
          error={titleError}
        ></TextField>
      </form>

      <button type="submit" onClick={handleSubmit}>
        등록하기
      </button>
    </>
  );
}
