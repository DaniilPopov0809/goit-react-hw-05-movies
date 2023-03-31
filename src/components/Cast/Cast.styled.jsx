import styled from '@emotion/styled';

export const List = styled.ul`
padding: 10px 0;
display: flex;
flex-wrap: wrap;
gap: 20px;
color: var(--secondary-text-color);

border-bottom: 1px solid var(--link-color);
`;

export const Item = styled.li`
 @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 40px) / 3);
  }
  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 80px) / 5);
  }
`;

export const Image = styled.img`
margin-bottom: 5px`;