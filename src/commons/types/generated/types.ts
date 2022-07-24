export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type IBoard = {
  __typename?: "Board";
  // eslint-disable-next-line no-use-before-define
  boardTags?: Maybe<Array<IBoardTag>>;
  // eslint-disable-next-line no-use-before-define
  boardreview: Array<IBoardreview>;
  content: Scalars["String"];
  createdAt: Scalars["DateTime"];
  id: Scalars["String"];
  like: Scalars["Int"];
  mainImg: Scalars["String"];
  title: Scalars["String"];
  // eslint-disable-next-line no-use-before-define
  user?: Maybe<IUser>;
  view: Scalars["Int"];
};

export type IBoardTag = {
  __typename?: "BoardTag";
  boards: Array<IBoard>;
  id: Scalars["String"];
  title: Scalars["String"];
};

export type IBoardreview = {
  __typename?: "Boardreview";
  board?: Maybe<IBoard>;
  // eslint-disable-next-line no-use-before-define
  boardsecondreview?: Maybe<Array<IBoardsecondreview>>;
  content: Scalars["String"];
  createdAt: Scalars["DateTime"];
  id: Scalars["String"];
};

export type IBoardsecondreview = {
  __typename?: "Boardsecondreview";
  boardreview?: Maybe<IBoardreview>;
  content: Scalars["String"];
  createdAt: Scalars["DateTime"];
  id: Scalars["String"];
};

export type ICafe = {
  __typename?: "Cafe";
  address: Scalars["String"];
  address_detail?: Maybe<Scalars["String"]>;
  coordinate: Scalars["Float"];
  id: Scalars["String"];
  intro_content?: Maybe<Scalars["String"]>;
  mainImg: Scalars["String"];
  name: Scalars["String"];
  phone: Scalars["String"];
  // eslint-disable-next-line no-use-before-define
  users: Array<IUser>;
};

export type ICreateBoardInput = {
  boardTags?: InputMaybe<Array<Scalars["String"]>>;
  content?: InputMaybe<Scalars["String"]>;
  like?: InputMaybe<Scalars["Int"]>;
  mainImg: Scalars["String"];
  title?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<Scalars["String"]>;
  view?: InputMaybe<Scalars["Int"]>;
};

export type ICreateBoardreviewInput = {
  board?: InputMaybe<Scalars["String"]>;
  content: Scalars["String"];
};

export type ICreateBoardsecondreviewInput = {
  boardreview: Scalars["String"];
  content: Scalars["String"];
};

export type ICreateCafeInput = {
  address: Scalars["String"];
  address_detail?: InputMaybe<Scalars["String"]>;
  coordinate?: InputMaybe<Scalars["Float"]>;
  intro_content?: InputMaybe<Scalars["String"]>;
  mainImg: Scalars["String"];
  name: Scalars["String"];
  phone: Scalars["String"];
  subImgs?: InputMaybe<Array<Scalars["String"]>>;
  users: Array<Scalars["String"]>;
};

export type ICreatePaymentInput = {
  impUid: Scalars["String"];
  price: Scalars["Int"];
  usepoint: Scalars["Int"];
};

export type ICreateReservationInput = {
  memo?: InputMaybe<Scalars["String"]>;
  people_number: Scalars["Int"];
  reservation_date: Scalars["String"];
};

export type ICreateThemeInput = {
  agelimit: Scalars["Int"];
  clearTime: Scalars["String"];
  intro_content?: InputMaybe<Scalars["String"]>;
  intro_title?: InputMaybe<Scalars["String"]>;
  mainImg: Scalars["String"];
  peoplelimit: Scalars["Int"];
  rank: Scalars["Int"];
  subImgs: Array<Scalars["String"]>;
  title: Scalars["String"];
};

export type ICreateThemeMenuInput = {
  cafeName: Scalars["String"];
  people_number: Scalars["Int"];
  price: Scalars["Int"];
  reservation_time: Scalars["String"];
  themeTitle: Scalars["String"];
};

export type ICreateThemeReviewInput = {
  clear: Scalars["Boolean"];
  content: Scalars["String"];
  rank: Scalars["String"];
  star: Scalars["Int"];
  writerName: Scalars["String"];
};

export type ICreateUserInput = {
  cafe?: InputMaybe<Scalars["String"]>;
  email: Scalars["String"];
  isserviceprovider?: InputMaybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  password: Scalars["String"];
  phone: Scalars["String"];
  point?: InputMaybe<Scalars["Int"]>;
};

export type IGenre = {
  __typename?: "Genre";
  id: Scalars["String"];
  name: Scalars["String"];
};

export type IMutation = {
  __typename?: "Mutation";
  Login: Scalars["String"];
  checkinputToken: Scalars["String"];
  createBoard: IBoard;
  createBoardreview: IBoardreview;
  createBoardsecondreview: IBoardsecondreview;
  createCafe: ICafe;
  createGenre: IGenre;
  // eslint-disable-next-line no-use-before-define
  createReservation: IReservation;
  // eslint-disable-next-line no-use-before-define
  createTheme: ITheme;
  // eslint-disable-next-line no-use-before-define
  createThemeMenu: IThemeMenu;
  // eslint-disable-next-line no-use-before-define
  createThemeReview: IThemeReview;
  // eslint-disable-next-line no-use-before-define
  createUser: IUser;
  deleteBoard: Scalars["Boolean"];
  deleteBoardreview: Scalars["Boolean"];
  deleteBoardsecondreview: Scalars["Boolean"];
  deleteCafe: Scalars["Boolean"];
  deleteGenre: Scalars["Boolean"];
  deleteReservation: Scalars["Boolean"];
  deleteTheme: Scalars["Boolean"];
  deleteThemeMenu: Scalars["Boolean"];
  deleteThemeReview: Scalars["Boolean"];
  deleteUser: Scalars["Boolean"];
  logout: Scalars["String"];
  restoreAccessToken: Scalars["String"];
  sendTotkentoPhone: Scalars["String"];
  updateBoard: IBoard;
  updateCafe: ICafe;
  // eslint-disable-next-line no-use-before-define
  updateTheme: ITheme;
  // eslint-disable-next-line no-use-before-define
  updateThemeReview: IThemeReview;
};

export type IMutationLoginArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type IMutationCheckinputTokenArgs = {
  phone: Scalars["String"];
  tokenInput: Scalars["String"];
};

export type IMutationCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
};

export type IMutationCreateBoardreviewArgs = {
  createBoardreviewInput: ICreateBoardreviewInput;
};

export type IMutationCreateBoardsecondreviewArgs = {
  createBoardsecondreviewInput: ICreateBoardsecondreviewInput;
};

export type IMutationCreateCafeArgs = {
  createCafeInput: ICreateCafeInput;
};

export type IMutationCreateGenreArgs = {
  name: Scalars["String"];
};

export type IMutationCreateReservationArgs = {
  cafeId: Scalars["String"];
  createPaymentInput: ICreatePaymentInput;
  createReservationInput: ICreateReservationInput;
  themeMenuId: Scalars["String"];
};

export type IMutationCreateThemeArgs = {
  cafeName: Scalars["String"];
  createThemeInput: ICreateThemeInput;
  genreName: Scalars["String"];
};

export type IMutationCreateThemeMenuArgs = {
  createThemeMenuInput: ICreateThemeMenuInput;
};

export type IMutationCreateThemeReviewArgs = {
  createThemeReviewInput: ICreateThemeReviewInput;
  themeId: Scalars["String"];
};

export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};

export type IMutationDeleteBoardArgs = {
  title: Scalars["String"];
};

export type IMutationDeleteBoardreviewArgs = {
  id: Scalars["String"];
};

export type IMutationDeleteBoardsecondreviewArgs = {
  id: Scalars["String"];
};

export type IMutationDeleteCafeArgs = {
  cafeId: Scalars["String"];
};

export type IMutationDeleteGenreArgs = {
  genreId: Scalars["String"];
};

export type IMutationDeleteReservationArgs = {
  merchantUid: Scalars["String"];
  reservationId: Scalars["String"];
};

export type IMutationDeleteThemeArgs = {
  themeId: Scalars["String"];
};

export type IMutationDeleteThemeMenuArgs = {
  themeMenuId: Scalars["String"];
};

export type IMutationDeleteThemeReviewArgs = {
  themeReviewId: Scalars["String"];
};

export type IMutationDeleteUserArgs = {
  email: Scalars["String"];
};

export type IMutationSendTotkentoPhoneArgs = {
  phone: Scalars["String"];
};

export type IMutationUpdateBoardArgs = {
  boardId: Scalars["String"];
  // eslint-disable-next-line no-use-before-define
  updateBoardInput: IUpdateBoardInput;
};

export type IMutationUpdateCafeArgs = {
  cafeId: Scalars["String"];
  // eslint-disable-next-line no-use-before-define
  updateCafeInput: IUpdateCafeInput;
};

export type IMutationUpdateThemeArgs = {
  themeId: Scalars["String"];
  // eslint-disable-next-line no-use-before-define
  updateThemeInput: IUpdateThemeInput;
};

export type IMutationUpdateThemeReviewArgs = {
  themeReviewId: Scalars["String"];
  // eslint-disable-next-line no-use-before-define
  updateThemeReviewInput: IUpdateThemeReviewInput;
};

export type IPayment = {
  __typename?: "Payment";
  id: Scalars["String"];
  imp_uid: Scalars["String"];
  merchant_uid: Scalars["String"];
  price: Scalars["Int"];
  // eslint-disable-next-line no-use-before-define
  reservation: IReservation;
  usepoint: Scalars["Int"];
  // eslint-disable-next-line no-use-before-define
  user: IUser;
};

export type IQuery = {
  __typename?: "Query";
  fetchBoard: IBoard;
  fetchBoardComments: IBoard;
  fetchBoardreview: IBoardreview;
  fetchBoards: Array<IBoard>;
  fetchBoardsecondreview: IBoardsecondreview;
  fetchCafe: ICafe;
  fetchCafes: Array<ICafe>;
  fetchCafesCount: Scalars["Int"];
  // eslint-disable-next-line no-use-before-define
  fetchFindPassword: IUser;
  fetchGenres: Array<IGenre>;
  fetchPayments: Array<IPayment>;
  // eslint-disable-next-line no-use-before-define
  fetchReservation: IReservation;
  // eslint-disable-next-line no-use-before-define
  fetchReservations: Array<IReservation>;
  // eslint-disable-next-line no-use-before-define
  fetchReservationsUser: Array<IReservation>;
  // eslint-disable-next-line no-use-before-define
  fetchSocialUserLoggedIn: ISocialUser;
  // eslint-disable-next-line no-use-before-define
  fetchTheme: ITheme;
  // eslint-disable-next-line no-use-before-define
  fetchThemeMenus: Array<IThemeMenu>;
  // eslint-disable-next-line no-use-before-define
  fetchThemeReviews: Array<IThemeReview>;
  fetchThemeReviewsCount: Scalars["Int"];
  // eslint-disable-next-line no-use-before-define
  fetchThemes: Array<ITheme>;
  // eslint-disable-next-line no-use-before-define
  fetchThemesAll: Array<ITheme>;
  fetchThemesCount: Scalars["Int"];
  // eslint-disable-next-line no-use-before-define
  fetchThemesOnTheme: Array<ITheme>;
  // eslint-disable-next-line no-use-before-define
  fetchUser: IUser;
  // eslint-disable-next-line no-use-before-define
  fetchUserLoggedIn: IUser;
  test: Scalars["String"];
  testAuthGuard: Scalars["String"];
};

export type IQueryFetchBoardArgs = {
  id: Scalars["String"];
};

export type IQueryFetchBoardCommentsArgs = {
  boardId: Scalars["String"];
  page: Scalars["Float"];
};

export type IQueryFetchBoardreviewArgs = {
  id: Scalars["String"];
};

export type IQueryFetchBoardsecondreviewArgs = {
  id: Scalars["String"];
};

export type IQueryFetchCafeArgs = {
  cafeId: Scalars["String"];
};

export type IQueryFetchCafesArgs = {
  address?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Float"]>;
};

export type IQueryFetchFindPasswordArgs = {
  email: Scalars["String"];
  phone: Scalars["String"];
};

export type IQueryFetchPaymentsArgs = {
  userId: Scalars["String"];
};

export type IQueryFetchReservationArgs = {
  reservationId: Scalars["String"];
};

export type IQueryFetchReservationsArgs = {
  cafeId: Scalars["String"];
  reservationDate: Scalars["String"];
};

export type IQueryFetchReservationsUserArgs = {
  userId: Scalars["String"];
};

export type IQueryFetchThemeArgs = {
  themeId: Scalars["String"];
};

export type IQueryFetchThemeMenusArgs = {
  themeId: Scalars["String"];
};

export type IQueryFetchThemeReviewsArgs = {
  page?: InputMaybe<Scalars["Float"]>;
  themeId: Scalars["String"];
};

export type IQueryFetchThemesArgs = {
  genreId?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Float"]>;
};

export type IQueryFetchThemesOnThemeArgs = {
  cafeId: Scalars["String"];
};

export type IQueryFetchUserArgs = {
  email: Scalars["String"];
};

export type IReservation = {
  __typename?: "Reservation";
  cafe: ICafe;
  id: Scalars["String"];
  memo?: Maybe<Scalars["String"]>;
  payment: IPayment;
  reservation_date: Scalars["String"];
  status: Scalars["String"];
  // eslint-disable-next-line no-use-before-define
  theme_menu: IThemeMenu;
  // eslint-disable-next-line no-use-before-define
  user: IUser;
};

export type ISocialUser = {
  __typename?: "SocialUser";
  email: Scalars["String"];
  id: Scalars["String"];
  phone: Scalars["String"];
};

export type ITheme = {
  __typename?: "Theme";
  agelimit: Scalars["Int"];
  cafe: ICafe;
  clearTime: Scalars["String"];
  genre: IGenre;
  id: Scalars["String"];
  intro_content?: Maybe<Scalars["String"]>;
  intro_title?: Maybe<Scalars["String"]>;
  like: Scalars["Int"];
  mainImg: Scalars["String"];
  peoplelimit: Scalars["Int"];
  rank: Scalars["Int"];
  title: Scalars["String"];
};

export type IThemeMenu = {
  __typename?: "ThemeMenu";
  cafe: ICafe;
  id: Scalars["String"];
  people_number: Scalars["Int"];
  price: Scalars["Int"];
  reservation_time: Scalars["String"];
  theme: ITheme;
};

export type IThemeReview = {
  __typename?: "ThemeReview";
  clear: Scalars["Boolean"];
  content: Scalars["String"];
  createdAt: Scalars["DateTime"];
  id: Scalars["String"];
  rank: Scalars["String"];
  star: Scalars["Int"];
  theme: ITheme;
  // eslint-disable-next-line no-use-before-define
  user: IUser;
};

export type IUpdateBoardInput = {
  boardTags?: InputMaybe<Array<Scalars["String"]>>;
  content?: InputMaybe<Scalars["String"]>;
  like?: InputMaybe<Scalars["Int"]>;
  mainImg?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<Scalars["String"]>;
  view?: InputMaybe<Scalars["Int"]>;
};

export type IUpdateCafeInput = {
  address?: InputMaybe<Scalars["String"]>;
  address_detail?: InputMaybe<Scalars["String"]>;
  coordinate?: InputMaybe<Scalars["Float"]>;
  intro_content?: InputMaybe<Scalars["String"]>;
  mainImg?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  subImgs?: InputMaybe<Array<Scalars["String"]>>;
  users?: InputMaybe<Array<Scalars["String"]>>;
};

export type IUpdateThemeInput = {
  agelimit?: InputMaybe<Scalars["Int"]>;
  clearTime: Scalars["String"];
  intro_content?: InputMaybe<Scalars["String"]>;
  intro_title?: InputMaybe<Scalars["String"]>;
  mainImg?: InputMaybe<Scalars["String"]>;
  peoplelimit?: InputMaybe<Scalars["Int"]>;
  rank?: InputMaybe<Scalars["Int"]>;
  subImgs?: InputMaybe<Array<Scalars["String"]>>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IUpdateThemeReviewInput = {
  clear?: InputMaybe<Scalars["Boolean"]>;
  content?: InputMaybe<Scalars["String"]>;
  rank?: InputMaybe<Scalars["String"]>;
  star?: InputMaybe<Scalars["Int"]>;
};

export type IUser = {
  __typename?: "User";
  board?: Maybe<Array<IBoard>>;
  cafe?: Maybe<Array<Scalars["String"]>>;
  createdAt: Scalars["DateTime"];
  email: Scalars["String"];
  id: Scalars["String"];
  isserviceprovider?: Maybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  password: Scalars["String"];
  phone: Scalars["String"];
  point?: Maybe<Scalars["Int"]>;
  updatedAt: Scalars["DateTime"];
};
