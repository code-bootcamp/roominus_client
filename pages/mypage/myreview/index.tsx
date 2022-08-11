import useAuth from "../../../src/components/commons/hooks/useAuth";
import MyReview from "../../../src/components/units/mypage/myreview/myreview.container";

export default function MyReviewPage() {
  useAuth();

  return <MyReview />;
}
