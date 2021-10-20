import React from 'react';
import styled from 'styled-components';
import ProfilePic from '../Images/ProfilePic.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

// import { PasswordForgetForm } from '../PasswordForget';
// import PasswordChangeForm from '../PasswordChange';
import SignOutButton from '../SignOut';
import { AuthUserContext, withAuthorization } from '../Session';

const AccountPage = () => (
    <AccountStyle.Wrapper>

        <AccountStyle.Items>
            <AuthUserContext.Consumer>
                {authUser => (
                    <div>
                        
                        <AccountStyle.User>
                            <img src={ProfilePic} alt="Profile" />
                            
                            

                            <AccountStyle.Info>
                                <h3>Logged in as: {authUser.email}</h3>

                                <div className="rating">
                                    <div>
                                        <p>3.9 <FontAwesomeIcon icon={faStar} color="#CCA747"/> </p>
                                        <p> Renter </p>
                                    </div>

                                    <div>
                                        <p>4.8 <FontAwesomeIcon icon={faStar} color="#CCA747"/> </p>
                                        <p> Owner </p>
                                    </div>

                                </div>
                            </AccountStyle.Info>
                            
                        </AccountStyle.User>
                        
                        
                    <SignOutButton />
                    </div>
                )}
            </AuthUserContext.Consumer>
        </AccountStyle.Items>

    </AccountStyle.Wrapper>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);


const AccountStyle = {
    Wrapper: styled.div`
    display: flex;
    justify-content: center;
    `,
    
    User: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        img {
            width: 120px;
            height: 120px;
            object-fit: cover;
            object-position: 100% 0;
            border-radius: 12px;
            margin: 4px;
        }
    `,

    Items: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `,

    Info: styled.div`
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        margin: 6px;

        .rating {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-content: flex-start;
            padding: 12px;
        }
    `,

    Title: styled.title`
        display: flex;
        align-self: center;
    `,
  };