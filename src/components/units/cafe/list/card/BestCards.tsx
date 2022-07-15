// import {
//   EditOutlined,
//   EllipsisOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";

const { Meta } = Card;

const BestCards = () => (
  <Card
    style={{ width: "100%", borderColor: "#bdbdbd" }}
    cover={
      <img alt="example" src="/img/cafe/room.webp" style={{ height: 200 }} />
    }
    // 관리자 권한일 때 사용하기
    // actions={[
    //   <SettingOutlined key="setting" />,
    //   <EditOutlined key="edit" />,
    //   <EllipsisOutlined key="ellipsis" />,
    // ]}
  >
    <Meta
      // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="엑스케이프"
      description="02-1234-5678"
    />
  </Card>
);

export default BestCards;
