import { Card } from "antd";
import React from "react";
import styled from "@emotion/styled";

const { Meta } = Card;

const Wrapper = styled.li`
  border: 1px solid #c2c2c2;
`;

const LocationBox = styled.div`
  width: 5.5em;
  height: 3.5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.3em;
  position: absolute;
  z-index: 1;
  top: 2.4em;
  left: -1px;
  background-color: #4a00e0;
`;

const Location = styled.h3`
  font-size: 1.3em;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  color: white;
`;

const LocationIcon = styled.img`
  width: 1.3em;
  height: 1.4em;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const Info = styled.div`
  height: 3.5em;
  font-size: 1.2em;

  .ant-card-meta-title {
    font-weight: 500;
    font-size: 1.1em;
  }
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
          style={{ height: 250, cursor: "pointer" }}
        />
      }
    >
      <LocationBox>
        <LocationIcon src="/img/cafe/locationIcon.webp" />
        <Location>{props.el.address}</Location>
      </LocationBox>
      <Info>
        <Meta title={props.el.name} description={props.el.phone} />
      </Info>
    </Card>
  </Wrapper>
);

export default ListCards;
