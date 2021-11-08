import { memo } from 'react';
import { ButtonWrap } from './ButtonStyled';

const Button = ({ text, disabled, type }) => {
  return (
    <ButtonWrap disabled={disabled} type={type ? type : 'button'}>
      {text}
    </ButtonWrap>
  );
};

export default memo(Button);
