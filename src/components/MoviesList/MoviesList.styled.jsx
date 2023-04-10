import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 15px 0;
  border-bottom: 1px solid var(--link-color);
`;

export const Item = styled.li`
  box-sizing: border-box;
  position: relative;
  scale: 1;
  transition: scale 400ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    scale: 1.05;
  }

  box-shadow: var(--shadow);

  border: 1px solid var(--link-color);
  border-radius: 10px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 20px) / 2);
  }
  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 60px) / 4);
  }
`;
export const Grade = styled.p`
  position: absolute;
  top: 0;
  font-weight: 500;
  font-size: 16px;
  padding: 5px 10px;
  background-color: var(--accent-color);
  
`;

export const ItemLink = styled(Link)`
  
  color: var(--secondary-text-color);
  transition: color 400ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    color: var(--accent-color);
  }
`;
export const Wrapper = styled.div`
  text-align: center;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 20px;
  padding: 10px 5px;
`;

export const Year = styled.p`
  font-weight: 500;
  font-size: 16px;
  padding: 0 0 10px 0;
`;



export const Image = styled.img``;
