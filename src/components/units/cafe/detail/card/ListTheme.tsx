// import {
//   EditOutlined,
//   EllipsisOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";
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
    width: 87%;
    display: block;
  }
`;

const TitleBox = styled.div`
  /* background-color: yellow; */
  height: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .ant-card-meta-title {
    width: 10em;
    font-weight: 500;
    font-size: 1.2em;
    word-break: break-all;
    text-align: center;
    /* white-space: nowrap; */
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
            title={props.el.title}
            // description="02-1234-5678"
          />
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
            style={{ height: 180, cursor: "pointer" }}
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
            title={props.el.title}
            // description="02-1234-5678"
          />
        </TitleBox>
      </Card>
    </Wrapper2>
  </>
);

export default ListTheme;
