import PropTypes from 'prop-types';
import { memo } from 'react';
import { ErrorMessage, Input, InputLabel } from './TextFieldStyled';

const TextField = ({ label, placeholder, inputData, changeHandler }) => {
  return (
    <InputLabel>
      {label}
      <Input
        type="text"
        placeholder={placeholder}
        value={inputData?.value}
        onChange={e => changeHandler(inputData?.name, e.target.value)}
      />
      {inputData?.error && <ErrorMessage> {inputData?.error} </ErrorMessage>}
    </InputLabel>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  inputData: PropTypes.object,
  changeHandler: PropTypes.func,
};

export default memo(TextField);
