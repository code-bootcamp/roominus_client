import { Card } from "antd";
import React from "react";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

const { Meta } = Card;

const Wrapper = styled.div`
  :hover {
    transform: translateY(-0.3em);
  }
  transition: all 250ms ease-in-out;
  border: 1px solid #c2c2c2;

  @media ${breakPoints.mobile} {
    width: 19.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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

const CafeCard = (props: {
  el: {
    mainImg: string;
    address:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal;
    name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
    phone: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
  };
}) => (
  <Wrapper>
    <Card
      style={{ width: "100%", position: "relative" }}
      cover={
        <img
          alt="example"
          src={props.el?.mainImg}
          style={{ height: 240, cursor: "pointer" }}
        />
      }
    >
      <LocationBox>
        <LocationIcon src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990934/public/cafe/locationIcon_gaxbsy.webp" />
        <Location>{props.el?.address}</Location>
      </LocationBox>
      <Info>
        <Meta title={props.el?.name} description={props.el?.phone} />
      </Info>
    </Card>
  </Wrapper>
);

export default CafeCard;
