import { Tabs } from "antd";
import React from "react";

const { TabPane } = Tabs;

const onChange = (key: string) => {
  console.log(key);
};

const MenuTabs = () => (
  <Tabs defaultActiveKey="1" onChange={onChange}>
    <TabPane tab="매장 소개" key="1">
      {/* Content of Tab Pane 1 */}
    </TabPane>
    <TabPane tab="테마" key="2">
      {/* Content of Tab Pane 2 */}
    </TabPane>
  </Tabs>
);

export default MenuTabs;
