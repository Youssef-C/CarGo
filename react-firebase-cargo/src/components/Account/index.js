import React from 'react';
import styled from 'styled-components';
import ProfilePic from '../Images/ProfilePic.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import ProfilePicAlt from '../Images/ProfilePicAlt.jpg';
import ProfilePic01 from '../Images/ProfilePic01.jpg';
import ProfilePic02 from '../Images/ProfilePic02.jpg';
import ProfilePic03 from '../Images/ProfilePic03.jpg';
import ProfilePic04 from '../Images/ProfilePic04.jpg';

import Focus from '../Images/Focus.png';

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

                    <OwnedCars.Title>
                            <h3>Your Car</h3>
                    </OwnedCars.Title>
                    <OwnedCars.Container>
                        <OwnedCars.Wrapper>
                            <OwnedCars.Item>
                                <OwnedCars.Image>
                                    <img src={Focus} alt="users car" />
                                </OwnedCars.Image>

                                <OwnedCars.Info>
                                    <h4>Ford Focus</h4>
                                    <OwnedCars.Button>Availibilty</OwnedCars.Button>
                                    <OwnedCars.Button>Pricing</OwnedCars.Button>
                                </OwnedCars.Info>

                            </OwnedCars.Item>

                        </OwnedCars.Wrapper>
                    </OwnedCars.Container>



                    <ReviewsWrapper>
                        <h3>Your Reviews</h3>

                            <Reviews>
                                <ReviewContainer>
                                    <ReviewUser>
                                        <ReviewUserImage>
                                            <img src={ProfilePic01} alt="User" />
                                        </ReviewUserImage>

                                        <ReviewUserName>
                                            <h6>Namn Namnsson</h6>
                                        </ReviewUserName>
                                    </ReviewUser>

                                    <ReviewDate>

                                    </ReviewDate>
                                    <Review>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo corporis quibusdam molestiae, quo aut iste exercitationem error </p>
                                    </Review>
                                </ReviewContainer>
                
                                <ReviewContainer>
                                    <ReviewUser>
                                        <ReviewUserImage>
                                            <img src={ProfilePic02} alt="User" />
                                        </ReviewUserImage>

                                        <ReviewUserName>
                                            <h6>Namn Namnsson</h6>
                                        </ReviewUserName>
                                    </ReviewUser>
                                    
                                    <ReviewDate>

                                    </ReviewDate>
                                    <Review>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo corporis quibusdam molestiae, quo aut iste exercitationem error </p>
                                    </Review>
                                </ReviewContainer>

                                <ReviewContainer>
                                    <ReviewUser>
                                        <ReviewUserImage>
                                            <img src={ProfilePic03} alt="User" />
                                        </ReviewUserImage>

                                        <ReviewUserName>
                                            <h6>Namn Namnsson</h6>
                                        </ReviewUserName>
                                    </ReviewUser>
                                    
                                    <ReviewDate>

                                    </ReviewDate>
                                    <Review>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo corporis quibusdam molestiae, quo aut iste exercitationem error </p>
                                    </Review>
                                </ReviewContainer>

                                <ReviewContainer>
                                    <ReviewUser>
                                        <ReviewUserImage>
                                            <img src={ProfilePic04} alt="User" />
                                        </ReviewUserImage>

                                        <ReviewUserName>
                                            <h6>Namn Namnsson</h6>
                                        </ReviewUserName>
                                    </ReviewUser>
                                    
                                    <ReviewDate>

                                    </ReviewDate>
                                    
                                    <Review>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo corporis quibusdam molestiae, quo aut iste exercitationem error </p>
                                    </Review>

                                </ReviewContainer>

                                <ReviewContainer>
                                        <ReviewUser>
                                            <ReviewUserImage>
                                                <img src={ProfilePic02} alt="User" />
                                            </ReviewUserImage>

                                            <ReviewUserName>
                                                <h6>Namn Namnsson</h6>
                                            </ReviewUserName>
                                        </ReviewUser>
                                        
                                        <ReviewDate>

                                        </ReviewDate>
                                        <Review>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo corporis quibusdam molestiae, quo aut iste exercitationem error </p>
                                        </Review>
                                    </ReviewContainer>
                            </Reviews>
                        </ReviewsWrapper>


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
    overflow: unset;
    `,
    
    User: styled.div`
        display: flex;
        flex-direction: row;
        align-self: center;
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

const ReviewsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 8px;
`;

const Reviews = styled.div`
    display: flex;
    flex-direction: column;
    
    height: 220px;
    overflow: auto;
`;

const Review = styled.div`
    margin: 12px;
`;

const ReviewContainer = styled.div`
    display: flex;
    margin: 8px;
    background-color: rgba( 0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 8px;
    box-shadow: 0px 2px 2px rgba(0,0,0,0.2);
`;

const ReviewUser = styled.div``;

const ReviewDate = styled.div``;

const ReviewUserImage = styled.div`
        display: flex;
        justify-content: flex-start;
        width: 30px;
        height: 30px;
        overflow: hidden;
        border-radius: 50%;
        margin: 12px;

        img {
            width: auto;
            height: 100%;
        }
`;

const ReviewUserName = styled.div`
    display: flex;
    text-align: center;
`;

const OwnedCars = {

    Container: styled.div`
        display: flex;
        justify-content: center;
    `,

    Wrapper: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba( 0, 0, 0, 0.1);
        width: 320px;
        height: 110px;
        padding: 12px;
        margin: 20px;
        border-radius: 24px;
    `,

    Item: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
    `,

    Image: styled.div`
        display: flex;
        justify-content: center;
        height: 110px;
        width: 158px;
        border-radius: 24px 0px 0px 24px;
        background-color: rgba( 1, 1, 1, 0.3);
        img{
            margin-bottom: 25px;
            height: 90%;
            width: auto;
        }
    `,

    Info: styled.div`
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 160px;
    `,

    Button: styled.button`
        color: white;
        width: 80px;
        height: 28px;
        font-size: 14px;
        padding: 4px;
    `,

    Title: styled.div`
        display: flex;
        justify-content: center;
        margin-top: 20px;
    `,
}
        
