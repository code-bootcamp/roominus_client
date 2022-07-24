import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Swal from "sweetalert2";
import { userInfoState } from "../../../../commons/store";
import CommunityDetailUI from "./CommunityDetail.presenter";
import {
  CREATE_LIKE_BOARD,
  DELETE_BOARD,
  FETCH_BOARD,
} from "./CommunityDetail.queries";
import { IFetchBoardEl } from "./CommunityDetail.types";

export default function CommunityDetail() {
  const router = useRouter();

  const [userInfo] = useRecoilState(userInfoState);

  const [like, setLike] = useState(false);

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createLikeBoard] = useMutation(CREATE_LIKE_BOARD);

  const { data, refetch } = useQuery(FETCH_BOARD, {
    variables: {
      id: router.query.id,
    },
  });

  const onClickList = () => {
    router.push("/community");
  };

  const onClickEdit = () => {
    router.push(`/community/${router.query.id}/edit`);
  };

  const onClickDelete = async () => {
    Swal.fire({
      icon: "question",
      title: "정말 삭제하시겠습니까?",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        onClickDeleteModal();
        Swal.fire({
          icon: "success",
          title: "삭제되었습니다!",
        });
      }
    });
  };

  const onClickDeleteModal = async () => {
    try {
      await deleteBoard({
        variables: { boardId: router.query.id },
      });
      router.push("/community");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: (error as Error).message,
      });
    }
  };

  const onClickLike = async () => {
    await createLikeBoard({
      variables: {
        boardId: router.query.id,
      },
    });
    refetch();
  };

  //하트 색깔 바꾸기
  useEffect(() => {
    data?.fetchBoard.likeUsers.filter(
      (el: IFetchBoardEl) => el.userId === userInfo.id
    ).length === 1
      ? setLike(true)
      : setLike(false);
  }, [data?.fetchBoard.likeUsers]);

  return (
    <CommunityDetailUI
      onClickList={onClickList}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      data={data}
      onClickLike={onClickLike}
      like={like}
    />
  );
}
