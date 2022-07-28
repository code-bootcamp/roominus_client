import { Card } from "antd";
import React from "react";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

const { Meta } = Card;

const Wrapper1 = styled.div`
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

const Wrapper2 = styled.div`
  display: none;

  @media ${breakPoints.mobile} {
    width: 18em;
    display: flex;
  }
`;

const TitleBox = styled.div`
  height: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .ant-card-meta-title {
    width: 13em;
    font-weight: 500;
    font-size: 1.2em;
    word-break: break-all;
    text-align: center;
  }

  @media ${breakPoints.mobile} {
    height: 13px;
  }
`;

interface IListThemeProps {
  el: {
    mainImg: string;
    title: string;
  };
}

const ListTheme = (props: IListThemeProps) => (
  <>
    <Wrapper1>
      <Card
        style={{ width: "100%", borderColor: "#c2c2c2", position: "relative" }}
        cover={
          <img
            alt="example"
            src={props.el.mainImg}
            style={{ height: 270, cursor: "pointer" }}
          />
        }
      >
        <TitleBox>
          <Meta title={props.el.title} />
        </TitleBox>
      </Card>
    </Wrapper1>
    <Wrapper2>
      <Card
        style={{
          width: "100%",
          borderColor: "#c2c2c2",
          position: "relative",
          marginBottom: "1.3em",
        }}
        cover={
          <img
            alt="example"
            src={props.el.mainImg}
            style={{ height: 300, cursor: "pointer" }}
          />
        }
      >
        <TitleBox>
          <Meta title={props.el.title} />
        </TitleBox>
      </Card>
    </Wrapper2>
  </>
);

export default ListTheme;
