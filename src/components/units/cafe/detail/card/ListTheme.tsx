// import {
//   EditOutlined,
//   EllipsisOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import React from "react";
import styled from "@emotion/styled";

const { Meta } = Card;

const TitleBox = styled.div`
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListTheme = () => (
  <>
    <Card
      style={{ width: "100%", borderColor: "#c2c2c2", position: "relative" }}
      cover={
        <img
          alt="example"
          src="/img/cafe/youngforever.jpg"
          style={{ height: 200, cursor: "pointer" }}
        />
      }
      // 관리자 권한일 때 사용하기
      // actions={[
      //   <SettingOutlined key="setting" />,
      //   <EditOutlined key="edit" />,
      //   <EllipsisOutlined key="ellipsis" />,
      // ]}
    >
      <TitleBox>
        <Meta
          // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="YOUNG FOREVER"
          // description="02-1234-5678"
        />
      </TitleBox>
    </Card>
  </>
);

export default ListTheme;
