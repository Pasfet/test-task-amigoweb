import {
  DropDownContainer,
  DropDownHeader,
  DropDownItem,
  DropDownLabel,
  DropDownList,
  DropDownListContainer,
  DropDownSelected,
  DropDownSelectedArrow,
} from './DropDownStyled';
import { ReactComponent as ArrowDownIcon } from './arrowDown.svg';
import PropTypes from 'prop-types';

const DropDown = ({ options, title, selectedOption, isOpen, toggleOpen, onOptionClicked }) => {
  return (
    <DropDownContainer>
      <DropDownHeader onClick={() => toggleOpen()} ariaLabel={title}>
        <DropDownLabel>{title}</DropDownLabel>
        <DropDownSelected
          active={isOpen && 'active'}
          onKeyDown={e => e.key === 'Enter' && toggleOpen()}
          tabIndex="0"
        >
          {selectedOption?.label || title}
          <DropDownSelectedArrow>
            <ArrowDownIcon />
          </DropDownSelectedArrow>
        </DropDownSelected>
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options?.map(option => (
              <DropDownItem
                key={option.id}
                onClick={() => onOptionClicked(option)}
                onKeyDown={e => e.key === 'Enter' && onOptionClicked(option)}
                tabIndex="0"
              >
                {option.label}
              </DropDownItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

DropDown.propTypes = {
  options: PropTypes.array,
  title: PropTypes.string,
  selectedOption: PropTypes.object,
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func,
  onOptionClicked: PropTypes.func,
};

export default DropDown;
