import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import CheckBox from './CheckBox';

describe('CheckBox', () => {
  const renderComponent = props => {
    return render(<CheckBox {...props} />);
  };

  const mockProps = {
    label: 'label',
    checked: false,
    toggleCheckBox: jest.fn(),
  };

  it('Render label checkBox', () => {
    const { getByLabelText } = renderComponent(mockProps);

    expect(getByLabelText(/label/i)).toBeInTheDocument();
  });

  it('Call toggleCheckBox when checked', () => {
    const { getByTestId } = renderComponent(mockProps);

    fireEvent.click(getByTestId('checkBox'));

    expect(mockProps.toggleCheckBox).toHaveBeenCalled();
  });

  it('Checked === true', () => {
    const { getByTestId } = renderComponent({ ...mockProps, checked: true });

    expect(getByTestId('checkBox').hasAttribute('checked')).toBe(true);
  });

  it('Checked === false', () => {
    const { getByTestId } = renderComponent(mockProps);

    expect(getByTestId('checkBox').hasAttribute('checked')).toBe(false);
  });
});
