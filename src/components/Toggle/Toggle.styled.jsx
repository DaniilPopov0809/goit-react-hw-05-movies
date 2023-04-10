import styled from '@emotion/styled/macro';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';

export const Slider = styled.span`
  width: 50px;
  height: 20px;
  position: absolute;
  top: 40px;
  right: 40px;
  z-index: 1;
  overflow: hidden;
  background-color: var(--accent-color);
  border-radius: 50px;
  cursor: pointer;
  transition: all 1.4s;
  &:before,
  &:after {
    content: '';
    position: absolute;
    bottom: 3px;
    left: 5px;
    width: 15px;
    height: 15px;
    background-color: #ffffff;
    border-radius: 30px;
  }
  &:before {
    transition: 0.4s;
  }
  &:after {
    transition: 0.5s;
  }
`;

export const Wave = styled.span`
  position: absolute;
  top: 40px;
  right: 40px;
  width: 50px;
  height: 20px;
  border-radius: 40px;
  transition: all 1.4s;
`;

export const Input = styled.input`
  display: none;

  &:checked ~ ${Wave} {
    display: block;
    background-color: var(--slyder-color);
  }

  &:checked + ${Slider} {
    background-color: transparent;
    &:before,
    &:after {
      transform: translateX(26px);
    }
  }
`;

export const Moon = styled(FaMoon)`
  position: absolute;
  top: 10px;
  right: 55px;
  color: var(--slyder-color);
`;
export const Sun = styled(BsSunFill)`
  position: absolute;
  top: 10px;
  right: 50px;
  color: var(--accent-color);
`;
