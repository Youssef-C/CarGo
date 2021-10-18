import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'recompose'; 
import styled from 'styled-components';

//import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
    <SignInStyle.Wrapper>
        <SignInStyle.Items>
                <SignInStyle.Title>
                    <h1>Sign In</h1>
                </SignInStyle.Title>
            <SignInForm />
            <ButtonWrapper>
                <PasswordForgetLink />
                <button>
                <StyledLink to={ROUTES.SIGN_UP}>Sign Up</StyledLink>
                </button>
            </ButtonWrapper>  
        </SignInStyle.Items>
    </SignInStyle.Wrapper>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            })

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <SignInFormStyle>
                <form onSubmit={this.onSubmit}>
                    
                    <Input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                    />

                    <Input
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                    />
                    <ButtonWrapper>
                        <Button disabled={isInvalid} type="submit">
                            Sign In
                        </Button>
                    </ButtonWrapper>

                    {error && <p>{error.message}</p>}
                </form>
            </SignInFormStyle>
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };


const SignInStyle = {
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


  const SignInFormStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 0px 120px 0px;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 500;
`