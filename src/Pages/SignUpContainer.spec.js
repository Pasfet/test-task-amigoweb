import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import SignUpContainer from './SignUpContainer';

describe('SignUpContainer', () => {
  const renderComponent = props => {
    return render(<SignUpContainer {...props} />);
  };

  it('Render SignUpHeader', () => {
    const { getByText } = renderComponent();

    expect(getByText(/Регистрация/i)).toBeInTheDocument();
    expect(getByText(/Уже есть аккаунт?/i)).toBeInTheDocument();
    expect(getByText(/Войти/i)).toBeInTheDocument();
  });

  it('Render nameError when name does not correct', () => {
    const errMsg = 'Имя не должно содержать цифры или символы, кроме пробела или дефиса';

    const { getByText, getByPlaceholderText, getByDisplayValue } = renderComponent();

    fireEvent.change(getByPlaceholderText(/Введите ваше имя/i), {
      target: { value: 's' },
    });

    expect(getByText(errMsg)).toBeInTheDocument();
    expect(getByDisplayValue('s')).toBeInTheDocument();
  });

  it('Render nameError when name has number', () => {
    const errMsg = 'Имя не должно содержать цифры или символы, кроме пробела или дефиса';

    const { getByText, getByPlaceholderText, getByDisplayValue } = renderComponent();

    fireEvent.change(getByPlaceholderText(/Введите ваше имя/i), {
      target: { value: 'ss23' },
    });

    expect(getByText(errMsg)).toBeInTheDocument();
    expect(getByDisplayValue('ss23')).toBeInTheDocument();
  });

  it('Does not render nameError when name is correct', () => {
    const errMsg = 'Имя не должно содержать цифры или символы, кроме пробела или дефиса';

    const { queryByText, getByPlaceholderText, getByDisplayValue } = renderComponent();

    fireEvent.change(getByPlaceholderText(/Введите ваше имя/i), {
      target: { value: 'Name' },
    });

    expect(queryByText(errMsg)).not.toBeInTheDocument();
    expect(getByDisplayValue('Name')).toBeInTheDocument();
  });

  it('Render emailError when email does not correct', () => {
    const errMsg = 'Некорректный Email';
    const { getByText, getByPlaceholderText, getByDisplayValue } = renderComponent();

    fireEvent.change(getByPlaceholderText(/Введите ваш email/i), {
      target: { value: 'mail.mail.ru' },
    });

    expect(getByText(errMsg)).toBeInTheDocument();
    expect(getByDisplayValue('mail.mail.ru')).toBeInTheDocument();
  });

  it('Does not render emailError when email is correct', () => {
    const errMsg = 'Некорректный Email';

    const { queryByText, getByPlaceholderText, getByDisplayValue } = renderComponent();

    fireEvent.change(getByPlaceholderText(/Введите ваш email/i), {
      target: { value: 'mail@mail.com' },
    });

    expect(queryByText(errMsg)).not.toBeInTheDocument();
    expect(getByDisplayValue('mail@mail.com')).toBeInTheDocument();
  });

  it('Render telError when telNumber does not correct', () => {
    const errMsg = 'Некорректный номер телефона';
    const { getByText, getByPlaceholderText, getByDisplayValue } = renderComponent();

    fireEvent.change(getByPlaceholderText(/Введите ваш номер телефона/i), {
      target: { value: '8999' },
    });

    expect(getByText(errMsg)).toBeInTheDocument();
    expect(getByDisplayValue('8999')).toBeInTheDocument();
  });

  it('Does not render telError when telNumber is correct', () => {
    const errMsg = 'Некорректный номер телефона';

    const { queryByText, getByPlaceholderText, getByDisplayValue } = renderComponent();

    fireEvent.change(getByPlaceholderText(/Введите ваш номер телефона/i), {
      target: { value: '89992291399' },
    });

    expect(queryByText(errMsg)).not.toBeInTheDocument();
    expect(getByDisplayValue('89992291399')).toBeInTheDocument();
  });
});
