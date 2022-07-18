import useAuth from "../../../src/components/commons/hooks/useAuth";
import MyPhoneEdit from "../../../src/components/units/mypage/myphoneedit/MyPhoneEdit.container";

export default function MyPhoneEditPage() {
  useAuth();

  return <MyPhoneEdit />;
}
