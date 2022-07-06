import FindPasswordUI from "./FindPassword.presenter";

export default function FindPassword(props) {
  return (
    <FindPasswordUI
      onClickShowContentsFirst={props.onClickShowContentsFirst}
      onClickShowContentsSecond={props.onClickShowContentsSecond}
      isClickedsecond={props.isClickedsecond}
      isClickedfirst={props.isClickedfirst}
      onSubmitVerificationEmail={props.onSubmitVerificationEmail}
      isOpenedPassword={props.isOpenedPassword}
    />
  );
}
