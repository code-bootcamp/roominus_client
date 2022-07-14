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
  border: 1px solid #c2c2c2;
`;

const LocationBox = styled.div`
  width: 4.7em;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.3em;
  /* align-items: center; */
  position: absolute;
  z-index: 1;
  top: 1.5em;
  left: -1px;
  background-color: #8b54c1;
  /* background-color: #26282c; */
`;

const Location = styled.h4`
  /* background-color: green; */
  /* display: flex;
  flex-direction: column;
  align-items: flex-end; */
  padding-top: 0.4em;
  height: 2.5em;
  color: white;
`;

const LocationIcon = styled.img`
  width: 1.1em;
  height: 1em;
  display: flex;
  flex-direction: column;
  align-self: center;
  /* background-color: pink; */
`;

const ListCards = (props) => (
  <Wrapper>
    <Card
      style={{
        width: "100%",
        position: "relative",
      }}
      cover={
        <img
          alt="No Image"
          src={props.el.mainImg}
          style={{ height: 270, cursor: "pointer" }}
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
        <Location>{props.el.address}</Location>
      </LocationBox>
      <Meta
        // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={props.el.name}
        description={props.el.phone}
      />
    </Card>
  </Wrapper>
);

export default ListCards;
