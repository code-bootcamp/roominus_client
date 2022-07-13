import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import AdminCafeNew from "../../../../../src/components/units/admin/cafe/new/AdminCafeNew.container";

const FETCH_CAFE = gql`
  query fetchCafe($cafeId: String!) {
    fetchCafe(cafeId: $cafeId) {
      id
      name
      phone
      intro_content
      address
      address_detail
      mainImg
    }
  }
`;

export default function AdminCafeEditPage() {
  const router = useRouter();

  const { data, loading } = useQuery(FETCH_CAFE, {
    variables: { cafeId: router.query.id },
  });

  return loading ? <></> : <AdminCafeNew isEdit={true} editData={data} />;
}
