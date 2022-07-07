import { useRouter } from "next/router";
import SignUpDetailUI from "./SignUpDetail.presenter";
import {
  getAuth,
  signOut,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { useEffect } from "react";
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
export default function SignUpDetail() {
  const router = useRouter();
  const email = router.query.email;
  console.log(email);
  const onClickSocialIDLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/login");
      }
    });
  }, [auth]);

  return (
    <SignUpDetailUI
      email={email}
      onClickSocialIDLogout={onClickSocialIDLogout}
    />
  );
}
