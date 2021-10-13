import React from 'react';

import { withAuthorization } from '../Session';

const MessengerPage = () => (
    <div>
        <h1>Messages</h1>
        <p>The messages component will go here</p>
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(MessengerPage);