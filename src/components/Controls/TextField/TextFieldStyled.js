import styled from 'styled-components';

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  width: 100%;
  color: #756f86;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
`;

export const Input = styled.input`
  margin: 8px 0;
  padding: 16px;
  font-size: 16px;
  line-height: 21px;
  background: #ffffff;
  border: 1px solid #dbe2ea;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 6px;
  color: #2c2738;

  &::placeholder {
    font-family: 'IBM Plex Sans', sans-serif;
    color: #7c9cbf;
  }

  &:focus {
    outline: 2px solid #0880ae;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 14px;
  line-height: 18px;
  color: #ff7171;
  margin: 8px 0;
`;
