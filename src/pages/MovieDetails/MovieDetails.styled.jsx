import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const CardSection = styled.section`
  padding: 10px 0;

  border-bottom: 1px solid var(--link-color);
`;

export const BackLink = styled(Link)`
  display: inline-block;
  border: 1px solid var(--link-color);
  border-radius: 10px;
  padding: 4px 10px;
  margin-bottom: 5px;
  color: var(--link-color);
  transition: border-color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    border-color: var(--accent-color);
  }

  &:active {
    background-color: var(--accent-color);
    border-color: var(--accent-color);
  }
`;

export const InfoWrapper = styled.div``;

export const DeteilsWrapper = styled.div`
position: relative;
  @media screen and (min-width: 768px) {
    display: flex;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

export const Image = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 350px;
    margin-right: 20px;
  }
`;
export const Description = styled.div`
  color: var(--secondary-text-color);
  margin-bottom: 15px;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
`;

export const SubTitle = styled.h3`
  margin-bottom: 10px;
`;

export const AdditionalSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid var(--link-color);
`;

export const AdditionalLink = styled(NavLink)`
  display: inline-block;
  padding: 4px 10px;
  font-size: 18px;
  font-weight: 500;
  color: var(--link-color);
  border-radius: 10px;
  border: 1px solid var(--link-color);

  transition: border-color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    border-color: var(--accent-color);
  }

  &.active {
    color: var(--accent-color);
  }
`;

export const AdditionalList = styled.ul`
  display: flex;
  gap: 5px;
`;

export const Year = styled.p`
  font-weight: 500;
  font-size: 16px;
  padding: 0 0 10px 0;
`;

export const Grade = styled.p`
  position: absolute;
  top: 0;
  font-weight: 500;
  font-size: 16px;
  padding: 5px 10px;
  background-color: var(--accent-color);
`;