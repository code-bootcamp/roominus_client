import { useRef, useState } from "react";
import AdminReservationNewUI from "./AdminReservationNewUI";
export default function AdminReservationNew() {
  // const router = useRouter();
  const imgRef = useRef();
  // const [createCafe] = useMutation(CREATE_CAFE);

  // const { register, handleSubmit } = useForm();

  const [imgurl, setImgurl] = useState("");

  // const onClickRealInput = () => {
  //   imgRef.current.click();
  // };

  // const upload = (file) => {
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("upload_preset", "tyx7y8ot");

  //   const result = fetch(
  //     "https://api.cloudinary.com/v1_1/dop5piuwp/image/upload",
  //     {
  //       method: "POST",
  //       body: formData,
  //     }
  //   ).then((response) => {
  //     return response.json();
  //   });
  //   return result;
  // };

  const onChangeFile = async (event) => {
    const file = event.target.files?.[0];
    upload(file).then((result) => setImgurl(result.url));
    // upload(file).then((result) => console.log(typeof result.url));
  };

  // const onClickButton = async (data) => {
  //   try {
  //     const result = await createCafe({
  //       variables: {
  //         createCafeInput: {
  //           name: data.name,
  //           phone: data.phone,
  //           intro_content: data.intro_content,
  //           address: data.address,
  //           address_detail: data.address_detail,
  //           mainImg: imgurl,
  //           // subImgs: [imgurl],
  //           users: ["오세웅"],
  //           coordinate: 2,
  //         },
  //       },
  //     });
  //     router.push(`/admin/cafe/${result.data?.createCafe.id}`);
  //     console.log(result.data?.createCafe);
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  return <AdminReservationNewUI onChange={onChangeFile} />;
}
