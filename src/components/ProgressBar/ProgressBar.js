/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  let Wrapper;
  if (size === "small") {
    Wrapper = Small;
  } else if (size === "medium") {
    Wrapper = Medium;
  } else if (size === "large") {
    Wrapper = Large;
  } else {
    throw new Error("size must be one of small, medium, or large");
  }
  return (
    <Wrapper value={value} max="100" />
  );
};

const Base = styled.progress`
  -webkit-appearance: none;
  appearance: none;

  &[value]::-webkit-progress-bar {
    overflow: hidden;
    background-color: ${COLORS.transparentGray15};
    border-radius: 8px;
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  }

  &[value]::-webkit-progress-value {
    border-radius: 4px 0px 0px 4px;
    background-color: ${COLORS.primary};
  }
  &[value="100"]::-webkit-progress-value {
    border-radius: 4px;
  }
`

const Small = styled(Base)`
  height: 8px;
`

const Medium = styled(Small)`
  height: 12px;

`

const Large = styled(Small)`
  height: 24px;
  &[value]::-webkit-progress-bar {
    padding: 4px;
    border-radius: 8px;
  }
`


export default ProgressBar;
