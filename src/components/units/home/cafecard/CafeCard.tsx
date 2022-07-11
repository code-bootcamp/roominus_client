// import {
//   EditOutlined,
//   EllipsisOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import React from "react";
import styled from "@emotion/styled";

const { Meta } = Card;

const Wrapper = styled.div`
  :hover {
    transform: translateY(-0.3em);
  }
  transition: all 250ms ease-in-out;
`;

const LocationBox = styled.div`
  width: 4.5em;
  height: 2.2em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  z-index: 1;
  top: 1.5em;
  left: -1px;
  background-color: #8b54c1;
  /* background-color: #26282c; */
`;

const Location = styled.h4`
  color: white;
`;

const LocationIcon = styled.img`
  width: 0.8em;
  height: 1em;
`;

const CafeCard = () => (
  <Wrapper>
    <Card
      style={{ width: "100%", borderColor: "#c2c2c2", position: "relative" }}
      cover={
        <img
          alt="example"
          src="/img/cafe/room.webp"
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
      <LocationBox>
        <LocationIcon src="/img/cafe/locationIcon.png" />
        <Location>홍대</Location>
      </LocationBox>
      <Meta
        // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title="엑스케이프"
        description="02-1234-5678"
      />
    </Card>
  </Wrapper>
);

export default CafeCard;