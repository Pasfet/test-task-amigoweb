import styled, { css } from 'styled-components';

export const DropDownContainer = styled.div`
  width: 100%;
  min-width: 200px;
  position: relative;
`;
export const DropDownLabel = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #756f86;
`;
export const DropDownHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

export const DropDownSelected = styled.div`
  min-width: 200px;
  width: 100%;
  margin-top: 8px;
  padding: 16px;
  font-size: 16px;
  line-height: 21px;
  color: #2c2738;

  background: #ffffff;
  border: 1px solid #dbe2ea;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.08), 0px 24px 48px rgba(44, 39, 56, 0.16);
  }

  &:active,
  &:focus {
    outline: 2px solid #0880ae;
  }

  ${props =>
    props.active &&
    css`
      outline: 2px solid #0880ae;
    `}
`;

export const DropDownSelectedArrow = styled.div`
  width: 16px;
  height: 16px;
  & > svg {
    fill: #0880ae;
  }
`;
export const DropDownListContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 20;
  background-color: #fff;
`;
export const DropDownList = styled.ul`
  padding: 12px 0;
  margin: 0;
  list-style-type: none;
  border: 1px solid #dbe2ea;
  border-radius: 6px;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04), 0px 20px 20px rgba(44, 39, 56, 0.04);
`;
export const DropDownItem = styled.li`
  padding: 1em;
  font-size: 16px;
  line-height: 21px;
  color: #756f86;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: #ebf4f8;
  }
  &:focus {
    outline: 2px solid #0880ae;
  }
`;
