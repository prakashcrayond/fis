import React from "react";
import {
    Button,
    Grid,
    InputAdornment,
    Typography,
    TextField,
    FormControl,
    InputLabel,
    OutlinedInput,
    IconButton,
    withStyles
} from "@material-ui/core";

import { withRouter } from "react-router-dom";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { styles } from "./style";

class Signin extends React.Component {
    // state
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false
        };
    }
    // end

    render() {
        const { showPassword } = this.state;
        const { classes, handlechange } = this.props;

        return (
            <div>

                {/* Signing title */}
                <Grid item xs={12} className={classes.formHeader}>
                    <Typography
                        variant="h2"
                        component="h2"
                        className={classes.mainHeading}
                    >
                        Sign In </Typography>
                </Grid>
                {/* end */}

                {/* signin form component */}
                <Grid container item xs={12} justify="center">
                    <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                        <Grid item xs={12} className={classes.form}>
                            <Grid item xs={12} >
                                <TextField
                                    className={classes.formInputs}
                                    //   error
                                    //   helperText="Incorrect entry."
                                    label="Login ID"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <FormControl variant="outlined"
                                    className={classes.formInputs}  >
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        type={"password"}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    edge="end"
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        labelWidth={70}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            item
                            xs={12}
                            className={classes.userHelpGrid}
                        >
                            <Grid
                                container
                                item
                                xs={12}
                                sm={12}
                                md={6}
                                lg={6}
                                xl={6}
                                justify="flex-start"
                                className={classes.rememberMe}
                            >
                                * Invalid ID  </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={6}
                                lg={6}
                                xl={6}
                                className={classes.forgotPassword}
                            >
                                <Typography variant="body1" component="div" onClick={() => handlechange()}>
                                    Forgot Login ID or Password?<span className={classes.click}> Click here</span>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                className={classes.signInButtonerr}
                            >
                                Too many attempts, please try again later. </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                disableElevation
                                className={classes.signInButton}
                                onClick={() => this.props.history.push("/welcome")}
                            >
                                Sign In </Button>
                            <Typography variant="subtitle2" className={classes.newuser}>New User? Contact system administrator for support.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                {/* end */}
            </div>
        );
    }
}

export default withStyles(styles)(withRouter(Signin));