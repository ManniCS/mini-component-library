/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = { 
  small: { 
    height: 8,
    padding: 0,
    radius: 4,
  }, 
  medium: { 
    height: 12,
    padding: 0,
    radius: 4,
  }, 
  large: { 
    height: 16,
    padding: 4,
    radius: 8,
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <ProgressWrapper 
      style={{
        '--padding': styles.padding + 'px',
        '--radius': styles.radius + 'px',
      }} role="progressbar" aria-valuenow={value} aria-labelledby="progressbarlabel"
    >
      <VisuallyHidden id="progressbarlabel">Progress bar</VisuallyHidden>
      <BarWrapper>
        <Bar 
          style={{
            '--progressPercent': value + '%',
            '--height': styles.height + 'px',
          }}
        />
      </BarWrapper>
    </ProgressWrapper>
  );
};

const ProgressWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: 0 2px 4px ${COLORS.transparentGray35} inset;
  border-radius: 4px;
  padding: var(--padding);
`

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`

const Bar = styled.div`
  width: var(--progressPercent); 
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`

export default ProgressBar;
