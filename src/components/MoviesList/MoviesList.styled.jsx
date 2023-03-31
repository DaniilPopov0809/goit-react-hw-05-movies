import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 20px;
  padding: 10px 0;
  border-bottom: 1px solid var(--link-color);
`;

export const Item = styled.li`
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 20px) / 2);
  }
  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 60px) / 4);
  }
`;

export const ItemLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: var(--secondary-text-color);
  transition: color 400ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    color: var(--accent-color);
  }
`;

export const Description = styled.p`
  padding: 12px 0;
`;

export const Image = styled.img`
  scale: 1;
  transition: scale 400ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    scale: 1.05;
  }
`;
