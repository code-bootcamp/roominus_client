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

  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.id,
      page: 1,
    },
  });
  console.log(data);

  const onClickDelete = async (event: any) => {
    try {
      await deleteBoardreview({
        variables: {
          id: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.id, page: 1 },
          },
        ],
      });
      Swal.fire({
        icon: "success",
        title: "댓글이 삭제되었습니다!",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: (error as Error).message,
      });
    }
  };

  // const loadFunc = () => {
  //   if (!data) return;

  //   fetchMore({
  //     variables: { page: Math.ceil(data.fetchBoardComments.length / 10) + 1 },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       if (!fetchMoreResult.fetchBoardComments)
  //         return {
  //           fetchBoardComments: [...prev.fetchBoardComments],
  //         };

  //       return {
  //         fetchBoardComments: [
  //           ...prev.fetchBoardComments,
  //           ...fetchMoreResult.fetchBoardComments,
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
