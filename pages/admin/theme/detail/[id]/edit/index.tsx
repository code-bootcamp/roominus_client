import ThemeCreate from "../../../../../../src/components/units/admin/theme/new/ThemeCreate.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
const FETCH_THEME = gql`
  query fetchTheme($themeId: String!) {
    fetchTheme(themeId: $themeId) {
      id
      title
      rank
      intro_title
      intro_content
      agelimit
      like
      mainImg
    }
  }
`;

export default function AdminThemeEditPage() {
  const router = useRouter();
  const { data: ThemeUpdateData, loading } = useQuery(FETCH_THEME, {
    variables: {
      themeId: router.query.id,
    },
  });

  console.log(ThemeUpdateData);
  return (
    <>
      {loading ? (
        <div></div>
      ) : (
        <ThemeCreate isEdit={true} ThemeUpdateData={ThemeUpdateData} />
      )}
    </>
  );
}
