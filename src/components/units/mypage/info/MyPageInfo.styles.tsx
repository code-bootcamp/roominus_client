import styled from "@emotion/styled";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6.25rem 15rem;
  background-color: beige;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 90rem;

  border: 1px solid gray;
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Label = styled.label`
  font-size: 1.25rem;
  font-weight: 600;
  width: 50%;
  color: #464646;
  background-color: aliceblue;
`;

export const Button = styled.button`
  width: 29rem;
  height: 3.875rem;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.5rem;

  color: white;
  background-color: #9691ed;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

export const ModalTitle = styled.span`
  font-size: 45px;
  text-align: center;
  padding: 10px;
`;

export const InputLabel = styled.span`
  display: flex;
  justify-items: left;
  font-size: 25px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 15px;
  color: red;
`;

export const ButtonWrapper = styled.div`
  padding: 10px;
  margin: 10px;
`;
