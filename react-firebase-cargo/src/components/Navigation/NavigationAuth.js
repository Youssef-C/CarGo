import React, {useEffect, useState } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';


import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';


    function NavigationAuth() {

        const [windowDimension, setWindowDimension] = useState(null);

        useEffect(() => {
          setWindowDimension(window.innerWidth);
        }, []);
      
        useEffect(() => {
          function handleResize() {
            setWindowDimension(window.innerWidth);
          }
      
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
        }, []);
      
        const isMobile = windowDimension <= 640;

    return(    
        <Styles.Wrapper>

            {isMobile ? (
                <MobileNavBar.Wrapper>
                <MobileNavBar.Items>

                    <MobileNavBar.Item>
                        <StyledLink to={ROUTES.LANDING}>Landing</StyledLink>
                    </MobileNavBar.Item>

                    <MobileNavBar.Item>
                        <StyledLink to={ROUTES.HOME}>Home</StyledLink>
                    </MobileNavBar.Item>

                    <MobileNavBar.Item>
                        <StyledLink to={ROUTES.MESSENGER}>Messages</StyledLink>
                    </MobileNavBar.Item>

                    <MobileNavBar.Item>
                        <StyledLink to={ROUTES.ACCOUNT}>Account</StyledLink>
                    </MobileNavBar.Item>

                    <MobileNavBar.Item>
                        <SignOutButton />
                    </MobileNavBar.Item>
                
                </MobileNavBar.Items>
            </MobileNavBar.Wrapper>
            ) : (
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
        )}

        </Styles.Wrapper>
    );
}

const Styles = {
    Wrapper: styled.main`
      
    `
  };
  
  const NavBar = {
    Wrapper: styled.nav`
      flex: 1;
  
      align-self: flex-start;
  
      padding: 1rem 3rem;
  
      display: flex;
      justify-content: space-between;
      align-items: center;
  
      background-color: white;
    `,
    Logo: styled.h1`
      border: 1px solid gray;
      padding: 0.5rem 1rem;
    `,
    Items: styled.ul`
      display: flex;
      list-style: none;
    `,
    Item: styled.li`
      padding: 0 1rem;
      cursor: pointer;
    `
  };
  
  const MobileNavBar = {
    Wrapper: styled(NavBar.Wrapper)`
      position: fixed;
      width: 100vw;
      bottom: 0;
  
      justify-content: center;
    `,
    Items: styled(NavBar.Items)`
      flex: 1;
      padding: 0 2rem;
  
      justify-content: space-around;
    `,
    Item: styled(NavBar.Item)`
      display: flex;
      flex-direction: column;
      align-items: center;
  
      font-size: 1.2rem;
    `,
    Icon: styled.span``
  };

  const StyledLink = styled(Link)`
  text-decoration: none;
`

export default NavigationAuth;