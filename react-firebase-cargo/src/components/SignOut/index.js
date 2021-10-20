import React from 'react';
import styled from 'styled-components';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
    <Button type="button" onClick={firebase.doSignOut}>
        Sign Out
    </Button>
);

export default withFirebase(SignOutButton); 

const Button = styled.button`
    color: white;
`;
