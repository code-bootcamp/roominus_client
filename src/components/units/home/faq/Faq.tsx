import { Collapse } from "antd";
import React from "react";

const { Panel } = Collapse;

const FAQ = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse
      defaultActiveKey={["1"]}
      onChange={onChange}
      style={{ fontSize: "1.2em" }}
    >
      <Panel
        header="룸인어스란?"
        key="1"
        style={{ fontWeight: 500, backgroundColor: "#F2EBF5" }}
      >
        <p
          style={{
            fontSize: "1em",
            padding: "0.7em 1.5em",
            fontWeight: 400,
            marginBottom: "0em",
          }}
        >
          이용자들에겐 방탈출 매장과 테마에 대한 정보를 쉽게 파악하게 하고 그
          정보를 바탕으로한 통합 예약 페이지를 제공합니다. 방탈출 카페
          운영자들에겐 노쇼를 방지하여 좀 더 확실한 예약 서비스를 제공합니다.
        </p>
      </Panel>
      <Panel
        header="서울 매장만 볼 수 있나요?"
        key="2"
        style={{ fontWeight: 500, backgroundColor: "#F2EBF5" }}
      >
        <p
          style={{
            fontSize: "1em",
            padding: "0.7em 1.5em",
            fontWeight: 400,
            marginBottom: "0em",
          }}
        >
          네. 현재는 서울 매장만 이용가능하며, 앞으로 전국으로 확대해나갈
          예정입니다.
        </p>
      </Panel>
      <Panel
        header="환불은 어떻게 하나요?"
        key="3"
        style={{ fontWeight: 500, backgroundColor: "#F2EBF5" }}
      >
        <p
          style={{
            fontSize: "1em",
            padding: "0.7em 1.5em",
            fontWeight: 400,
            marginBottom: "0em",
          }}
        >
          마이페이지 → 최근 예약 내역에서 환불하기가 가능하며, 방문일 전까지만
          환불이 가능합니다.
        </p>
      </Panel>
    </Collapse>
  );
};

export default FAQ;
