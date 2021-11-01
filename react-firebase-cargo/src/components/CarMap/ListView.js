import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';


const ListView =  () => (
    <Wrapper>
        <h1>List View</h1>
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
    color: white;
`;