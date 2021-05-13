import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/img/Naturalzv6_100.png';

export const HeaderContainer = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content:stretch;
    margin-bottom: 25px;
    margin-top: 0px;
    padding-top: 0px; 
    background-color: #f4d4b7;
    `;

export const LogoContainer = styled(Link)`
    background-image: url(${logoImage});
    width: 100px;
    height:100px;
    margin-top: 0px;
    margin-top: 0px;
`;   

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;  
`;

export const BrandNameContainer = styled.h1`
font-family: 'Lora', serif;
color: #4F4846;
font-size: 1.5em;
text-shadow: 1px 1px 1px #222;
margin-top: 10;
justify-content:left;
margin-bottom: 0;
padding-left: 0px;
margin-left: 0px;
line-height: .75;
margin-top: 35px;
`;

export const TagLineContainer = styled.p`
    padding-top:0px;
    font-size: 0.9em;
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;
