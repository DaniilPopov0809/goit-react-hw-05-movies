import styled from '@emotion/styled';

export const Button = styled.button`
display: flex;
align-items: center;
padding: 0;
border: none;
background-color: transparent;
color: var(--link-color);


transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    color: var(--accent-color);
  }

  &:active {
  color: var(--accent-color);
}
`;