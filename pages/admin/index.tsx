import useAdminAuth from "../../src/components/commons/hooks/useAdminAuth";

export default function AdminPage() {
  useAdminAuth();
  return <>여기는 어드민~~ 더미 데이터 작성을 위한 공간입니다. </>;
}
