import React from 'react';
import styled from 'styled-components';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
    <ButtonWrapper>
        <Button type="button" onClick={firebase.doSignOut}>
            Sign Out
        </Button>
    </ButtonWrapper>
);

export default withFirebase(SignOutButton); 

const Button = styled.button`
    color: white;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
