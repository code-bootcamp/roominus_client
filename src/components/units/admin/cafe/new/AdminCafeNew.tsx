import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Wrapper = styled.div`
  margin: 2em 0em;
  font-size: 1.5em;
`;

const CREATE_CAFE = gql`
  mutation createCafe($createCafeInput: CreateCafeInput!) {
    createCafe(createCafeInput: $createCafeInput) {
      id
      name
      phone
      intro_content
      address
      address_detail
      mainImg
      # subImgs
      # users
    }
  }
`;

export default function AdminCafeNew() {
  const router = useRouter();

  const [createCafe] = useMutation(CREATE_CAFE);

  const { register, handleSubmit } = useForm();

  const [imgurl, setImgurl] = useState("");

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

  const onChangeFile = async (event) => {
    const file = event.target.files?.[0];
    upload(file).then((result) => setImgurl(result.url));
    // upload(file).then((result) => console.log(typeof result.url));
  };

  const onClickButton = async (data) => {
    try {
      const result = await createCafe({
        variables: {
          createCafeInput: {
            name: data.name,
            phone: data.phone,
            intro_content: data.intro_content,
            address: data.address,
            address_detail: data.address_detail,
            mainImg: imgurl,
            // subImgs: [imgurl],
            users: ["오세웅"],
            coordinate: 2,
          },
        },
      });
      router.push(`/admin/cafe/${result.data?.createCafe.id}`);
      console.log(result.data?.createCafe);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onClickButton)}>
        <div>cafe 등록페이지</div>
        매장 이름: <input type="text" {...register("name")} />
        <br />
        매장 전화번호: <input type="text" {...register("phone")} />
        <br />
        매장 소개: <input type="text" {...register("intro_content")} />
        <br />
        매장 지역: <input type="text" {...register("address")} />
        <br />
        매장 상세주소: <input type="text" {...register("address_detail")} />
        <br />
        <button>등록하기</button>
      </form>
      <br />
      이미지
      <input type="file" onChange={onChangeFile} />
      <img src={imgurl} alt="picture" />
      <br />
      매장테마?
    </Wrapper>
  );
}
