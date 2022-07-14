import Head from "next/head";
import { useState } from "react";
import { Modal } from "antd";

declare const window: typeof globalThis & {
  IMP: any;
}; // 윈도우와 IMP 타입 지정

export default function PaymentPage() {
  // const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const requestPay = () => {
    const IMP = window.IMP; // window는 생략 가능
    IMP.init("imp44516396"); // 우선 내 가맹점 번호, 안되면 세웅님 것으로 해보기

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "결제 번호",
        name: "test",
        amount: 100,
        // buyer_email: email,
        // buyer_name: name,
        buyer_tel: "010-1234-5678",
        buyer_addr: "대한민국",
        buyer_postcode: "12345",
        m_redirect_url: "http://localhost:3000/myPages",
      },
      async function (rsp: any) {
        // callback
        if (rsp.success) {
          // try {
          //   const result = await createPoint({
          //     variables: {
          //       impUid: rsp.imp_uid,
          //     },
          //   });
          //   console.log(rsp.imp_uid);
          //   console.log(result);
          //   Modal.success({
          //     content: "결제에 성공하였습니다.",
          //   });
          // } catch (error) {
          //   Modal.error({
          //     content: error.message,
          //   });
          // }
          alert("결제가 성공하였습니다.");
        } else {
          alert("결제가 실패했습니다.");
        }
      }
    );
  };

  return (
    <div>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>

      <div onClick={requestPay}>결제하기 </div>
    </div>
  );
}
