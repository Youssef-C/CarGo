import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

import Ford from '../Images/Ford.png';

const ConfirmCarModel = () => (
    <Wrapper>

        <ProgressWrapper>
            <FontAwesomeIcon icon={faDotCircle} color="#43456C"/>

            <FontAwesomeIcon icon={faDotCircle} color="#43456C"/>

            <FontAwesomeIcon icon={faDotCircle} color="#C4C4C4"/>

            <FontAwesomeIcon icon={faDotCircle} color="#C4C4C4"/>

            <FontAwesomeIcon icon={faDotCircle} color="#C4C4C4"/>

            <FontAwesomeIcon icon={faDotCircle} color="#C4C4C4"/>
        </ProgressWrapper>

        <TitleWrapper>
            <p>Is this your car?</p>
        </TitleWrapper>

        <InputWrapper>

            <CarWrapper>
                <p>Ford Mondeo 2015</p>
                <img src={Ford} alt="ford mondeo 2015" />
            </CarWrapper>

            <ButtonWrapper>

                <NextButtonWrapper> 
                    <Link to={ROUTES.ADDCARIMAGES}>   
                        <NextButton> Yes </NextButton>
                    </Link> 
                </NextButtonWrapper>

                <NextButtonWrapper> 
                    <Link to={ROUTES.CARADD}>   
                        <NextButton> No </NextButton>
                    </Link> 
                </NextButtonWrapper>

            </ButtonWrapper>
        
        </InputWrapper>
    </Wrapper>
);

export default ConfirmCarModel;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const ProgressWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 60%;
    height: 30px;
    margin: 90px 0px 16px 0px;
    font-size: 22px;
`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    font-weight: lighter;
    font-size: 34px;
    padding: 32px;
    height: 128px;
    width: 100%;
    align-items: center;
    background-color: #f8f8f8;
    margin: 0px 0px 0px 0px;

    p{
        border-bottom: 2px solid black;
    }
`;

const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 60px;
`;

const CarWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 80%;
    height: auto;
    margin: 40px;

    img{
        width: 240px;
        height: auto;
    }

    p{
        font-size: 22px;
    }
`;

const NextButtonWrapper = styled.div`
    display: flex;
`;

const NextButton = styled.button`
    color: white;
    width: 120px;
`;