import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { breakPoints } from "../../../../commons/styles/media";
import { Image } from "antd";

export const Container = styled.main`
  width: 100%;
  padding: 2em 0em;
  display: flex;
  flex-direction: row;

  @media ${breakPoints.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageBox = styled(Image)`
  width: 100%;
  height: 31em;
  margin: auto;
  border-radius: 10px;
  /* object-fit: cover; */

  @media ${breakPoints.mobile} {
    height: 25em;
  }
`;

export const Wrapper = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid #d9d6e0;
  box-shadow: 0px 4px 4px rgba(217, 214, 224, 0.25);
  border-radius: 8px;
  padding: 2em;
  margin-right: 2em;

  @media ${breakPoints.tablet} {
    margin-right: 0;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    margin-right: 0;
  }
`;

export const NameDateBox = styled.div`
  height: 2em;
  margin-bottom: 1em;
  display: flex;
  flex-direction: row;
`;

export const WriterName = styled.h1`
  height: 100%;
  font-size: 1.5em;
  margin-right: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${breakPoints.mobile} {
    font-size: 1.4em;
  }
`;

export const Date = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #a3a8b7;
`;

export const PickAndShareBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PickBox = styled.div`
  height: 3em;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
`;

export const PickIcon = styled.img`
  width: 1.6em;
  margin-right: 0.5em;
`;

export const PickCount = styled.span`
  font-weight: 700;
`;

export const BoardTitle = styled.h1`
  font-size: 1.6em;
  font-weight: 600;

  @media ${breakPoints.mobile} {
    font-size: 1.2em;
  }
`;

export const Tag = styled.div`
  width: 100%;
  font-size: 1.1em;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Tags = styled.div`
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #dfd5f6;
  color: #4a00e0e7;
  margin-right: 10px;
  border-radius: 15px;
  padding: 13px;
  font-size: 0.8em;
`;

export const BoardContents = styled.div`
  margin-top: 2em;
  margin-bottom: 4em;
  font-size: 1.2em;
`;

export const Comment = styled.div`
  width: 80%;

  @media ${breakPoints.tablet} {
    width: 90%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ButtonBox = styled.div`
  gap: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.mobile} {
    gap: 0.7em;
  }
`;

export const RedHeart = styled(FontAwesomeIcon)`
  padding: 2px;
  font-size: 25px;
  color: #e35d5b;
  margin-right: 0.3em;
  cursor: pointer;
`;

export const GrayHeart = styled(FontAwesomeIcon)`
  padding: 2px;
  font-size: 25px;
  color: #dad6e1;
  margin-right: 0.3em;
  cursor: pointer;
`;

export const CommentTitleBox = styled.div`
  height: 1.5em;
  display: flex;
  flex-direction: row;
  margin-bottom: 1em;

  @media ${breakPoints.tablet} {
    margin-top: 2em;
  }

  @media ${breakPoints.mobile} {
    margin-top: 2em;
  }
`;

export const CommentIcon = styled.img`
  width: 1.5em;
  margin-right: 0.5em;
`;

export const CommentTitle = styled.h1`
  font-size: 1.3em;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
