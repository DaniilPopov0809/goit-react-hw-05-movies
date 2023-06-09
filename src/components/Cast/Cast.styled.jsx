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
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  text-align: center;

  box-shadow: var(--shadow);

  border: 1px solid var(--link-color);
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    flex-basis: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 40px) / 3);
  }
  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 80px) / 5);
  }
`;

export const Image = styled.img`
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
padding: 10px;
`;


export const Character = styled.p``;

export const Name = styled.p`
  font-weight: 500;
  color: var(--link-color);
  margin-bottom: 10px;
`;
