import ThemeCreate from "../../../../../src/components/units/admin/theme/new/ThemeCreate.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import useAdminAuth from "../../../../../src/components/commons/hooks/useAdminAuth";
const FETCH_THEME = gql`
  query fetchTheme($themeId: String!) {
    fetchTheme(themeId: $themeId) {
      id
      title
      rank
      intro_title
      intro_content
      agelimit
      peoplelimit
      like
      mainImg
      cafe {
        name
      }
      genre {
        name
      }
    }
  }
`;

export default function AdminThemeEditPage() {
  useAdminAuth();
  const router = useRouter();
  const { data: themeUpdateData, loading } = useQuery(FETCH_THEME, {
    variables: {
      themeId: router.query.id,
    },
  });

  return (
    <>
      {loading ? (
        <div></div>
      ) : (
        <ThemeCreate isEdit={true} themeUpdateData={themeUpdateData} />
      )}
    </>
  );
}
