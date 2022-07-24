import useAdminAuth from "../../src/components/commons/hooks/useAdminAuth";

export default function AdminPage() {
  useAdminAuth();
  return <>여기는 어드민~~</>;
}
