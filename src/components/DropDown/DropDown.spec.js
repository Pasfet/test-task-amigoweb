import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import DropDown from './DropDown';

describe('DropDown', () => {
  const renderComponent = props => {
    return render(<DropDown {...props} />);
  };

  const mockProps = {
    options: [
      { id: 1, label: 'Russian' },
      { id: 2, label: 'English' },
    ],
    title: 'Lang',
    selectedOption: {},
    isOpen: false,
    toggleOpen: jest.fn(),
    onOptionClicked: jest.fn(),
  };

  it('Render dropdown header and selected if selectedOption is empty', () => {
    const { getAllByText } = renderComponent(mockProps);

    expect(getAllByText(mockProps.title).length).toBe(2);
  });

  it('Render selectedOption', () => {
    const { getByText } = renderComponent({
      ...mockProps,
      selectedOption: { label: 'Selected option' },
    });

    expect(getByText(/Selected option/i)).toBeInTheDocument();
  });

  it('Call toggleOpen when click on DropDownHeader', () => {
    const { getAllByText } = renderComponent(mockProps);

    fireEvent.click(getAllByText(mockProps.title)[0]);

    expect(mockProps.toggleOpen).toHaveBeenCalled();
  });

  it('Call toggleOpen when press Enter on selected', () => {
    const { getAllByText } = renderComponent(mockProps);

    fireEvent.keyDown(getAllByText(mockProps.title)[1], { key: 'Enter' });

    expect(mockProps.toggleOpen).toHaveBeenCalled();
  });

  it('Does not render options when isOpen === false', () => {
    const { queryByText } = renderComponent(mockProps);

    mockProps.options.forEach(opt => expect(queryByText(opt.label)).not.toBeInTheDocument());
  });

  it('Render options when isOpen === true', () => {
    const { getByText } = renderComponent({ ...mockProps, isOpen: true });

    mockProps.options.forEach(opt => expect(getByText(opt.label)).toBeInTheDocument());
  });

  it('Call onOptionClicked when click on DropDownItem', () => {
    const { getByText } = renderComponent({ ...mockProps, isOpen: true });

    fireEvent.click(getByText(mockProps.options[0].label));

    expect(mockProps.onOptionClicked).toHaveBeenCalledWith(mockProps.options[0]);
  });

  it('Call onOptionClicked when keyDown Enter', () => {
    const { getByText } = renderComponent({ ...mockProps, isOpen: true });

    fireEvent.keyDown(getByText(mockProps.options[0].label), { key: 'Enter' });

    expect(mockProps.onOptionClicked).toHaveBeenCalledWith(mockProps.options[0]);
  });
});
