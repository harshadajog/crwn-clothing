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

    @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
    }

    `;

export const LogoContainer = styled(Link)`
    background-image: url(${logoImage});
    width: 100px;
    height:100px;
    margin-top: 0px;
    margin-top: 0px;

    @media screen and (max-width: 450px) {
        background-repeat: no-repeat;
        background-size: auto;
    }

`;   

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;  

    @media screen and (max-width: 800px) {
        padding: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 660px){
        font-size: 1.0rem;
      }

    @media screen and (max-width: 660px) {
        width: 80%;
    }

    @media screen and (max-width: 430px) {
        width: 80%;
        font-size: 0.8rem;
    }
`;

export const BrandNameContainer = styled.h1`
font-family: 'Lora', serif;
color: #4F4846;
font-size: 1.5rem;
text-shadow: 1px 1px 1px #222;
margin-top: 10;
justify-content:left;
margin-bottom: 0;
padding-left: 0px;
margin-left: 0px;
line-height: .75;
margin-top: 35px;

@media screen and (max-width: 880px){
        font-size: 1.2rem;
}


@media screen and (max-width: 660px){
    display: none;
  }

`;

export const TagLineContainer = styled.p`
    padding-top:0px;
    font-size: 0.9em;

    @media screen and (max-width: 800px){
        display: none;
      }
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;
