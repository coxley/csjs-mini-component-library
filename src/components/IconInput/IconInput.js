import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = {
    '--width': width + 'px',
  }

  let Input
  let iconSz = 20
  let FloatingIcon = LargeIcon
  if (size == "small") {
    Input = SmallInput
    iconSz = 16
    FloatingIcon = SmallIcon
  } else if (size == "large") {
    Input = LargeInput
  } else {
    throw new Error("unsupported size")
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <FloatingIcon><Icon id={icon} size={iconSz} strokeWidth={2} /></FloatingIcon>
      <Input
        style={styles}
        type="text"
        placeholder={placeholder}
      />
    </Wrapper>
  )
};

const LargeInput = styled.input`
  width: var(--width);
  color: ${COLORS.gray700};

  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 700;

  border: none;
  border-bottom: 2px black solid;

  padding-left: 32px;
  padding-bottom: 4px;

  outline-offset: 5px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`

const LargeIcon = styled.div`
  pointer-events: none;
  position: absolute;
  bottom: 6px;
  left: 2px;
  color: ${COLORS.gray700};
`

const SmallIcon = styled(LargeIcon)`
  bottom: 4px;
  left: 2px;
`

const SmallInput = styled(LargeInput)`
  font-size: 14px;

  padding-left: 24px;
  padding-bottom: 2px;
`

const Wrapper = styled.div`
  position: relative;

  &:hover {
    ${LargeInput} {
      color: black;
    }

    ${SmallInput} {
      color: black;
    }

    ${LargeIcon} {
      color: black;
    }
  }
`
export default IconInput;
