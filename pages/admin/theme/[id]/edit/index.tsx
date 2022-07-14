import ThemeCreate from "../../../../../src/components/units/admin/theme/new/ThemeCreate.container";
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
  const router = useRouter();
  const { data: ThemeUpdateData, loading } = useQuery(FETCH_THEME, {
    variables: {
      themeId: router.query.id,
    },
  });

  console.log("updatedata", ThemeUpdateData);
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
