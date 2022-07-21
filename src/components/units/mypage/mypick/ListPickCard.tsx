import { Card } from "antd";
import React from "react";
import styled from "@emotion/styled";

const { Meta } = Card;

const Wrapper = styled.li``;

const Info = styled.div`
  font-size: 1.3em;

  .ant-card-meta-title {
    font-weight: 500;
    font-size: 1em;
  }
  .ant-card-meta-description {
    font-weight: 400;
    font-size: 0.7em;
    word-break: break-all;
  }
`;

interface IListPickCardsProps {
  el: {
    theme: any;
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
        width: 230,
        height: 400,
        position: "relative",
      }}
      cover={
        <img
          alt="No Image"
          src={props.el.theme.mainImg}
          style={{ width: 230, height: 300, cursor: "pointer" }}
        />
      }
    >
      <Info>
        <Meta
          title={props.el.theme.title}
          description={props.el.theme.intro_title}
        />
      </Info>
    </Card>
  </Wrapper>
);

export default ListPickCards;
