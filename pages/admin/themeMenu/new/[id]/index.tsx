import ThemeMenuCreate from "../../../../../src/components/units/admin/themeMenu/new/ThemeMenuCreate.container";
import { FETCH_THEME } from "../../../../../src/components/units/admin/theme/detail/ThemeDetail.query";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function ThemeMenuCreatePage() {
  const router = useRouter();
  const { data: infodata } = useQuery(FETCH_THEME, {
    variables: {
      themeId: router.query.id,
    },
  });
  return <ThemeMenuCreate infodata={infodata} />;
}
