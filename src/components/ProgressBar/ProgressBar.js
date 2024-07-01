/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = { 
  small: { 
    height: '8px',
    padding: '0px'
  }, 
  medium: { 
    height: '12px',
    padding: '0px',
  }, 
  large: { 
    height: '24px',
    padding: 4 + 'px',
  }
}

const ProgressBar = ({ value, size }) => {
  return <ProgressWrapper style={SIZES[size]} role="progressbar" aria-valuenow={value} aria-labelledby="progressbarlabel">
    <VisuallyHidden id="progressbarlabel">Progress bar</VisuallyHidden>
    <BarWrapper>
      <Bar style={{'--progressPercent': value + '%'}}/>
    </BarWrapper>
  </ProgressWrapper>;
};

const ProgressWrapper = styled.div`
  width: 370px;
  height: var(--height);
  border-radius: 4px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: 0 2px 4px ${COLORS.transparentGray35} inset;
  padding: var(--padding);
`

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
  background: none;
  height: 100%;
`

const Bar = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
  width: var(--progressPercent); 
  height: 100%;
`

export default ProgressBar;
