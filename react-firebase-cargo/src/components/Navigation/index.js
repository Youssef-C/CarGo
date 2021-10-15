import React from 'react'; 
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
    <Wrapper>
        <div>
            <AuthUserContext.Consumer>
                {authUser =>
                    authUser ? <NavigationAuth /> : <NavigationNonAuth /> 
                }
            </AuthUserContext.Consumer>
        </div>
    </Wrapper>
);



const NavigationAuth = () => (

        <Styles.Wrapper>
            <NavBar.Wrapper>
                <NavBar.Items>

                    <NavBar.Item>
                        <StyledLink to={ROUTES.LANDING}>Landing</StyledLink>
                    </NavBar.Item>

                    <NavBar.Item>
                        <StyledLink to={ROUTES.HOME}>Home</StyledLink>
                    </NavBar.Item>

                    <NavBar.Item>
                        <StyledLink to={ROUTES.MESSENGER}>Messages</StyledLink>
                    </NavBar.Item>

                    <NavBar.Item>
                        <StyledLink to={ROUTES.ACCOUNT}>Account</StyledLink>
                    </NavBar.Item>

                    <NavBar.Item>
                        <SignOutButton />
                    </NavBar.Item>
                
                </NavBar.Items>
            </NavBar.Wrapper>
        </Styles.Wrapper>
);


const NavigationNonAuth = () => (
    <StyledWrapper>
        
    </StyledWrapper>
);

export default Navigation; 


const Wrapper = styled.section`
    display: flex;
    justify-content: flex-start;
    padding: 12px;
    @media (max-width: 640px) {
        background-color: blue;
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
    
