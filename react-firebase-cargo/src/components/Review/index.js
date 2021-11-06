import React from "react";
import styled from "styled-components";
import * as ROUTES from '../../constants/routes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ProfilePic01 from '../Images/ProfilePic01.jpg';
import AudiQ3 from '../Images/AudiQ3.png';


import StarRating from "../StarRating";
import { Link } from "react-router-dom";

const Review = () => (
    <Wrapper>

        <CarUsed.Wrapper>
            <CarUsed.Image>
                <img src={AudiQ3} alt="Audi Q3" />
            </CarUsed.Image>

            <CarUsed.Title>
                <h3>Audi Q3</h3>
            </CarUsed.Title>
        </CarUsed.Wrapper>


                        <AccountStyle.User>
                            <img src={ProfilePic01} alt="Profile" />
                            <AccountStyle.Info>
                            
                                <h3>Namn Namnsson</h3>

                                <RatingWrapper.Wrapper>
                                    <RatingWrapper.Item>
                                        <p>3.6 <FontAwesomeIcon icon={faStar} color="#CCA747"/> </p>
                                        <p> Renter </p>
                                    </RatingWrapper.Item>

                                    <RatingWrapper.Item>
                                        <p>4.9 <FontAwesomeIcon icon={faStar} color="#CCA747"/> </p>
                                        <p> Owner </p>
                                    </RatingWrapper.Item>

                                </RatingWrapper.Wrapper>

                            </AccountStyle.Info>
                            
                        </AccountStyle.User>

                        

                        <ReviewInput.Container>
                            <StarRatingContainer>
                                <StarRating />
                            </StarRatingContainer>

                            <ReviewInput.Form>
                                <form>
                                    <label>
                                        <input type="text" name="review" placeholder="The car was..."/>
                                    </label>
                                </form>
                            </ReviewInput.Form>
                        </ReviewInput.Container>

                        <DoneButton>
                            <ButtonLink to={ROUTES.HOME}>
                                Done
                            </ButtonLink>
                        </DoneButton>
    </Wrapper>
);

export default Review;


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const AccountStyle = {
    Wrapper: styled.div`
    display: flex;
    justify-content: center;
    overflow: unset;
    `,
    
    User: styled.div`
        display: flex;
        flex-direction: row;
        padding: 1rem;

        img {
            width: 80px;
            height: 80px;
            object-fit: cover;
            object-position: 50% 50%;
            border-radius: 50%;
            margin: 4px;
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
           padding: 20px;
       `,

   Item: styled.div`
           display: flex;
           flex-direction: column;
           justify-content: flex-end;
           margin: 10px;
       `,
};



const ReviewInput = {
    Container: styled.div`
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 100px 0px 0px 0px;
    `,

    Form: styled.div`
        display: flex;

        input{
            height: 120px;
        }
    `,
};

const StarRatingContainer = styled.div`
    display: flex;
    margin-left: 40px;
`;

const CarUsed = {
    Wrapper: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 25px;
    `,

    Title: styled.div`
        display: flex;
        border-bottom: solid 2px rgba(0, 0, 0, 0.2);
        font-size: larger;
    `,

    Image:styled.div`
        display: flex;
        height: 60px;
        width: auto;
    `,
}

const DoneButton = styled.button`
    
`;

const ButtonLink = styled(Link)`
    color: white;
    text-decoration: none;
`;