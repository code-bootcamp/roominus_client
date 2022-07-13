import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styled from "@emotion/styled";

export function MyDropzone(props) {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    if (file) {
      const fileReader = new FileReader(); //파일에 관련된 기능들이 있는 것(FileReader)
      fileReader.readAsDataURL(file); //파일을 읽어서 바로 url로 바꿔주는 기능(readAsDataURL)
      fileReader.onload = (data) => {
        //파일이 다 로드가 되면 data가 들어옴
        if (typeof data.target?.result === "string") {
          //타입지정때문에 써주는 것
          console.log(data.target?.result); //어떤식으로 data가 들어오는지 확인
          props.setImageUrl(data.target?.result); //최종적으로 미리보기 imgUrl state에 담기
        }
      };
    }

    upload(file).then((result) => props.setFileUrl(result.url));
    console.log(acceptedFiles);
  }, []);

  const upload = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "tyx7y8ot");

    const result = fetch(
      "https://api.cloudinary.com/v1_1/dop5piuwp/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((response) => {
      return response.json();
    });
    return result;
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <h4>여기에 놓아주세요</h4>
      ) : (
        <img src="/img/community/download.png" />
      )}
    </div>
  );
}
