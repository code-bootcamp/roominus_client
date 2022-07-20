import useAuth from "../../../src/components/commons/hooks/useAuth";
import DeleteMember from "../../../src/components/units/mypage/delete/DeleteMember.container";

export default function DeleteMemberPage() {
  useAuth();

  return <DeleteMember />;
}
