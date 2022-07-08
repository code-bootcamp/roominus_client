import React, { useState } from "react";
import MyPageInfoUI from "./MyPageInfo.presenter";

export default function MyPageInfo() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onClickReset = () => {
    showModal();
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

  return (
    <MyPageInfoUI
      onClickReset={onClickReset}
      isModalVisible={isModalVisible}
      handleOk={handleOk}
      handleCancel={handleCancel}
    />
  );
}
