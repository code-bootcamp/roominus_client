import { Tabs } from "antd";
import React from "react";
import styled from "@emotion/styled";

const { TabPane } = Tabs;

const Wrapper = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* background-color: yellow; */
`;

interface IMenuTabsProps {
  onChangeKey: (key: string) => void;
}

const MenuTabs = (props: IMenuTabsProps) => (
  <Wrapper>
    <Tabs defaultActiveKey="1" onChange={props.onChangeKey}>
      <TabPane tab="매장 소개" key="1">
        {/* Content of Tab Pane 1 */}
      </TabPane>
      <TabPane tab="매장 테마" key="2">
        {/* Content of Tab Pane 2 */}
      </TabPane>
    </Tabs>
  </Wrapper>
);

export default MenuTabs;
