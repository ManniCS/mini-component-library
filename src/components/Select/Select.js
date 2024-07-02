import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ id, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectWrapper id={id} value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <PresentationalWrapper>
        {displayedValue}
        <IconWrapper
          style={{
            '--size': 24 + 'px',
          }}   
        >
          <Icon id="chevron-down" size={24} strokeWidth={2}/>
        </IconWrapper>
      </PresentationalWrapper> 
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`
const SelectWrapper = styled.select`
  position: absolute;
  top: 0; 
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  /* allow the select to span the full height in Safari */
  appearance: none;
`

const PresentationalWrapper = styled.div`  
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font: 1rem 'Roboto', sans-serif;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;

  ${SelectWrapper}:focus + & { 
    outline: 5px auto Highlight;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${SelectWrapper}:hover + & { 
    color: ${COLORS.black};
  }
`
const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 10px;
  height: var(--size);
  width: var(--size);
  pointer-events: none;
`

export default Select;
