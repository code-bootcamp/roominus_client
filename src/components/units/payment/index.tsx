import Head from "next/head";
import WebPurpleButton from "../../commons/buttons/buttonDesktop/WebPurpleButton";
import { gql, useMutation } from "@apollo/client";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

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
      # theme_menu {
      #   reservation_time
      #   people_number
      #   price
      # cafe {
      #   name
      # }
      # theme {
      #   title
      # }
      # }
    }
  }
`;

export default function Payment(props) {
  // const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [createReservation] = useMutation(CREATE_RESERVATION);
  const router = useRouter();

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
            Swal.fire({
              icon: "success",
              title: "예약 완료",
              showConfirmButton: false,
              timer: 1500,
            });
            console.log(result);
            router.push(`/reservation/${result.data?.createReservation.id}`);
          } catch (error) {
            Swal.fire({
              icon: "error",
              title: "예약실패",
              text: error.message,
              timer: 1500,
            });
            router.push("/theme");
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
