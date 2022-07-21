import { ApolloQueryResult } from "@apollo/client";

export interface IBoardsecondreviewEl {
  id: string;
}

export interface ICommentAnswerListUIProps {
  answerData: any;
  refetch: (
    variables?: Partial<{
      boardreviewId: any;
    }>
  ) => Promise<ApolloQueryResult<any>>;
  onClickDelete: any;
}

export interface ICommentAnswerListProps {
  el: any;
}
