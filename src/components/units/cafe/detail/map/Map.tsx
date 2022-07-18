import { useEffect } from "react";
import styled from "@emotion/styled";

declare const window: typeof globalThis & {
  kakao: any;
};

const Map = styled.div`
  width: 100%;
  height: 23em;
`;

export default function KakaoMap(props) {
  //지도
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=105d9e45b37b65e70dd1d31a18e23d78&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          props.data?.fetchCafe?.address_detail,
          function (result, status) {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              console.log(result);
              console.log(status);

              const marker = new window.kakao.maps.Marker({
                map,
                position: coords,
              });

              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.data?.fetchCafe?.address_detail]);

  return <Map id="map"></Map>;
}
