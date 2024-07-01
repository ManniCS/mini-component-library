/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = { 
  small: { 
    height: '8px',
    padding: '0px',
    radius: '4px',
  }, 
  medium: { 
    height: '12px',
    padding: '0px',
    radius: '4px',
  }, 
  large: { 
    height: '24px',
    padding: '4px',
    radius: '8px',
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <ProgressWrapper 
      role="progressbar" 
      aria-valuenow={value}
      style={{
        '--padding': styles.padding,
        '--radius': styles.radius,
        '--height': styles.height,
      }} 
    >
      <VisuallyHidden>Progress bar</VisuallyHidden>
      <BarWrapper>
        <Bar 
          style={{
            '--progressPercent': value + '%',
          }}
        />
      </BarWrapper>
    </ProgressWrapper>
  );
};

const ProgressWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: 0 2px 4px ${COLORS.transparentGray35} inset;
  border-radius: var(--radius);
  padding: var(--padding);
`

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
`

const Bar = styled.div`
  width: var(--progressPercent); 
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`

export default ProgressBar;
