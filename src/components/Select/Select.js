import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const style = {
    '--displayedWidth': displayedValue.length + 'rem'
  }
  return (
    <Wrapper>
      <Selector style={style} value={value} onChange={onChange} >
        {children}
      </Selector>
      <Chevron>
        <Icon id="chevron-down" />
      </Chevron>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* Create binding box for the chevron */
  position: relative;
  max-width: fit-content;

  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`

const Chevron = styled.div`
  position: absolute;
  right: 10px;
  top: 0px;
  bottom: 0px;
  margin: auto;
  width: 24px;
  height: 24px;
  pointer-events: none;
`

const Selector = styled.select`
  appearance: none;

  height: 43px;
  /* Account for 24x24 chevron */
  max-width: calc(var(--displayedWidth) + 24px);
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;
  border: none;

  font-family: 'Roboto';
  font-weight: 400;

  /* Needed because of appearance reset */
  color: inherit;
  background-color: ${COLORS.transparentGray15};
`

export default Select;
