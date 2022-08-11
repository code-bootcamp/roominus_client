import { useEffect } from "react";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

declare const window: typeof globalThis & {
  kakao: any;
};

const Map = styled.div`
  width: 100%;
  height: 25em;

  @media ${breakPoints.mobile} {
    height: 18em;
  }
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
    if (props.data?.fetchCafe?.address_detail) {
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false&libraries=services`;
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

                new window.kakao.maps.Marker({
                  map,
                  position: coords,
                  // image: markerImage,
                });

                map.setCenter(coords);
              }
            }
          );
        });
      };
    }
  }, [props.data?.fetchCafe?.address_detail]);

  return <Map id="map"></Map>;
}
