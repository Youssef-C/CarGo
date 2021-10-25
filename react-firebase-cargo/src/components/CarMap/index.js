import React from "react";
import styled from "styled-components";
import MapPic from '../Images/mapPicker.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker} from '@fortawesome/free-solid-svg-icons';


const CarMap = () => (
    <Wrapper>
        <Pins.Wrapper>
            <Pins.Items>
                <Pins.Item>
                    <FontAwesomeIcon icon={faMapMarker} size="3x"/>
                </Pins.Item>

                <Pins.Item>
                    <FontAwesomeIcon icon={faMapMarker} size="3x"/>
                </Pins.Item>

                <Pins.Item>
                    <FontAwesomeIcon icon={faMapMarker} size="3x"/>
                </Pins.Item>

                <Pins.Item>
                    <FontAwesomeIcon icon={faMapMarker} size="3x"/>
                </Pins.Item>

                <Pins.Item>
                    <FontAwesomeIcon icon={faMapMarker} size="3x"/>
                </Pins.Item>
            </Pins.Items>
        </Pins.Wrapper>

        <Map.Wrapper>
            <Map.Items>
                <Map.Item>

                </Map.Item>
            </Map.Items>
        </Map.Wrapper>
    </Wrapper>
);

export default CarMap;

const Pins = {
    Wrapper: styled.div`
        display: flex;
        height: 600px;
        width: 320px;
        z-index: 2;
        position: absolute;
    `,

    Items: styled.div`
        display: flex;
        justify-content: center;
    `,

    Item: styled.div`
    
    `,
}

const Map = {
    Wrapper: styled.div`
        background-color: red;
        height: 600px;
        width: 320px;
        z-index:0;
    `,

    Items: styled.div`
        display: flex;
        justify-content: flex-start;
    `,

    Item: styled.div`
    
    `,
}

const Wrapper = styled.div`

`;