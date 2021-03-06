import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    Container,
    Card,
    CardContent,
    Typography,
    withStyles,
    TextField,
    Grid,
    Button,
    Breadcrumbs,
    Link
} from '@material-ui/core';
import DialogComponent from "../../components/dialog/index";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// style
const styles = theme => ({
    root: {
        width: "100%",
        background: theme.palette.mainbackground.default,
        opacity: 1,
        padding: "30px 0px"
    },
    title: {
        fontSize: 16,
        fontWeight: 600,
    },
    card: {
        background: theme.palette.background.paper,
        boxShadow: "0px 5px 10px #00000014",
        borderRadius: 16,
        opacity: 1,
        margin: "20px 0px",
    },
    card_title: {
        borderBottom: `2px solid ${theme.palette.mainbackground.default}`,
        fontWeight: "bold",
        fontSize: 14,
        [theme.breakpoints.only('xs')]: {
            height: "20px",
        }
    },
    text_title: {
        padding: "6px 0px",
        opacity: 0.9
    },
    body: {
        padding: "30px 0px"
    },
    btns: {
        margin: "20px 0px"
    },
    clear: {
        boxShadow: "0px 3px 6px #0049903D",
        border: `1px solid ${theme.palette.primary.main}`,
        opacity: 0.9,
        fontSize: 12,
        borderRadius: 8,
        marginRight: 12,
        fontWeight: 600,
    },
    submit: {
        border: `2px solid ${theme.palette.primary.main}`,
        background: theme.palette.primary.main,
        boxShadow: "0px 3px 6px #0049903D",
        borderRadius: 8,
        fontSize: 12,
        opacity: 0.9,
        "&:hover": {
            background: theme.palette.primary.main,
        }
    }, d_icon: {
        margin: "auto",
        width: "100%",
        cursor: "pointer",
        textAlign: "center",
        color: theme.palette.primary.main,
        fontSize: 50
    },
    d_title: {
        fontSize: 16,
        fontWeight: 600,
        textAlign: "center",
        color: theme.palette.secondary.main,
        opacity: 0.8,
        letterSpacing: 1,
        paddingBottom: "12px",
    },
    d_btn: {
        textAlign: "center",
        margin: "auto",
        display: "flex",
        height: "40px",
        color: theme.palette.secondary.contrastText,
        fontSize: 16,
        textTransform: "capitalize",
        fontWeight: 600,
        boxShadow: "0px 10px 15px #70707028",
        background: theme.palette.primary.main,
        transition: "0.5s",
        "& button": {
            padding: 8,
        },
        "&:hover": {
            transition: "0.5s",
            background: theme.palette.primary.main,
            boxShadow: "0px 10px 15px #70707028",
            opacity: 0.9,
        },
    },
    input: {
        width: "50%",
        [theme.breakpoints.only('xs')]: {
            width: "100%",
        }

    }
})
// end

class Changepassword extends React.Component {
    // state
    constructor(props) {
        super(props);
        this.state = {
            submit: false,
            open: false
        }
    }
    // end

    // handle submit funcy
    handlesubmit = () => {
        const state = this.state;
        this.setState({ ...state, submit: true, open: true })
        setTimeout(() => {
            this.setState({ submit: false });
            this.props.history.push("/home")
        }, 3000);
    }
    // end

    render() {

        const {
            classes
        } = this.props;

        const {
            open, submit
        } = this.state;

        return <div className={classes.root}>
            <Container>

                {/* dialogbox component */}
                {submit && <DialogComponent
                    open={open}
                    handleClose={this.handleClose}
                    component={
                        <div>
                            <CheckCircleOutlineIcon className={classes.d_icon} />
                            <Typography variant="subtitle2" className={classes.d_title}> User profile has been successfully modified. </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                disableElevation
                                className={classes.d_btn}
                                onClick={() => this.props.history.push("/home")}
                            >
                                Ok
                        </Button>
                        </div>
                    }
                />}
                {/* end */}

                {/* card component */}
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
                    <Link color="inherit" href="/home" ><Typography className={classes.title}>
                        My Account </Typography></Link>
                    <Typography color="textPrimary" className={classes.title}>
                        Change Password </Typography>
                </Breadcrumbs>
                {/* end */}

                {/* card component */}
                <Card className={classes.card} variant="outlined">
                    <CardContent className={classes.card_title}>Change Password</CardContent>

                    <Container>
                        <div className={classes.body}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Current Password</Typography>
                                    <TextField type="password" size="small" variant="outlined" placeholder="Current Password" className={classes.input} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='subtitle2' className={classes.text_title}>New Password</Typography>
                                    <TextField type="password" size="small" variant="outlined" placeholder="New Password" className={classes.input} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Confirm New Password</Typography>
                                    <TextField type="password" size="small" variant="outlined" placeholder="Confirm New Password" className={classes.input} />
                                </Grid>
                            </Grid>

                            <Grid
                                container
                                direction="row"
                                justify="flex-end"
                                alignItems="center"
                                className={classes.btns}
                            >
                                <Grid item>
                                    <Button className={classes.clear}>Cancel</Button>
                                    <Button variant="contained" className={classes.submit} onClick={() => this.handlesubmit()}>Change</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </Card>
                {/* end */}
            </Container>
        </div>
    }
}

export default withStyles(styles)(withRouter(Changepassword));