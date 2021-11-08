import styled, { css } from 'styled-components';

export const ButtonWrap = styled.button`
  width: 100%;
  background-color: #0880ae;
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
  border-radius: 6px;
  color: #ebf4f8;
  text-transform: capitalize;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  padding: 17px 40px;
  border: 2px solid #ebf4f8;
  transition: box-shadow 0.3s ease-in-out, border 0.3s ease-in-out;

  &:hover {
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
    box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.08), 0px 24px 48px rgba(44, 39, 56, 0.16);
  }

  &:active {
    border: 2px solid rgba(44, 39, 56, 0.86);
  }

  ${props =>
    props.disabled &&
    css`
      background: #dbe2ea;
      box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.08);
      color: #2c2738;
      opacity: 0.5;
    `}
`;
