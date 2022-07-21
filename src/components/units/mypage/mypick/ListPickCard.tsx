import { Card } from "antd";
import React from "react";
import styled from "@emotion/styled";

const { Meta } = Card;

const Wrapper = styled.li`
  border: 1px solid #c2c2c2;
`;

const Info = styled.div`
  height: 3.5em;
  font-size: 1.3em;

  .ant-card-meta-title {
    font-weight: 500;
    font-size: 1.2em;
  }
`;

interface IListPickCardsProps {
  el: {
    mainImg: string;
    title: string;
    like: number;
  };
}

const ListPickCards = (props: IListPickCardsProps) => (
  <Wrapper>
    <Card
      hoverable
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
      <Info>
        <Meta title={props.el.title} description={props.el.like} />
      </Info>
    </Card>
  </Wrapper>
);

export default ListPickCards;
