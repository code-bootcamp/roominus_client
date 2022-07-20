import { useEffect } from "react";
import styled from "@emotion/styled";

declare const window: typeof globalThis & {
  kakao: any;
};

const Map = styled.div`
  width: 100%;
  height: 26em;
`;

interface IKakaoMapProps {
  data?: {
    fetchCafe: {
      mainImg: string;
      name: string;
      address: string;
      phone: string;
      intro_content: string;
      address_detail: string;
    };
  };
}

export default function KakaoMap(props: IKakaoMapProps) {
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

        // const imageSrc = "/img/cafe/key.png"; // 마커이미지의 주소입니다
        // const imageSize = new window.kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
        // const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // const markerImage = new window.kakao.maps.MarkerImage(
        //   imageSrc,
        //   imageSize,
        //   imageOption
        // );

        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          props.data?.fetchCafe?.address_detail,
          function (result: any, status: string) {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              console.log(typeof result);
              console.log(typeof status);

              const marker = new window.kakao.maps.Marker({
                map,
                position: coords,
                // image: markerImage,
              });
              console.log(marker);

              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.data?.fetchCafe?.address_detail]);

  return <Map id="map"></Map>;
}
