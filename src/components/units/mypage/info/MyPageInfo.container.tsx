import MyPageInfoUI from "./MyPageInfo.presenter";
import { useState } from "react";

export default function MyPageInfo() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
    console.log(isModalVisible);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <MyPageInfoUI
      showModal={showModal}
      isModalVisible={isModalVisible}
      handleCancel={handleCancel}
    />
  );
}
