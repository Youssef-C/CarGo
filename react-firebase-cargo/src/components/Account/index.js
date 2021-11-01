import React from 'react';
import styled from 'styled-components';
import ProfilePic from '../Images/ProfilePic.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// import { PasswordForgetForm } from '../PasswordForget';
// import PasswordChangeForm from '../PasswordChange';
import SignOutButton from '../SignOut';
import { AuthUserContext, withAuthorization } from '../Session';

const AccountPage = () => (
    <AccountStyle.Wrapper>

            <AuthUserContext.Consumer>
                {authUser => (
                    <div>
                        
                        <AccountStyle.User>
                            <img src={ProfilePic} alt="Profile" />
                            <AccountStyle.Info>
                            
                                <h3>{authUser.email}</h3>

                                <RatingWrapper.Wrapper>
                                    <RatingWrapper.Item>
                                        <p>3.9 <FontAwesomeIcon icon={faStar} color="#CCA747"/> </p>
                                        <p> Renter </p>
                                    </RatingWrapper.Item>

                                    <RatingWrapper.Item>
                                        <p>4.8 <FontAwesomeIcon icon={faStar} color="#CCA747"/> </p>
                                        <p> Owner </p>
                                    </RatingWrapper.Item>

                                </RatingWrapper.Wrapper>

                            </AccountStyle.Info>
                            
                        </AccountStyle.User>

                        <AccountStyle.AboutMe>
                            <div className="aboutMe">
                                            <h3 className="aboutTitle">About</h3>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error neque incidunt nulla soluta non dolorum minima aliquam </p>
                            </div>
                        </AccountStyle.AboutMe>
                        
                    <SignOutButton />
                    </div>
                )}
            </AuthUserContext.Consumer>

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
        align-self: center;
        margin: 30px;
        padding: 1rem;

        img {
            width: 100px;
            height: 100px;
            object-fit: cover;
            object-position: 100% 0;
            border-radius: 12px;
            margin: 4px;
        }
    `,

    AboutMe: styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;

        .aboutTitle{
            padding: 4px;
            text-align: center;
        }

        .aboutMe{
            max-width: 70%;
        }
    `,

    Info: styled.div`
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 6px;

        h3{
            padding: 2px;
        }
    `,

    Title: styled.title`
        display: flex;
        align-self: center;
    `,
  };

const RatingWrapper = {
     Wrapper: styled.div`  
            display: flex;
            flex-direction: row;
            align-content: center;
            padding: 2px;
        `,

    Item: styled.div`
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            margin: 10px;
        `,
};
        

         