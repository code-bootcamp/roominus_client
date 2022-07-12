import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;
export const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 2em;
  color: #bf9eeb;
`;
export const ThemeLists = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export const ThemeItemWrapper = styled.section`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  margin: 1em;
  border-radius: 20px;
  padding: 2em 2em 2em 2em;
  cursor: pointer;
  :hover {
    transform: translateY(-15px);
  }
  transition: all 250ms ease-in;
`;
export const ThemeTitleBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PreviewImg = styled.img`
  width: 15em;
  height: 15em;
  margin-bottom: 1em;
`;
export const DefaultImg = styled.img`
  width: 15em;
  height: 15em;
  margin-bottom: 1em;
`;
export const TitleBox = styled.div``;
export const MainTitle = styled.div`
  height: 25%;
  width: 100%;
  text-align: center;
  font-size: 1.5em;
`;
export const SubTitle = styled.div`
  height: 25%;
  width: 100%;
  text-align: center;
  font-size: 1.1em;
`;
export const RestDetailInfo = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  font-size: 1em;
`;

export const AgeLimit = styled.div``;
export const Like = styled.div``;
