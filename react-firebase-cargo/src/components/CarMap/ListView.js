import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

//Images Import, tried to do them better, but wouldn't work
import Etron from '../Images/Etron.png';



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
                                <p>3.9 </p>
                                <FontAwesomeIcon icon={faStar} color="#CCA747"/> 
                            </Cars.Rating>
                    </Cars.Info>
                    </StyledLink>
                </Cars.Item>

                <Cars.Item>
                    <StyledLink to={ROUTES.CARVIEW}>
                    <Cars.Image><img src={Etron} alt="A users car"/></Cars.Image>
                    <Cars.Info>
                        <p className="modelName">Audi Etron</p>
                            <Cars.Rating>
                                <p>3.9 </p>
                                <FontAwesomeIcon icon={faStar} color="#CCA747"/> 
                            </Cars.Rating>
                    </Cars.Info>
                    </StyledLink>
                </Cars.Item>

                <Cars.Item>
                    <StyledLink to={ROUTES.CARVIEW}>
                    <Cars.Image><img src={Etron} alt="A users car"/></Cars.Image>
                    <Cars.Info>
                        <p className="modelName">Audi Etron</p>
                            <Cars.Rating>
                                <p>3.9 </p>
                                <FontAwesomeIcon icon={faStar} color="#CCA747"/> 
                            </Cars.Rating>
                    </Cars.Info>
                    </StyledLink>
                </Cars.Item>

                <Cars.Item>
                    <StyledLink to={ROUTES.CARVIEW}>
                    <Cars.Image><img src={Etron} alt="A users car"/></Cars.Image>
                    <Cars.Info>
                        <p className="modelName">Audi Etron</p>
                            <Cars.Rating>
                                <p>3.9 </p>
                                <FontAwesomeIcon icon={faStar} color="#CCA747"/> 
                            </Cars.Rating>
                    </Cars.Info>
                    </StyledLink>
                </Cars.Item>

                <Cars.Item>
                    <StyledLink to={ROUTES.CARVIEW}>
                    <Cars.Image><img src={Etron} alt="A users car"/></Cars.Image>
                    <Cars.Info>
                        <p className="modelName">Audi Etron</p>
                            <Cars.Rating>
                                <p>3.9 </p>
                                <FontAwesomeIcon icon={faStar} color="#CCA747"/> 
                            </Cars.Rating>
                    </Cars.Info>
                    </StyledLink>
                </Cars.Item>

                <Cars.Item>
                    <StyledLink to={ROUTES.CARVIEW}>
                    <Cars.Image><img src={Etron} alt="A users car"/></Cars.Image>
                    <Cars.Info>
                        <p className="modelName">Audi Etron</p>
                            <Cars.Rating>
                                <p>3.9 </p>
                                <FontAwesomeIcon icon={faStar} color="#CCA747"/> 
                            </Cars.Rating>
                    </Cars.Info>
                    </StyledLink>
                </Cars.Item>

                <Cars.Item>
                    <StyledLink to={ROUTES.CARVIEW}>
                    <Cars.Image><img src={Etron} alt="A users car"/></Cars.Image>
                    <Cars.Info>
                        <p className="modelName">Audi Etron</p>
                            <Cars.Rating>
                                <p>3.9 </p>
                                <FontAwesomeIcon icon={faStar} color="#CCA747"/> 
                            </Cars.Rating>
                    </Cars.Info>
                    </StyledLink>
                </Cars.Item>

                <Cars.Item>
                    <StyledLink to={ROUTES.CARVIEW}>
                    <Cars.Image><img src={Etron} alt="A users car"/></Cars.Image>
                    <Cars.Info>
                        <p className="modelName">Audi Etron</p>
                            <Cars.Rating>
                                <p>3.9 </p>
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
        margin-bottom: 60px;
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
        background-color: white;
        border-radius: 8px;
        box-shadow: 0px 4px 4px rgba(0,0,0,0.2);
        img{
            padding: 4px;
            width: 160px;
        }
    `,

    Info: styled.div`
        display: flex;
        justify-content: center;
        flex-direction: row;
        margin: 8px;

        .modelName{
            padding-bottom: 4px;
            font-size: 18px;
            font-weight: lighter;
        }
    `,

    Rating: styled.div`
        display: flex;
        margin-top: 12px;
    `,
}
