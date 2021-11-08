import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

const CarAddPage = () => (
    <Wrapper>

        <ProgressWrapper>
            <FontAwesomeIcon icon={faDotCircle} color="#43456C"/>

            <FontAwesomeIcon icon={faDotCircle} color="#C4C4C4"/>

            <FontAwesomeIcon icon={faDotCircle} color="#C4C4C4"/>

            <FontAwesomeIcon icon={faDotCircle} color="#C4C4C4"/>

            <FontAwesomeIcon icon={faDotCircle} color="#C4C4C4"/>

            <FontAwesomeIcon icon={faDotCircle} color="#C4C4C4"/>
        </ProgressWrapper>

        <TitleWrapper>
            <p>Add Car</p>
        </TitleWrapper>

        <InputWrapper>

        
            <p>This will be where one adds a car</p>

            <NextButtonWrapper> 
                <Link>   
                    <NextButton> Next </NextButton>
                </Link> 
            </NextButtonWrapper>
        
        </InputWrapper>
    </Wrapper>
);

export default CarAddPage;

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
    margin: 32px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const NextButtonWrapper = styled.div`
    display: flex;
`;

const NextButton = styled.button`
    color: white;
`;
