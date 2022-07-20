import { Tabs } from "antd";
import React from "react";
import styled from "@emotion/styled";

const { TabPane } = Tabs;

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

interface IMenuTabsProps {
  onChangeKey: (key: string) => void;
}

const MenuTabs = (props: IMenuTabsProps) => (
  <TabsWrapper>
    <Tabs defaultActiveKey="1" onChange={props.onChangeKey}>
      <TabPane tab="매장 소개" key="1"></TabPane>
      <TabPane tab="매장 테마" key="2"></TabPane>
    </Tabs>
  </TabsWrapper>
);

export default MenuTabs;
