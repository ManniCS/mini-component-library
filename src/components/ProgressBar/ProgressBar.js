/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return <Wrapper value={value} max={100}></Wrapper>;
};

const Wrapper = styled.progress`
  /* Reset default appearance */
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;

  &::-webkit-progress-inner-element {
    width: 370px;
    height: 30px;;
    border-radius: 4px;
    background-color: ${COLORS.transparentGray15};
    box-shadow: 0 2px 4px ${COLORS.transparentGray35} inset;
    overflow: hidden;
    padding: 10px;
  } 
  &::-webkit-progress-bar { 
    overflow: hidden;
    border-radius: 4px;
    background: none;
  }
  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: 4px 0 0 4px;
  } 
`

export default ProgressBar;
