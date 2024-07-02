import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper tabindex={0}>
      <ValueWrapper>{displayedValue}</ValueWrapper>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <IconWrapper id="chevron-down" size={16} strokeWidth={2}/>
    </Wrapper>
  );
};


const ValueWrapper = styled.span`  
  position: relative;
  width: max-content;
  font: 1rem 'Roboto', sans-serif;
  padding: 12px 52px 12px 16px;
  top: 12px;
`

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 14px;
  right: 18px;
  color: ${COLORS.gray700};
  pointer-events: none;
`
const Wrapper = styled.div`
  /* anchors the IconWrapper element */
  position: relative;

  color: ${COLORS.gray700};
  height: 43px;
  width: fit-content;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};

  &:focus-within { 
    outline: 5px auto Highlight;
    outline: 5px auto -webkit-focus-ring-color;
  }

  &:hover {
    ${ValueWrapper} { 
      color: ${COLORS.black};
    }
    ${IconWrapper} { 
      color: ${COLORS.black};
    }
  }
`
const SelectWrapper = styled.select`
  position: absolute;
  width: 100%;
  opacity: 0;
  option { 
    opacity: 1;
  }
  margin: auto;
  inset: 0;
`

export default Select;
