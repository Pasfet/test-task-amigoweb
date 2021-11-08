import styled from 'styled-components';

export const CheckBoxContainer = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
  & > span > .accent {
    color: #0880ae;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const CheckBoxLabel = styled.label`
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #756f86;
`;

export const HiddenCheckBox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const StyledCheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #dbe2ea;
  outline: ${props => props.checked && '2px solid #0880AE'};
  margin-right: 8px;

  &:focus,
  &:active {
    outline: 2px solid #0880ae;
  }
  & > svg {
    fill: #0880ae;
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;
