import PropTypes from 'prop-types';
import { CheckBoxContainer, CheckBoxLabel, HiddenCheckBox, StyledCheckBox } from './CheckBoxStyled';
import { ReactComponent as CheckIcon } from './Check.svg';
import ReactHtmlParser from 'react-html-parser';
import { memo } from 'react';

const CheckBox = ({ label, checked, toggleCheckBox }) => {
  return (
    <CheckBoxLabel>
      <CheckBoxContainer>
        <HiddenCheckBox
          checked={checked}
          onChange={toggleCheckBox}
          tabIndex="-1"
          data-testid="checkBox"
        />
        <StyledCheckBox checked={checked} tabIndex="0">
          <CheckIcon />
        </StyledCheckBox>
        <span> {ReactHtmlParser(label)} </span>
      </CheckBoxContainer>
    </CheckBoxLabel>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  toggleCheckBox: PropTypes.func,
};

export default memo(CheckBox);
