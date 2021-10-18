import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
    <SignUpWrapper.Wrapper>
        <SignUpWrapper.Items>
            <SignUpWrapper.Title>Sign Up</SignUpWrapper.Title>
            <SignUpForm />
        </SignUpWrapper.Items>
    </SignUpWrapper.Wrapper>
);

const INITIAL_STATE = {
    username:'',
    email:'',
    passwordOne:'',
    passwordTwo:'',
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }
    
    onSubmit = event => {
        const { username, email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                //Create a user in Firebase realtime DB
                return this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        username,
                        email,
                    });
            })
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME); 
            })
            .catch(error => {
                this.setState({ error })
            });
        
        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid = 
            passwordOne !== passwordTwo  ||
            passwordOne === ''  ||
            email === ''  ||
            username === ''; 
    
        return (
                    <Form onSubmit={this.onSubmit}>
                        <Input
                            name="username"
                            value={username}
                            onChange={this.onChange}
                            type="text"
                            placeholder="Your Name"
                        />
                        
            
                        <Input
                            name="email"
                            value={email}
                            onChange={this.onChange}
                            type="text"
                            placeholder="Email Address"
                        />
            
                        <Input
                            name="passwordOne"
                            value={passwordOne}
                            onChange={this.onChange}
                            type="password"
                            placeholder="Password"
                        />
            
                        <Input
                            name="passwordTwo"
                            value={passwordTwo}
                            onChange={this.onChange}
                            type="password"
                            placeholder="Confirm Password"
                        />
            
                        <ButtonWrapper>
                            <Button disabled={isInvalid} type="submit">
                                Sign Up
                            </Button>
                        </ButtonWrapper>
            
                        {error && <p> {error.message} </p>}
                    </Form>
        );
    }
}



const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink }


const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    display: flex;
`;


const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Button = styled.button`
    color: white;
`;

const SignUpWrapper = {
    Wrapper: styled.div`
    display: flex;
    justify-content: center;
    `,
    
    Items: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `,

    Title: styled.title`
        display: flex;
        align-self: center;
    `,
  };
    