import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import CommunityCommentListUI from "./CommunityCommentList.presenter";
import {
  DELETE_BOARD_REVIEW,
  FETCH_BOARD_COMMENTS,
} from "./CommunityCommentList.queries";

export default function CommunityCommentList() {
  const router = useRouter();

  const [deleteBoardreview] = useMutation(DELETE_BOARD_REVIEW);

  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.id,
    },
  });

  const onClickDelete = async (event: any) => {
    try {
      await deleteBoardreview({
        variables: {
          boardReviewId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.id },
          },
        ],
      });
      Swal.fire({
        icon: "success",
        title: "댓글이 삭제되었습니다!",
        timer: 1300,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: (error as Error).message,
      });
    }
  };

  // const loadFunc = () => {
  //   if (!data) return;

  //   fetchMore({
  //     variables: {
  //       page: Math.ceil(data.fetchBoardComments.boardreview.length / 10) + 1,
  //     },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       if (!fetchMoreResult.fetchBoardComments.boardreview)
  //         return {
  //           fetchBoardComments: [...prev.fetchBoardComments.boardreview],
  //         };

  //       return {
  //         fetchBoardComments: [
  //           ...prev.fetchBoardComments.boardreview,
  //           ...fetchMoreResult.fetchBoardComments.boardreview,
  //         ],
  //       };
  //     },
  //   });
  // };

  return (
    <CommunityCommentListUI
      data={data}
      onClickDelete={onClickDelete}
      // loadFunc={loadFunc}
    />
  );
}
