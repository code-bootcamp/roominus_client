import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import useAuth from "../../../../src/components/commons/hooks/useAuth";
import CommunityNew from "../../../../src/components/units/community/new/CommunityNew.container";

const FETCH_BOARD = gql`
  query fetchBoard($id: String!) {
    fetchBoard(id: $id) {
      id
      title
      content
      mainImg
      boardTags {
        title
      }
    }
  }
`;

export default function CommunityEditPage() {
  useAuth();

  const router = useRouter();

  const { data: editDate, loading } = useQuery(FETCH_BOARD, {
    variables: { id: router.query.id },
  });

  return loading ? <></> : <CommunityNew isEdit={true} editData={editDate} />;
}
