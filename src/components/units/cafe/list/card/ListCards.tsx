// import {
//   EditOutlined,
//   EllipsisOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";
import styled from "@emotion/styled";

const { Meta } = Card;

const Wrapper = styled.div`
  border: 1px solid #c2c2c2;
`;

const LocationBox = styled.div`
  width: 5.5em;
  height: 3.5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.3em;
  /* align-items: center; */
  position: absolute;
  z-index: 1;
  top: 2.4em;
  left: -1px;
  background-color: #4a00e0;
  /* background-color: #26282c; */
`;

const Location = styled.h3`
  font-size: 1.3em;
  font-weight: 600;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding-top: 0.4em; */
  height: 100%;
  color: white;
`;

const LocationIcon = styled.img`
  width: 1.3em;
  height: 1.3em;
  display: flex;
  flex-direction: column;
  align-self: center;
  /* background-color: pink; */
`;

const Info = styled.div`
  font-size: 1.3em;
`;

interface IListCardsProps {
  el: {
    address: string;
    id: string;
    mainImg: string;
    name: string;
    phone: string;
  };
}

const ListCards = (props: IListCardsProps) => (
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
      <Info>
        <Meta title={props.el.name} description={props.el.phone} />
      </Info>
    </Card>
  </Wrapper>
);

export default ListCards;
