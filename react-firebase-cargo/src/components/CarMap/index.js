import React from "react";
import styled from "styled-components";
import MapPic from '../Images/mapPicker.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';


const CarMap = () => (
    <Wrapper>
        <MapNav.Wrapper>
            <MapNav.Items>
                <MapNav.Button>
                    <StyledLink to={ROUTES.LISTVIEW}>List</StyledLink>
                </MapNav.Button>
                    
                <MapNav.Button>
                    <StyledLink to={ROUTES.HOME}>Map</StyledLink>
                </MapNav.Button>
            </MapNav.Items>
        </MapNav.Wrapper>

        <Pins.Wrapper>
            <Pins.Items>
                <Pins.ItemA>
                    <PinLink to={ROUTES.CARVIEW} >
                        <FontAwesomeIcon icon={faMapMarker} size="3x"/>
                    </PinLink>
                </Pins.ItemA>

                <Pins.ItemD>
                    <PinLink to={ROUTES.CARVIEW} >
                        <FontAwesomeIcon icon={faMapMarker} size="3x"/>
                    </PinLink>
                </Pins.ItemD>

                <Pins.ItemC>
                    <PinLink to={ROUTES.CARVIEW} >
                        <FontAwesomeIcon icon={faMapMarker} size="3x" />
                    </PinLink>
                </Pins.ItemC>

                <Pins.ItemB>
                    <PinLink to={ROUTES.CARVIEW} >
                        <FontAwesomeIcon icon={faMapMarker} size="3x"/>
                    </PinLink>
                </Pins.ItemB>

                <Pins.ItemA>
                    <PinLink to={ROUTES.CARVIEW} >
                        <FontAwesomeIcon icon={faMapMarker} size="3x"/>
                    </PinLink>
                </Pins.ItemA>
            </Pins.Items>
        </Pins.Wrapper>

        <Map.Wrapper>
            <Map.Items>
                <Map.Item>
                    <Map.Image> <img src={MapPic} alt="A map"/></Map.Image>
                </Map.Item>
            </Map.Items>
        </Map.Wrapper>

        

    </Wrapper>
);

export default CarMap;

const Pins = {
    Wrapper: styled.div`
        display: flex;
        height: 580px;
        width: 320px;
        z-index: 2;
        position: absolute;
    `,

    Items: styled.div`
        height: 580px;
        width: 320px;
        display: flex;
        justify-content: space-between;
        align-self: center;
    `,

    ItemB: styled.div`
        margin-top: 120px;
        color: #43456C;
    `,

    ItemA: styled.div`
        margin-top: 170px;
        padding-left: 20px;
        padding-right: 20px;
        margin-right: 10px;
        color: #43456C;
    `,

    ItemC: styled.div`
        margin: 30px;
        color: #43456C;
    `,

    ItemD: styled.div`
        margin-top: 380px;
        color: #43456C;
    `,
}

const Map = {
    Wrapper: styled.div`
        padding-top: 8px;
        height: 580px;
        width: 360px;
        z-index:0;
    `,

    Items: styled.div`
        display: flex;
        justify-content: flex-start;
    `,

    Item: styled.div`
    
    `,

    Image: styled.div`
        img {
            height: 100%;
            width: 100%;
            border-radius: 12px;
            }
    `,
}

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

    StyledLink: styled.link`
        text-decoration: none;
    `,
}

const Wrapper = styled.div`

`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 2rem;
    color: white;
`;

const PinLink = styled(Link)`
    text-decoration: none;
    color: #43456C;
        :visited {
            color: #43456C;
        }
`;