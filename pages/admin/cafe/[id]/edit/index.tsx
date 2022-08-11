import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import useAdminAuth from "../../../../../src/components/commons/hooks/useAdminAuth";
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
  useAdminAuth();
  const router = useRouter();

  const { data: cafeData } = useQuery(FETCH_CAFE, {
    variables: { cafeId: router.query.id },
  });

  return <AdminCafeNew isEdit={true} editData={cafeData} />;
}
