import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

//Images Import, tried to do them better, but wouldn't work
import Etron from '../Images/Etron.png';
import AudiQ3 from '../Images/AudiQ3.png';
import Focus from '../Images/Focus.png';
import Ford from '../Images/Ford.png';
import LeaseCar from '../Images/LeaseCar.png';
import MQ6 from '../Images/MQ6.webp';
import RangeRover from '../Images/RangeRover.png';
import xc60 from '../Images/xc60.png';



const ListView =  () => (
    <Wrapper>
        <h1>List View</h1>
        <MapNav.Wrapper>
            <MapNav.Items>
                <MapNav.Button>
                    <ButtonLink to={ROUTES.LISTVIEW}>List</ButtonLink>
                </MapNav.Button>
                    
                <MapNav.Button>
                    <ButtonLink to={ROUTES.HOME}>Map</ButtonLink>
                </MapNav.Button>
            </MapNav.Items>
        </MapNav.Wrapper>

        <Cars.Wrapper>
            <Cars.Items>

                <Cars.Item>
                    <StyledLink to={ROUTES.CARVIEW}>
                    <Cars.Image><img src={Etron} alt="A users car"/></Cars.Image>
                    <Cars.Info>
                        <p className="modelName">Audi Etron</p>
                            <Cars.Rating>
                                <p>3.9</p>
                                <FontAwesomeIcon icon={faStar} color="#CCA747"/> 
                            </Cars.Rating>
                    </Cars.Info>
                    </StyledLink>
                </Cars.Item>

                <Cars.Item>
                    <StyledLink to={ROUTES.CARVIEW}>
                    <Cars.Image><img src={AudiQ3} alt="A users car"/></Cars.Image>
                    <Cars.Info>
                        <p className="modelName">Audi Q3</p>
                            <Cars.Rating>
                                <p>4.2</p>
                                <FontAwesomeIcon icon={faStar} color="#CCA747"/> 
                            </Cars.Rating>
                    </Cars.Info>
                    </StyledLink>
                </Cars.Item>

                <Cars.Item>
                    <StyledLink to={ROUTES.CARVIEW}>
                    <Cars.Image><img src={Focus} alt="A users car"/></Cars.Image>
                    <Cars.Info>
                        <p className="modelName">Ford Focus</p>
                            <Cars.Rating>
                                <p>4.8</p>
                                <FontAwesomeIcon icon={faStar} color="#CCA747"/> 
                            </Cars.Rating>
                    </Cars.Info>
                    </StyledLink>
                </Cars.Item>

                <Cars.Item>
                    <StyledLink to={ROUTES.CARVIEW}>
                    <Cars.Image><img src={Ford} alt="A users car"/></Cars.Image>
                    <Cars.Info>
                        <p className="modelName">Ford Mondeo</p>
                            <Cars.Rating>
                                <p>5.0</p>
                                <FontAwesomeIcon icon={faStar} color="#CCA747"/> 
                            </Cars.Rating>
                    </Cars.Info>
                    </StyledLink>
                </Cars.Item>

                <Cars.Item>
                    <StyledLink to={ROUTES.CARVIEW}>
                    <Cars.Image><img src={LeaseCar} alt="A users car"/></Cars.Image>
                    <Cars.Info>
                        <p className="modelName">Peugeot 508</p>
                            <Cars.Rating>
                                <p>3.3</p>
                                <FontAwesomeIcon icon={faStar} color="#CCA747"/> 
                            </Cars.Rating>
                    </Cars.Info>
                    </StyledLink>
                </Cars.Item>

                <Cars.Item>
                    <StyledLink to={ROUTES.CARVIEW}>
                    <Cars.Image><img src={MQ6} alt="A users car"/></Cars.Image>
                    <Cars.Info>
                        <p className="modelName">Mercedes Q6</p>
                            <Cars.Rating>
                                <p>4.2</p>
                                <FontAwesomeIcon icon={faStar} color="#CCA747"/> 
                            </Cars.Rating>
                    </Cars.Info>
                    </StyledLink>
                </Cars.Item>

                <Cars.Item>
                    <StyledLink to={ROUTES.CARVIEW}>
                    <Cars.Image><img src={RangeRover} alt="A users car"/></Cars.Image>
                    <Cars.Info>
                        <p className="modelName">Range Rover</p>
                            <Cars.Rating>
                                <p>4.6</p>
                                <FontAwesomeIcon icon={faStar} color="#CCA747"/> 
                            </Cars.Rating>
                    </Cars.Info>
                    </StyledLink>
                </Cars.Item>

                <Cars.Item>
                    <StyledLink to={ROUTES.CARVIEW}>
                    <Cars.Image><img src={xc60} alt="A users car"/></Cars.Image>
                    <Cars.Info>
                        <p className="modelName">Volvo XC60</p>
                            <Cars.Rating>
                                <p>4.5</p>
                                <FontAwesomeIcon icon={faStar} color="#CCA747"/> 
                            </Cars.Rating>
                    </Cars.Info>
                    </StyledLink>
                </Cars.Item>

            </Cars.Items>
        </Cars.Wrapper>

    </Wrapper>
)

export default ListView;


const MapNav = {
    Wrapper: styled.div`
        display: flex;
        justify-content: center;
    `,

    Items: styled.div`
        display: flex;
        height: 40px;
        z-index: 4;
    `,

    Button: styled.button`
        height: 30px;
        width: 132px;
    `,
}

const Wrapper = styled.div`

`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 2rem;
    color: black;
`;

const ButtonLink = styled(Link)`
    text-decoration: none;
    font-size: 2rem;
    color: white;
`;

const Cars = {
    Wrapper: styled.div`
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 30px;
        width: 100%;

        @media (max-width: 375px) {
            width: 360px;
        }
    `,

    Items: styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    `,

    Item: styled.div`
        display: flex;
        border-radius: 8px;
        box-shadow: -2px 4px 12px 1px rgba(0,0,0,0.2);
        background-color: #F1F1F1;
        height: 130px;
        width: 160px;
        margin: 8px;
    `,

    Image: styled.div`
        display: flex;
        justify-content: center;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0px 4px 4px rgba(0,0,0,0.2);
        height: 65px;
        width: 160px;
        img{
            object-fit: contain;
            max-width: 100%;
            max-height: 100%;
        }
    `,

    Info: styled.div`
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        margin: 12px;

        .modelName{
            padding-bottom: 4px;
            font-size: 16px;
            font-weight: lighter;
        }
    `,

    Rating: styled.div`
        display: flex;
        margin-top: 12px;
    `,
}
