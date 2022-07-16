import { useMutation } from "@apollo/client";
import CommunityCommentWriteUI from "./CommunityCommentWrite.presenter";
import { CREATE_BOARD_REVIEW } from "./CommunityCommentWrite.queries";

export default function CommunityCommentWrite() {
  const [createBoardreview] = useMutation(CREATE_BOARD_REVIEW);

  const onClickComment = () => {
    createBoardreview({
      variables: {
        createBoardreviewInput: {},
      },
    });
  };

  return <CommunityCommentWriteUI onClickComment={onClickComment} />;
}
