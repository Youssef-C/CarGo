import React, {useEffect, useState } from "react";
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faComments} from '@fortawesome/free-solid-svg-icons'


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
          <CSSReset />
            {isMobile ? (
            <MobileNavBar.Wrapper>

                <MobileNavBar.Items>

                    <MobileNavBar.Item>
                        <Link to={ROUTES.HOME}><FontAwesomeIcon icon={faHome} color="white"/></Link>
                    </MobileNavBar.Item>

                    <MobileNavBar.Item>
                        <StyledLink to={ROUTES.MESSENGER}><FontAwesomeIcon icon={faComments} color="white"/></StyledLink>
                    </MobileNavBar.Item>

                    <MobileNavBar.Item>
                        <StyledLink to={ROUTES.ACCOUNT}><FontAwesomeIcon icon={faUser} color="white"/></StyledLink>
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
      display: flex;
      justify-content: center;
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


  //*** MOBILE navbar styling ***
  const MobileNavBar = {
    Wrapper: styled.nav`
      display: flex;
      justify-content: center;
      position: fixed;
      width: 100%;
      bottom: 0;
      padding: 1rem 3rem;
      background-color: #43456C;
    `,
    Items: styled.ul`
      display: flex;
      list-style: none;
      flex: 1;
      padding: 0 2rem;
      justify-content: space-between;
    `,
    Item: styled.li`
      font-size: 24px;
      padding: 0 1rem;
      cursor: pointer;
    `,
  };

  const StyledLink = styled(Link)`
  text-decoration: none;
`

const CSSReset = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; /*1rem = 10px*/
    box-sizing: border-box;    
  }  

  body {
    font-size: 1.4rem;
    font-family: sans-serif;
  }
`;

export default NavigationAuth;