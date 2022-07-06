import styled from "@emotion/styled";

export const Container = styled.main`
  padding: 30px 0px;

  display: flex;
  flex-direction: column;
`;
export const ThemeInfoWrapper = styled.section`
  width: 100%;
  height: 560px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const ThemeLeftBox = styled.div``;

export const ThemeImg = styled.img`
  width: 370px;
  height: 560px;
`;
export const ThemeRightBox = styled.div`
  min-width: 500px;
  max-width: 650px;
  max-height: 560px;
  padding: 5px 20px;
  float: right;
`;

export const GenreTag = styled.div`
  width: 140px;
  height: 45px;
  border-radius: 8px;
  background-color: #492396b0;
  font-size: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const ThemeTitle = styled.h2`
  color: #26282c;
  font-size: 28px;
`;

export const ThemeContents = styled.h5`
  padding: 10px;
  border-top: 1px solid #c8c8c8;
  border-bottom: 1px solid #c8c8c8;
  font-size: 22px;
  /* white-space: pre-wrap; */
`;

export const RankTimeBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
`;

export const ThemeRank = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;
export const ThemeTime = styled.div``;
export const ChargeBox = styled.div``;
export const ThemeCharge = styled.div``;

export const ReservationButton = styled.button`
  width: 370px;
  height: 56px;
  border-radius: 8px;
  font-weight: 700;
  border: transparent;
  background-color: #4a00e0;
  color: white;
`;
