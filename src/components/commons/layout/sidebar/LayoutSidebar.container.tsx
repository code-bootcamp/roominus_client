import { useRouter } from "next/router";
import { useState } from "react";
import LayoutSideBarUI from "./LayoutSidebar.presenter";

export default function LayoutSidebar() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();
  const [activedMenu, setActivedMenu] = useState("");

  const onClickReset = () => {
    showModal();
    console.log("ㅎㅇ");
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onClickMenu = (event) => {
    if (event.target instanceof Element) {
      router.push(event.target.id);

      const activedMenu = event.target.id;
      setActivedMenu(activedMenu);
    }
  };

  return (
    <LayoutSideBarUI
      onClickReset={onClickReset}
      isModalVisible={isModalVisible}
      handleOk={handleOk}
      handleCancel={handleCancel}
      onClickMenu={onClickMenu}
      activedMenu={activedMenu}
    />
  );
}
