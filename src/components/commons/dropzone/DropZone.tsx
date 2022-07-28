import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export function MyDropzone(props: {
  setImageUrl: (arg0: string) => void;
  setFileUrl: (arg0: any) => any;
}) {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file); //파일을 읽어서 바로 url로 바꿔주는 기능(readAsDataURL)
      fileReader.onload = (data) => {
        if (typeof data.target?.result === "string") {
          props.setImageUrl(data.target?.result);
        }
      };
    }

    upload(file).then((result) => props.setFileUrl(result.url));
  }, []);

  const upload = (file: string | Blob) => {
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
        <img src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990936/public/community/download_t2bofg.webp" />
      )}
    </div>
  );
}
