import styled from '@emotion/styled';

export const Section = styled.section``;

export const Title = styled.h1`
  text-align: center;
  padding: 10px 0;
  color: var(--link-color);
`;

export const Button = styled.button`
  
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 15px;
  border: 1px solid var(--link-color);
  background-color: transparent;
  font-size: 20px;
  color: var(--link-color);
  text-shadow: var(--shadow);

  transition: color 400ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 400ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: var(--accent-color);
    
  }
  &:focus {
    border-color: var(--accent-color);
    color: var(--accent-color);
  }

  /* &.active {
    color: var(--accent-color);
  } */
`;

export const TitleWrap = styled.div`
display: flex;
  align-items: center;
  column-gap: 20px;
  padding-top: 10px;
`;