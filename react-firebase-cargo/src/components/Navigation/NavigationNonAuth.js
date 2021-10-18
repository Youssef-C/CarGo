import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavigationNonAuth = () => (
    <StyledWrapper>
        
    </StyledWrapper>
);

export default NavigationNonAuth;

const Wrapper = styled.section`
    display: flex;
    justify-content: flex-start;
    padding: 12px;
    max-height: 0px;
    @media (max-width: 640px) {
        
    }
`;

const Styles = {
    Wrapper: styled.main`
    `,
  };

const NavBar = {
    Wrapper: styled.nav`
    flex: 1;

    align-self: flex-start;

    padding: 1rem 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`,

    Items: styled.ul`
    display: flex;
    justify-content: center;
    list-style-type: none;

    @media (max-width: 640px) {
        justify-content: center;
        flex-direction: column;
        max-width: 75%;
    }
`,

    Item: styled.li`
    font-size: 18px;
    padding: 6px;
    cursor: pointer;
    margin: 2px;
    text-align: center;
`,
};

const StyledLink = styled(Link)`
    text-decoration: none;
`

const StyledWrapper = styled.div`
    display: none;
    height: 0px;
`