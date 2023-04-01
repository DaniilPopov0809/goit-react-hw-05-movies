import styled from '@emotion/styled';
import { BsSearch } from 'react-icons/bs';

export const Form = styled.form`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--link-color);
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  padding-left: 12px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  outline: var(--secondary-text-color) solid 2px;
`;

export const Button = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  outline: none;
  color: var(--link-color);
`;

export const FormWrap = styled.div`
  position: relative;
`;

export const Lupa = styled(BsSearch)`
  &:hover,
  &:focus {
    color: var(--accent-color);
  }
`;
