import { Tabs } from "antd";
import React from "react";
import styled from "@emotion/styled";

const { TabPane } = Tabs;

// const TabsWrapper = styled.div`
//   padding: 20px 10px;
//   .ant-tabs-card {
//     .ant-tabs-content {
//       margin-top: -16px;
//       > .ant-tabs-tabpane {
//         padding: 16px;
//         background: #fafbfd;
//       }
//     }
//     .ant-tabs-tab,
//     [data-theme="compact"] .ant-tabs-tab {
//       padding: 16px;
//       background: #fafbfd;
//       border-color: #fafbfd;
//     }
//     .ant-tabs-tab-active,
//     [data-theme="compact"] .ant-tabs-tab-active {
//       background: #fafbfd;
//       border-color: #fafbfd;
//     }
//     [data-theme="compact"] .ant-tabs-content {
//       margin-top: -8px;
//     }
//     [data-theme="dark"] .ant-tabs-tab {
//       background: transparent;
//       border-color: transparent;
//     }
//     [data-theme="dark"] .ant-tabs-content > .ant-tabs-tabpane {
//       background: #141414;
//     }
//     [data-theme="dark"] .ant-tabs-tab-active {
//       background: #141414;
//       border-color: #141414;
//     }
//   }
//   .ant-tabs-top > .ant-tabs-nav::before {
//     border-bottom: 1px solid #d4d4d4;
//   }
//   .ant-tabs-nav {
//     padding-top: 47px;
//     background-color: #fafbfd;
//   }
//   .ant-tabs-nav-list {
//     transform: translate(15px, 0px) !important;
//   }
//   .ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab {
//     margin-left: 0px;
//   }
//   .ant-tabs-card > .ant-tabs-nav .ant-tabs-tab {
//     border: none;
//     border-bottom: 1px solid #d4d4d4;
//     border-left: 1px solid transparent;
//     border-right: 1px solid transparent;
//     border-top: 1px solid transparent;
//     color: #2684ff;
//     font-size: 16px;
//   }
//   .ant-tabs-card > .ant-tabs-nav .ant-tabs-tab-active {
//     border-left: 1px solid #d4d4d4;
//     border-right: 1px solid #d4d4d4;
//     border-top: 1px solid #d4d4d4;
//     border-bottom: 1px solid transparent;
//   }
//   .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
//     color: #2a2a2a;
//   }
// `;

const TabsWrapper = styled.div`
  /* .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #4a00e0;
  } */
  /* height: 80px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* background-color: yellow; */
`;

// const MyTabs = styled(Tabs)`
//   .ant-tabs-nav {
//     .ant-tabs-tab-active {
//       color: red;
//     }
//   }
// `;

interface IMenuTabsProps {
  onChangeKey: (key: string) => void;
}

const MenuTabs = (props: IMenuTabsProps) => (
  <TabsWrapper>
    <Tabs
      defaultActiveKey="1"
      onChange={props.onChangeKey}
      // size="large"
      // type="card"
    >
      <TabPane tab="매장 소개" key="1">
        {/* Content of Tab Pane 1 */}
      </TabPane>
      <TabPane tab="매장 테마" key="2">
        {/* Content of Tab Pane 2 */}
      </TabPane>
    </Tabs>
  </TabsWrapper>
);

export default MenuTabs;
