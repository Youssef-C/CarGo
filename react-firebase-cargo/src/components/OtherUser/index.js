import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import ProfilePicAlt from '../Images/ProfilePicAlt.jpg';
import ProfilePic01 from '../Images/ProfilePic01.jpg';
import ProfilePic02 from '../Images/ProfilePic02.jpg';
import ProfilePic03 from '../Images/ProfilePic03.jpg';
import ProfilePic04 from '../Images/ProfilePic04.jpg';

const OtherUser = () => (

    <Wrapper>

        <User>
            <UserInfo>
                <UserImage>
                    <img src={ProfilePicAlt} alt="User" />
                </UserImage>
            </UserInfo>

            <RatingWrapper.Wrapper>
                <RatingWrapper.Item>
                    <h4>3.9 <FontAwesomeIcon icon={faStar} color="#CCA747"/> </h4>
                    <p> Renter </p>
                </RatingWrapper.Item>

                <RatingWrapper.Item>
                    <h4>4.8 <FontAwesomeIcon icon={faStar} color="#CCA747"/> </h4>
                    <p> Owner </p>
                </RatingWrapper.Item>

            </RatingWrapper.Wrapper>

            <About>
                <h4>About Me</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo corporis quibusdam molestiae, quo aut iste exercitationem error </p>
            </About>
        </User>

        <ReviewsWrapper>
            <h3>Reviews</h3>
            <Picker>

            </Picker>

            <Reviews>
                <ReviewContainer>
                    <ReviewUser>
                        <ReviewUserImage>
                            <img src={ProfilePic01} />
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
                            <img src={ProfilePic02} />
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
                            <img src={ProfilePic03} />
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
                            <img src={ProfilePic04} />
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
                            <img src={ProfilePic02} />
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

    </Wrapper>
)


export default OtherUser;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const User = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const UserInfo = styled.div`
    display: flex;
    justify-content: center;
`;

const About = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    flex-direction: column;
    width: 260px;
    margin: 10px;

    h4{
        font-weight: 600;
        margin: 8px;
    }
`;

const RatingWrapper = {
    Wrapper: styled.div`  
           display: flex;
           flex-direction: row;
           justify-content: center;
           align-content: center;
           padding: 2px;
       `,

   Item: styled.div`
           display: flex;
           flex-direction: column;
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
    
    height: 360px;
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

const Picker = styled.div`
    display: flex;
`;

const UserImage = styled.div`
        display: inline-block;
        position: relative;
        width: 160px;
        height: 160px;
        overflow: hidden;
        border-radius: 50%;
        margin: 12px;

        img {
            width: auto;
            height: 100%;
        }
`;

