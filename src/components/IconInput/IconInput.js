import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: { 
    fontSize: 14,
    iconSize: 16,
    strokeWidth: 1,
    height: 24,
  },
  large: { 
    fontSize: 18,
    iconSize: 24,
    strokeWidth: 2,
    height: 36,
  }
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = STYLES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input 
        placeholder={placeholder}
        style={{
          '--width': width + 'px',
          '--height': styles.height / 16 + 'rem', 
          '--strokeWidth': styles.strokeWidth + 'px',
          '--fontSize': styles.fontSize / 16 + 'rem',
          '--leftPadding': styles.height + 'px',
        }}
      ></Input>
      <IconWrapper
        style={{
          '--size': styles.iconSize + 'px'
        }} 
      >
        <Icon 
          id={icon}
          size={styles.iconSize}
          strokeWidth={styles.strokeWidth}
        />
      </IconWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.label`
  position: relative;

  color: ${COLORS.gray700};

  &:hover { 
    color: ${COLORS.black};
  }
`

const Input = styled.input`
  width: var(--width);
  height: var(--height);

  padding-left: var(--leftPadding);
  font: var(--fontSize) 'Roboto', sans-serif;

  border: none;
  border-bottom: var(--strokeWidth) solid ${COLORS.black};

  &:focus { 
    outline-offset: 4px;
  }

  font-weight: 700;
  color: inherit;

  ::placeholder { 
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`

export default IconInput;
