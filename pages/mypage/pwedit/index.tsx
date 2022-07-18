import useAuth from "../../../src/components/commons/hooks/useAuth";
import PWedit from "../../../src/components/units/mypage/pwedit/PasswordEdit.container";

export default function PWeditPage() {
  useAuth();

  return <PWedit />;
}
