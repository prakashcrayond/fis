import React from 'react';
import { Typography } from '@material-ui/core';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'You are in SignUp page'
        }
    }

    render() {

        const {
            message
        } = this.state;

        return <Typography>
            {message}
        </Typography>
    }
}

export default SignUp;