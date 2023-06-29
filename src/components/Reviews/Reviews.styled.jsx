import styled from '@emotion/styled';

export const List = styled.ul`
  /* border-bottom: 1px solid var(--link-color); */
  padding: 10px 0;
`;

export const Item = styled.li`
  display: flex;
  padding: 10px;

  box-shadow: var(--shadow);

  border: 1px solid var(--link-color);
  border-radius: 10px;
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Description = styled.p`
  color: var(--secondary-text-color);
`;

export const Title = styled.h3`
  color: var(--link-color);
  margin-bottom: 5px;
`;

export const Image = styled.img`
  max-width: 80px;
  max-height: 80px;
  border: none;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Date = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
`;

export const Message = styled.p`
  text-align: center;
  border-bottom: 1px solid var(--link-color);
  padding: 10px 0;
  font-weight: 500;
`;
