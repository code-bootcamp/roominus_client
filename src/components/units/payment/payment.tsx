import Head from "next/head";
import WebPurpleButton from "../../commons/buttons/buttonDesktop/WebPurpleButton";
import { gql, useMutation, useQuery } from "@apollo/client";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { IPaymentProps, IRsp } from "./payment.types";

declare const window: typeof globalThis & {
  IMP: any;
};

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
    }
  }
`;

export const FETCH_USER_LOGGEDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      id
      name
      email
      point
      phone
    }
  }
`;

export default function Payment(props: IPaymentProps) {
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  const [createReservation] = useMutation(CREATE_RESERVATION);
  const router = useRouter();

  const requestPay = () => {
    const IMP = window.IMP;
    IMP.init(process.env.NEXT_PUBLIC_IMP_KEY);

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "룸인어스",
        amount: props.totalPrice,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        buyer_tel: data?.fetchUserLoggedIn.phone,
        m_redirect_url: "https://roominus.site/reservation",
      },
      async function (rsp: IRsp) {
        // callback
        if (rsp.success) {
          try {
            const result = await createReservation({
              variables: {
                themeMenuId: props.ThemeMenuId,
                cafeId: props.cafeId,
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
              timer: 1000,
              backdrop: false,
            });
            router.push(`/reservation/${result.data?.createReservation.id}`);
          } catch (error) {
            Swal.fire({
              icon: "error",
              title: "예약실패",
              text: (error as Error).message,
              timer: 1000,
              backdrop: false,
            });
            router.push("/reservation");
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "예약실패",
            timer: 1000,
            backdrop: false,
          });
          router.push("/reservation");
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
        type={props.type}
      />
    </div>
  );
}
