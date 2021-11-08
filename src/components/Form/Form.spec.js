import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  const renderComponent = props => {
    return render(<Form {...props} />);
  };

  const mockProps = {
    user: {
      name: { name: 'name', value: 'MyName', error: null },
      email: { name: 'email', value: 'mail@mail.com', error: null },
      tel: { name: 'tel', value: '89992399999', error: null },
    },
    changeUserData: jest.fn(),
    submitHandler: jest.fn(),
    validFormData: false,
    selectOptions: [{ id: 1, label: 'ru' }],
    selectedOption: {},
    isSelectOpen: false,
    toggleOpen: jest.fn(),
    onOptionClicked: jest.fn(),
    terms: false,
    toggleCheckBox: jest.fn(),
  };

  it('Render name input', () => {
    const { getByDisplayValue, getByLabelText, getByPlaceholderText } = renderComponent(mockProps);

    expect(getByDisplayValue(mockProps.user.name.value)).toBeInTheDocument();
    expect(getByLabelText(/Имя/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/Введите ваше имя/i)).toBeInTheDocument();
  });

  it('Render email input', () => {
    const { getByDisplayValue, getByLabelText, getByPlaceholderText } = renderComponent(mockProps);

    expect(getByDisplayValue(mockProps.user.email.value)).toBeInTheDocument();
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByPlaceholderText(/Введите ваш email/i)).toBeInTheDocument();
  });

  it('Render telNumber input', () => {
    const { getByDisplayValue, getByLabelText, getByPlaceholderText } = renderComponent(mockProps);

    expect(getByDisplayValue(mockProps.user.tel.value)).toBeInTheDocument();
    expect(getByLabelText(/Телефон/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/Введите ваш номер телефона/i)).toBeInTheDocument();
  });

  it('Render DropDown select', () => {
    const { getAllByText } = renderComponent(mockProps);

    expect(getAllByText(/Язык/i).length).toBe(2);
  });

  it('Render checkBox', () => {
    const { getByText } = renderComponent(mockProps);

    expect(getByText(/Принимаю/i)).toBeInTheDocument();
    expect(getByText(/условия/i)).toBeInTheDocument();
    expect(getByText(/использования/i)).toBeInTheDocument();
  });

  it('Render Button', () => {
    const { getByText } = renderComponent(mockProps);

    expect(getByText(/Зарегистрироваться/i)).toBeInTheDocument();
  });

  it('Does not called submitHandler when button disabled', () => {
    const { getByText } = renderComponent(mockProps);

    fireEvent.click(getByText(/Зарегистрироваться/i));

    expect(getByText(/Зарегистрироваться/i).hasAttribute('disabled')).toBe(true);
    expect(mockProps.submitHandler).not.toHaveBeenCalled();
  });

  it('Call submitHandler when button disabled === false', () => {
    const { getByText } = renderComponent({ ...mockProps, validFormData: true, terms: true });

    fireEvent.submit(getByText(/Зарегистрироваться/i));

    expect(getByText(/Зарегистрироваться/i).hasAttribute('disabled')).toBe(false);
    expect(mockProps.submitHandler).toHaveBeenCalled();
  });
});
