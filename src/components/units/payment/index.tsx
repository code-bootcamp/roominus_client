import Head from "next/head";
import { Modal } from "antd";
import WebPurpleButton from "../../commons/buttons/buttonDesktop/WebPurpleButton";
import { gql, useMutation } from "@apollo/client";

declare const window: typeof globalThis & {
  IMP: any;
}; // 윈도우와 IMP 타입 지정

const CREATE_RESERVATION = gql`
  mutation createReservation(
    $cafeId: String!
    $themeMenuId: String!
    $createReservationInput: CreateReservationInput!
    $createPaymentInput: CreatePaymentInput!
  ) {
    createReservation(
      cafeId: $cafeId
      themeMenuId: $themeMenuId
      createReservationInput: $createReservationInput
      createPaymentInput: $createPaymentInput
    ) {
      id
      reservation_date
      memo
      status
      theme_menu {
        reservation_time
        people_number
        price
        cafe {
          name
        }
        theme {
          title
        }
      }
    }
  }
`;

export default function Payment(props) {
  // const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [createReservation] = useMutation(CREATE_RESERVATION);

  const requestPay = () => {
    const IMP = window.IMP; // window는 생략 가능
    IMP.init("imp44516396");

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "결제 번호",
        name: "룸인어스",
        amount: props.totalPrice,
        // buyer_email: email,
        // buyer_name: name,
        // buyer_tel: "010-1234-5678",
        // buyer_addr: "대한민국",
        // buyer_postcode: "12345",
        m_redirect_url: "http://localhost:3000/mypage",
      },
      async function (rsp: any) {
        // callback
        if (rsp.success) {
          try {
            const result = await createReservation({
              variables: {
                cafeId: props.cafeId,
                themeMenuId: props.ThemeMenuId,
                createReservationInput: {
                  reservation_date: props.reservationDate,
                  memo: props.memo,
                  people_number: props.peopleNumber,
                },
                createPaymentInput: {
                  impUid: rsp.imp_uid,
                  price: props.totalPrice,
                  usepoint: Number(props.usePoint),
                },
              },
            });
            console.log(rsp.imp_uid);
            console.log(result);
            Modal.success({
              content: "결제에 성공하였습니다.",
            });
          } catch (error) {
            Modal.error({
              content: error.message,
            });
            console.log(error.message);
          }
        } else {
          alert("다시 결제해주세요");
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

      <WebPurpleButton
        title={props.title}
        onClick={requestPay}
        disabled={props.disabled}
        type={props.type}
      />
    </div>
  );
}
