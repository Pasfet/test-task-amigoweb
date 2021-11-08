import { useEffect, useState } from 'react';
import {
  SignUpHeader,
  SignUpHeaderDescription,
  SignUpHeaderDescriptionLink,
  SignUpHeaderDescriptionText,
  SignUpHeaderWrapper,
  SignUpWrapper,
} from './SignUpContainerStyled';

import Form from '../components/Form/Form';

const options = [
  {
    id: 1,
    label: 'Русский',
    value: 'ru',
  },
  {
    id: 2,
    label: 'Английский',
    value: 'en',
  },
  {
    id: 3,
    label: 'Китайский',
    value: 'ch',
  },
  {
    id: 4,
    label: 'Испанский',
    value: 'es',
  },
];

const SignUpContainer = () => {
  const [validFormData, setValidFormData] = useState(null);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [terms, setTerms] = useState(false);
  const [user, setUser] = useState({
    name: { name: 'name', value: '', error: null },
    email: { name: 'email', value: '', error: null },
    tel: { name: 'tel', value: '', error: null },
  });

  const toggleCheckBox = e => setTerms(e.target.checked);
  const toggleOpen = () => setIsSelectOpen(!isSelectOpen);

  const onOptionClicked = option => {
    setSelectedOption(option);
    setIsSelectOpen(false);
  };

  const checkValid = (valid, name, value, error) => {
    if (valid) {
      setUser(prev => ({ ...prev, [name]: { ...prev[name], value, error: null } }));
    } else {
      setUser(prev => ({ ...prev, [name]: { ...prev[name], value, error } }));
    }
  };

  const changeUserData = (name, value) => {
    let valid;
    switch (name) {
      case 'name':
        valid = /^[a-zA-Zа-яё\-\s\D]{2,}$/i.test(value);
        checkValid(
          valid,
          name,
          value,
          'Имя не должно содержать цифры или символы, кроме пробела или дефиса',
        );
        break;
      case 'email':
        // eslint-disable-next-line no-useless-escape
        valid = /(^\w+(|(\.|\-)\w+))(?=@[a-z]{2,}\.[a-z]{2,4}\b)/i.test(value);
        checkValid(valid, name, value, 'Некорректный Email');
        break;
      case 'tel':
        valid = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11}$/.test(value);
        checkValid(valid, name, value, 'Некорректный номер телефона');
        break;
      default:
        break;
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log('Отправлено на сервер с данными: ', {
      ...user,
      lang: selectedOption,
    });
  };

  useEffect(() => {
    const data = Object.entries(user);
    const err = data.every(item => item[1].error === null && item[1].value !== '');
    if (err) {
      return setValidFormData(true);
    }
    setValidFormData(false);
  }, [user]);

  return (
    <SignUpWrapper>
      <SignUpHeaderWrapper>
        <SignUpHeader>Регистрация</SignUpHeader>
        <SignUpHeaderDescription>
          <SignUpHeaderDescriptionText>Уже есть аккаунт?</SignUpHeaderDescriptionText>
          <SignUpHeaderDescriptionLink href="#">Войти</SignUpHeaderDescriptionLink>
        </SignUpHeaderDescription>
      </SignUpHeaderWrapper>
      <Form
        submitHandler={submitHandler}
        user={user}
        changeUserData={changeUserData}
        validFormData={validFormData}
        selectOptions={options}
        selectedOption={selectedOption}
        isSelectOpen={isSelectOpen}
        toggleOpen={toggleOpen}
        onOptionClicked={onOptionClicked}
        terms={terms}
        toggleCheckBox={toggleCheckBox}
      />
    </SignUpWrapper>
  );
};

export default SignUpContainer;
