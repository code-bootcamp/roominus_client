import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReservationSuccessUI from "./ReservationSuccess.presenter";

export default function ReservationSuccess() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.pathname);
  }, []);
  return <ReservationSuccessUI url={url} />;
}
