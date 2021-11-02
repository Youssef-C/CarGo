import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import ProfilePic from '../Images/ProfilePic.jpg';
import VOLVO from '../Images/VOLVO.webp';


const CarView = () => (
     <Wrapper.Wrapper>
         <Wrapper.Items>

            <Wrapper.Item>
                <ImageContainer>
                    <img src={VOLVO} alt="Volvo xc60" />
                </ImageContainer>
                <h2>Volvo XC60</h2>
            </Wrapper.Item>

            <Wrapper.Info>
                <Wrapper.Owner>
                    <p>Owner: Per Persson</p>
                    <Wrapper.PfPContainer>
                        <Wrapper.Pfp>
                            <img src={ProfilePic} alt="Profile"/>
                        </Wrapper.Pfp>
                    </Wrapper.PfPContainer>
                </Wrapper.Owner>
                <Cars.Rating>
                    <p>4.6</p>
                    <FontAwesomeIcon icon={faStar} color="#CCA747"/> 
                </Cars.Rating>
            </Wrapper.Info>

            <Wrapper.Description>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellat nam repudiandae eos accusantium officiis deleniti tempora voluptates eius neque ipsam distinctio cum, dolore pariatur perspiciatis aliquam incidunt ab omnis.</p>
            </Wrapper.Description>

            <Wrapper.ButtonCont>
                <Wrapper.Button><ButtonLink to={ROUTES.CARBOOK}>Book Now</ButtonLink></Wrapper.Button>
            </Wrapper.ButtonCont>
            
         </Wrapper.Items>
     </Wrapper.Wrapper>
);


export default CarView;



const Wrapper = {
    Wrapper: styled.div`
        display: flex;
        justify-content: center;
    `,

    Items: styled.div`
    
    `,

    Item: styled.div`

    h2{
        padding-left: 25px;
    }
    
    `,

    Info: styled.div`
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
    `,

    Owner: styled.div`
        display: flex;
        justify-content: center;
        flex-direction: row;
        margin: 10px 10px 10px 0px;

        
        background-color: rgba( 0, 0, 0, 0.1);
        margin-left: 25px;
        padding: 10px;
        border-radius: 12px;
        height: 60px;

        p{
            padding-top: 10px;
            padding-right: 4px;
        }
    `,

    Description: styled.div`
        align-self: center;
        background-color: rgba( 0, 0, 0, 0.1);
        margin-left: 25px;
        padding: 10px;
        border-radius: 12px;
        width: 330px;
        font-size: larger;
    `,

        //STYLE THE LITTLE PROFILE PICTURE

    PfPContainer: styled.div`
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
    `,

    Pfp: styled.div`
        display: inline-block;
        position: relative;
        width: 35px;
        height: 35px;
        overflow: hidden;
        border-radius: 50%;

        img {
            width: auto;
            height: 100%;
            margin-left: -15px;
        }
    `,

    ButtonCont: styled.div`
        display: flex;
        justify-content: center;
    `,
    
    Button: styled.button`

    `,
}


const Cars = {
    Rating: styled.div`
        display: flex;
        justify-content: center;
        flex-direction: row;
        padding-right: 40px;
        font-size: larger;

        margin-top: 30px;
    `,
}

const ImageContainer = styled.div`
        display: inline-block;
        width: 375px;
        height: 350px;
        position: relative;
        overflow: hidden;
        padding: 0px;
        margin: 0px;

        img {
            width: auto;
            height: 100%;
            margin-left: -80px;
        }
`;


const ButtonLink = styled(Link)`
    text-decoration: none;
    font-size: 2rem;
    color: white;
`;