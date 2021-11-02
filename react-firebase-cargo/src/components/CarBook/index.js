import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import VOLVO from '../Images/VOLVO.jpg';

const CarBook = () => (

    <Wrapper>
        <BackgroundContainer>
            <Background />
        </BackgroundContainer>
        <ButtonContainer>
            <Container>
                {/*ADD A ROUTE AND LINK TO BUTTON*/}
                <StyledButton>
                    <LockIcon>
                        <FontAwesomeIcon icon={faLock} color="black"/>
                    </LockIcon>
                        LOCK CAR
                </StyledButton>

                
            </Container>
        </ButtonContainer>

        <Information>
            <InformationContainer>
                <h2>Drive safe!</h2>
                <p>Swipe to “lock car”  whenever you’re at the pick-up spot and want to return the vehicle. </p>
            </InformationContainer>
        </Information>
    </Wrapper>

);

export default CarBook;


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    z-index: 4;
`;

const BackgroundContainer = styled.div`
        display: inline-block;
        width: 375px;
        height: 406px;
        position: absolute;
        overflow: hidden;
        padding: 0px;
        z-index: 0;
        box-shadow: 0px 8px 8px rgba(0,0,0,0.2);
`;

const Background = styled.div`
    background-image: url(${VOLVO});
    filter: blur(4px);
    width: auto;
    height: 100%;
    margin-left: -140px;
`;


const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 812px;
    z-index: 3;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    z-index: 4;
    position: relative;
    width: 375px;
`;

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    background-color: #CE6C4C;
    width: 100%;
    height: 69px;
    border-radius: 40px;
`;

const LockIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: 69px;
    width: 69px;
    border-radius: 50%;
    margin-right: 45px;
    box-shadow: 2px 4px 12px 1px rgba(0,0,0,0.2);
`;


const Information = styled.div`
    background-color: white;
    width: 331px;
    height: 224px;
    border-radius: 24px;
    box-shadow: 2px 4px 12px 1px rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
    align-self: end;
    z-index: 6;
    margin-bottom: 100px;
    position: absolute;
`;

const InformationContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    h2{
        font-size: 32px;
        padding: 12px;
    }

    p{
        font-size: 24px;
        padding: 20px;
        text-align: center;
    }

`; 