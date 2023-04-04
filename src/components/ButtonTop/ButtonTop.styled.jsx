import styled from '@emotion/styled';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';

export const Button = styled.button`
position: fixed;
bottom: 100px;
right: 40px;
border: none;
/* width: 40px;
height: 40px; */
background-color: transparent;
padding: 0
`;

export const ToTop = styled(BsFillArrowUpSquareFill)`
color: var(--accent-color);
opacity: 0.6;
`;