import PropTypes from 'prop-types';
import { FormWrap } from './FormStyled';
import DropDown from '../DropDown/DropDown';
import CheckBox from '../Controls/CheckBox/CheckBox';
import Button from '../Controls/Button/Button';
import TextField from '../Controls/TextField/TextField';

const Form = ({
  user,
  changeUserData,
  submitHandler,
  validFormData,
  selectOptions,
  selectedOption,
  isSelectOpen,
  toggleOpen,
  onOptionClicked,
  terms,
  toggleCheckBox,
}) => {
  return (
    <FormWrap onSubmit={e => submitHandler(e)}>
      <TextField
        label="Имя"
        placeholder="Введите ваше имя"
        inputData={user?.name}
        changeHandler={changeUserData}
      />
      <TextField
        label="Email"
        placeholder="Введите ваш email"
        inputData={user?.email}
        changeHandler={changeUserData}
      />
      <TextField
        label="Телефон"
        placeholder="Введите ваш номер телефона"
        inputData={user?.tel}
        changeHandler={changeUserData}
      />
      <DropDown
        options={selectOptions}
        title="Язык"
        selectedOption={selectedOption}
        isOpen={isSelectOpen}
        toggleOpen={toggleOpen}
        onOptionClicked={onOptionClicked}
      />
      <CheckBox
        checked={terms}
        toggleCheckBox={toggleCheckBox}
        label="Принимаю <span class='accent'>условия</span> использования"
      />

      <Button
        text="Зарегистрироваться"
        disabled={validFormData && terms ? false : true}
        type="submit"
      />
    </FormWrap>
  );
};

Form.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  validFormData: PropTypes.bool,
  selectOptions: PropTypes.array,
  selectedOption: PropTypes.object,
  isSelectOpen: PropTypes.bool,
  toggleOpen: PropTypes.func,
  onOptionClicked: PropTypes.func,
  terms: PropTypes.bool,
  toggleCheckBox: PropTypes.func,
};

export default Form;
