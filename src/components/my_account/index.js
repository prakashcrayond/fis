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
import DateFnsUtils from '@date-io/date-fns';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import axios from "axios";
import moment from "moment";
import config from "../../config";
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
        // color: "#012834"
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
        fontWeight: 600,
    },
    submit: {
        border: `2px solid ${theme.palette.primary.main}`,
        background: theme.palette.primary.main,
        boxShadow: "0px 3px 6px #0049903D",
        borderRadius: 8,
        fontSize: 12,
        opacity: 0.9,
        marginRight: 12,
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
        width: "100%",
    },
    profile: {
        borderBottom: `3px solid ${theme.palette.primary.main}`,
        background: theme.palette.background.paper,
        boxShadow: "0px 5px 10px #00000014",
        borderRadius: 8,
        width: "50%",
        margin: "auto",
        textAlign: "center",
        height: "50px",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        fontWeight: 600,
        fontSize: 15,
        opacity: 0.8,
        [theme.breakpoints.only('xs')]: {
            width: "97%",
            height: "auto",
            padding: 6
        }
    },
    phn: {
        color: theme.palette.primary.main, marginRight: 8,
        marginLeft: 6,
        [theme.breakpoints.only('xs')]: {
            marginTop: -12
        }
    },
})
// end

class MyaccountComponent extends React.Component {
    // state
    constructor(props) {
        super(props);
        this.state = {
            submit: false,
            open: false,
            firstName: "",
            lastName: null,
            usertype: null,
            userId: null,
            activationDate: new Date(),
            expirationDate: new Date(),
            addressLine1: null,
            addressLine2: null,
            city: null,
            statevalue: null,
            pincode: null,
            country: null,
            phoneNumber: null,
            officeNumber: null,
            email: null,

        }
    }
    // end
    componentDidMount() {
        // the fetch api
        axios.get(`${config.api_url}api/v1/users/USR001`).then(res => {
            if (res.data) {
                const data = res.data;
                this.setState({ 
                    ...data,
                    statevalue: data.state,
                    activationDate: moment(data.activationDate).format('MM/DD/YYYY'),
                    expirationDate: moment(data.expirationDate).format('MM/DD/YYYY'),
                })
                localStorage.setItem("groupId", data.userGroupId)
                localStorage.setItem("userId", data.userId)
                localStorage.setItem("institutionId", data.institutionId)
            }
        }).catch(err => {
            console.log("Profile details", err)
        })
    }
    handleChange = (n, v) => {
        const state = this.state;
        this.setState({
            ...state,
            [n]: v
        })
    }
    // handle submit funcy
    // handlesubmit = () => {
    //     const state = this.state;
    //     this.setState({ ...state, submit: true, open: true })
    //     setTimeout(() => {
    //         this.setState({ submit: false });
    //         this.props.history.push("/home")
    //     }, 3000);
    // }
    // end
    render() {

        const {
            classes
        } = this.props;

        const {
            open, submit,
            firstName,
            lastName,
            usertype,
            userId,
            activationDate,
            expirationDate,
            addressLine1,
            addressLine2,
            city,
            statevalue,
            pincode,
            country,
            phoneNumber,
            officeNumber,
            email
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

                {/* Breadcrumbs component */}
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
                    <Link color="inherit" href="/home" ><Typography className={classes.title}>
                        My Account </Typography></Link>
                    <Typography color="textPrimary" className={classes.title}>
                        Profile details</Typography>
                </Breadcrumbs>
                {/* end */}

                {/* card component one*/}
                <Card className={classes.card} variant="outlined">
                    <CardContent className={classes.card_title}>Profile Details</CardContent>

                    <Container>
                        <div className={classes.body}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>First Name</Typography>
                                    <TextField type="text" size="small" variant="outlined"
                                        placeholder="First Name" className={classes.input}
                                        onChange={(e) => this.handleChange("firstName", e.target.value)}
                                        disabled
                                        value={firstName} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Last Name</Typography>
                                    <TextField type="text" size="small" variant="outlined" placeholder="Last Name"
                                        onChange={(e) => this.handleChange("lastName", e.target.value)}
                                        disabled
                                        value={lastName} className={classes.input} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>User Type</Typography>
                                    <TextField type="text" size="small" variant="outlined" placeholder="User Type"
                                        value={usertype}
                                        onChange={(e) => this.handleChange("usertype", e.target.value)}
                                        disabled
                                        className={classes.input} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>User ID</Typography>
                                    <TextField type="text" size="small" variant="outlined" placeholder="User ID"
                                        onChange={(e) => this.handleChange("userId", e.target.value)}
                                        disabled
                                        value={userId} className={classes.input} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <Typography variant='subtitle2' className={classes.text_title}>Activation Date</Typography>
                                        <KeyboardDatePicker
                                            disabled
                                            style={{ width: "100%", margin: 0 }}
                                            inputVariant="outlined"
                                            margin="normal"
                                            format="MM/dd/yyyy"
                                            value={activationDate}
                                            onChange={(date) => this.handleChange("activationDate", date)}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                            size="small"
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <Typography variant='subtitle2' className={classes.text_title}>Expiration Date</Typography>
                                        <KeyboardDatePicker
                                            disabled
                                            style={{ width: "100%", margin: 0 }}
                                            inputVariant="outlined"
                                            margin="normal"
                                            format="MM/dd/yyyy"
                                            value={expirationDate}
                                            onChange={(date) => this.handleChange("expirationDate", date)}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                            size="small"
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                            </Grid>
                            {/* <Grid
                                container
                                direction="row"
                                justify="flex-end"
                                alignItems="center"
                                className={classes.btns}
                            >
                                <Grid item>
                                    <Button variant="contained" className={classes.submit} onClick={() => this.handlesubmit()}>Change</Button>
                                    <Button className={classes.clear}>Cancel</Button>
                                </Grid>
                            </Grid> */}
                        </div>
                    </Container>
                </Card>
                {/* end */}

                {/* card component two*/}
                <Card className={classes.card} variant="outlined">
                    <CardContent className={classes.card_title}>Profile Details</CardContent>

                    <Container>
                        <div className={classes.body}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Address Line 1</Typography>
                                    <TextField type="text" size="small" variant="outlined" placeholder="Address Line 1"
                                        disabled
                                        value={addressLine1}
                                        onChange={(e) => this.handleChange("addressLine1", e.target.value)}
                                        className={classes.input} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Address Line 2</Typography>
                                    <TextField type="text" size="small" variant="outlined" placeholder="Address Line 2"
                                        disabled
                                        value={addressLine2}
                                        onChange={(e) => this.handleChange("addressLine2", e.target.value)}
                                        className={classes.input} />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant='subtitle2' className={classes.text_title}>City</Typography>
                                    <TextField type="text" size="small" variant="outlined" placeholder="City"
                                        disabled
                                        value={city}
                                        onChange={(e) => this.handleChange("city", e.target.value)}
                                        className={classes.input} />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant='subtitle2' className={classes.text_title}>State</Typography>
                                    <TextField type="text" size="small" variant="outlined" placeholder="State"
                                        disabled
                                        value={statevalue}
                                        onChange={(e) => this.handleChange("statevalue", e.target.value)}
                                        className={classes.input} />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant='subtitle2' className={classes.text_title}>PIN Code</Typography>
                                    <TextField type="text" size="small" variant="outlined" placeholder="PIN Code"
                                        disabled
                                        value={pincode}
                                        onChange={(e) => this.handleChange("pincode", e.target.value)}
                                        className={classes.input} />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Country</Typography>
                                    <TextField type="text" size="small" variant="outlined" placeholder="Country"
                                        disabled
                                        value={country}
                                        onChange={(e) => this.handleChange("country", e.target.value)}
                                        className={classes.input} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Mobile Number</Typography>
                                    <TextField type="text" size="small" variant="outlined" placeholder="Mobile Number"
                                        disabled
                                        value={phoneNumber}
                                        onChange={(e) => this.handleChange("phoneNumber", e.target.value)}
                                        className={classes.input} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Office Number</Typography>
                                    <TextField type="text" size="small" variant="outlined" placeholder="Office Number"
                                        disabled
                                        value={officeNumber}
                                        onChange={(e) => this.handleChange("officeNumber", e.target.value)}
                                        className={classes.input} />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Email ID</Typography>
                                    <TextField type="text" size="small" variant="outlined" placeholder="Email ID"
                                        disabled
                                        value={email}
                                        onChange={(e) => this.handleChange("email", e.target.value)}
                                        className={classes.input} />
                                </Grid>

                            </Grid>
                        </div>
                    </Container>
                </Card>
                {/* end */}

                {/* PhoneInTalkIcon section */}
                <div className={classes.profile}>
                    <PhoneInTalkIcon className={classes.phn} /> For any update in profile please contact FIS Administrator
                </div>
                {/* end */}
            </Container>
        </div>
    }
}

export default withStyles(styles)(withRouter(MyaccountComponent));