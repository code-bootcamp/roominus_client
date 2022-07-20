import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ThemeMenuCreateUI from "./ThemeMenuCreate.presenter";
import { CREATE_THEME_MENU } from "./ThemeMenuCreate.query";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { Idata, IThemeMenuCreateProps } from "./ThemeMenuCreate.types";

const schema = yup.object({
  reservation_time: yup.string().required("필수 입력 사항입니다."),
  people_number: yup.number().required("필수 입력 사항입니다."),
  price: yup.number().required("필수 입력 사항입니다."),
});

export default function ThemeMenuCreate(props: IThemeMenuCreateProps) {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const cafeName = props.infodata?.fetchTheme.cafe.name;
  const themeTitle = props.infodata?.fetchTheme.title;
  const router = useRouter();

  const [createThemeMenugql] = useMutation(CREATE_THEME_MENU);
  const themeId = router.query.id;

  const onSubmitCreateThemeMenu = async (data: Idata) => {
    try {
      await createThemeMenugql({
        variables: {
          createThemeMenuInput: {
            reservation_time: data.reservation_time,
            people_number: Number(data.people_number),
            price: Number(data.price),
            cafeName,
            themeTitle,
          },
        },
      });

      router.push(`/admin/themeMenu/list/${themeId}`);
      Modal.success({ content: "테마 메뉴 등록 성공" });
    } catch (error) {
      Modal.error({ content: (error as Error).message });
    }
  };

  return (
    <ThemeMenuCreateUI
      formState={formState}
      register={register}
      handleSubmit={handleSubmit}
      onSubmitCreateThemeMenu={onSubmitCreateThemeMenu}
      cafeName={cafeName}
      themeTitle={themeTitle}
    />
  );
}
