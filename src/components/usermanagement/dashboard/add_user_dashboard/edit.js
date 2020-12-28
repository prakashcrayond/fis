import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    Container,
    Card,
    Typography,
    withStyles,
    TextField,
    Grid,
    Button,
    Breadcrumbs,
    Divider,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { EdittablesContext } from '../../../../contexts/index';
import moment from 'moment';
import DialogComponent from "../../../../components/dialog/index";
import CloseIcon from '@material-ui/icons/Close';
// style
const styles = theme => ({
    root: {
        width: "100%",
        background: theme.palette.mainbackground.default,
        opacity: 1,
        padding: "30px 0px"
    }, choosebtnactive: {
        border: `2px solid ${theme.palette.primary.main}`,
        opacity: 0.9,
        fontSize: 12,
        background: theme.palette.primary.main,
        boxShadow: "0px 3px 6px #0049903D",
        marginRight: 12,
        borderRadius: 8,
        "&:hover": {
            background: theme.palette.primary.main,
        },
        [theme.breakpoints.down('xs')]: {
            margin: 8,
        }
    },
    choosebtn: {
        border: "2px solid #f0f0f0",
        opacity: 0.9,
        fontSize: 12,
        background: theme.palette.mainbackground.default,
        boxShadow: "0px 1px 2px #0049903D",
        marginRight: 12,
        borderRadius: 8,
        color: "#728691",
        "&:hover": {
            background: theme.palette.mainbackground.default,
        },
        [theme.breakpoints.down('xs')]: {
            margin: 8,
        }
    },
    title: {
        fontSize: 16,
        fontWeight: 600,
        // color: "#012834"
        [theme.breakpoints.down("xs")]: {
            fontSize: 14,
        },
    },
    card: {
        background: theme.palette.background.paper,
        boxShadow: "0px 5px 10px #00000014",
        borderRadius: 16,
        opacity: 1,
        margin: "20px 0px",
    },

    text_title: {
        padding: "6px 0px",
        opacity: 0.9
    },
    body: {
        padding: "30px 0px"
    },
    btns: {
        marginTop: "30px"
    },
    clear: {
        boxShadow: "0px 3px 6px #0049903D",
        border: `1px solid ${theme.palette.primary.main}`,
        opacity: 0.9,
        fontSize: 12,
        borderRadius: 8,
        fontWeight: 600,
        marginRight: 12,
        [theme.breakpoints.only('xs')]: {
            marginRight: 12,
            marginTop: 6,
            fontSize: 9,
        }
    },
    submit: {
        border: `2px solid ${theme.palette.primary.main}`,
        background: theme.palette.primary.main,
        boxShadow: "0px 3px 6px #0049903D",
        borderRadius: 8,
        fontSize: 12,
        marginRight: 12,
        opacity: 0.9,
        "&:hover": {
            background: theme.palette.primary.main,
        },
        [theme.breakpoints.only('xs')]: {
            marginRight: 12,
            fontSize: 9,
            marginTop: 6
        }
    },
    star: {
        color: theme.palette.error.main
    }, d_iconss: {
        marginBottom: 4,
        flexGrow: 1,
        // margin: "auto",
        // width: "100%",
        // cursor: "pointer",
        // textAlign: "center",
        // color: theme.palette.primary.main,
        // fontSize: 50
    },
    d_icon: {
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
    dividers: {
        margin: "30px 6px 6px",
        width: "100%"
    },
    backbtn: {
        background: theme.palette.background.paper,
        boxShadow: "0px 5px 10px #00000014",
        border: "2px solid #EAEAEA",
        borderRadius: 8,
        fontSize: 14,
        textTransform: "capitalize",
        float: "right",
        opacity: 0.9,
        "&:hover": {
            background: theme.palette.background.paper,
        }
    },
    backicon: {
        fontSize: 18,
        marginRight: 8,
    }, card_title: {
        borderBottom: `2px solid ${theme.palette.mainbackground.default}`,
        fontWeight: "bold",
        fontSize: 16,
        [theme.breakpoints.only('xs')]: {
            height: "20px",
        }
    },
})
// end

class AdduserdashboardEdit extends React.Component {
    // state
    constructor(props) {
        super(props);
        this.state = {
            pincode: { value: "+91" },
            firstname: "",
            lastname: "",
            mobilenumber: "",
            officenumber: "",
            email: "",
            userid: "",
            usertype: "",
            usergroup: "",
            institution: "",
            financialentry: "",
            companyname: "",
            departmentname: "",
            activationdate: new Date(),
            expirationdate: new Date(),
            edit: false,
            path: null,
            submit: false,
            open: false,
            open1: false,
            address1: null,
            address2: null,
            city: null,
            state: null,
            userpincode: null,
            select: null,
        }
    }
    // end

    // page render component did mount funcy
    componentDidMount() {
        const state = this.state;
        if (this.context?.data) {
            const data = this.context.data.data
            this.setState({
                ...state,
                firstname: data.firstname,
                pincode: { value: data.pincode },
                lastname: data.lastname,
                mobilenumber: data.mobilenumber,
                officenumber: data.officenumber,
                email: data.email,
                userid: data.userid,
                usertype: { value: data.usertype },
                usergroup: { value: data.usergroup },
                institution: { value: data.institution },
                financialentry: { value: data.financialentry },
                companyname: data.companyname,
                departmentname: data.departmentname,
                activationdate: moment(data.activationdate),
                expirationdate: moment(data.expirationdate),
                edit: true,
                path: this.context.data.path,
            })
        }
    }
    // end

    // input handle change funcy
    handlechange = (n, v) => {
        const state = this.state;
        this.setState({
            ...state,
            [n]: v
        })
    }
    // end

    // handle submit funcy
    handlesubmit = () => {
        this.props.history.push("/add-usermanagement-dashboard")
    }
    // end

    // handle close dialogbox funcy
    handleClose = () => {
        const state = this.state;
        this.setState({ ...state, open: !state.open, open1: !state.open1 })
    }
    // end
    // handle close dialogbox funcy
    handleClosesubmit = () => {
        const state = this.state;
        this.setState({ ...state, open: !state.open, open1: !state.open1 }, () => {
            if (state.open1) {
                return this.handlesubmit()
            }
        })
    }
    // end
    oncancel = () => {
        const state = this.state;
        this.setState({ ...state, open1: !state.open1 })
    }
    // choose Select Log
    choosebtn = (values) => {
        const state = this.state;
        const v = state.select === values ? null : values
        this.setState({
            ...state,
            select: v
        });
    };
    // end
    render() {

        const {
            classes
        } = this.props;

        const {
            pincode,
            firstname,
            lastname,
            mobilenumber,
            officenumber,
            email,
            userid,
            usertype,
            usergroup,
            institution,
            financialentry,
            companyname,
            departmentname,
            activationdate,
            expirationdate,
            // select,
            // path,
            // submit,
            // open,
            open1,
            address1,
            address2,
            city,
            state,
            userpincode,
        } = this.state;

        return <div className={classes.root}>
            <Container>

                {/* Dialog Component */}
                {/* {submit && <Succus data={data} />} */}
                {/* end */}
                <DialogComponent
                    open={open1}
                    handleClose={this.handleClose}
                    component={
                        <div style={{ margin: "auto", textAlign: "center" }}>
                            <span style={{ display: "flex" }}>
                                <span className={classes.d_iconss} />
                                <CloseIcon style={{ marginTop: -12, marginRight: -12, cursor: "pointer", opacity: 0.7 }} onClick={() => this.oncancel()} />
                            </span>
                            <Typography variant="subtitle2" className={classes.d_title}>Are you sure, would you like to edit this user?</Typography>
                            <Button
                                className={classes.clear}
                                onClick={() => this.oncancel()}
                            >
                                No
                        </Button>&nbsp;
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={() => this.handleClosesubmit()}
                            >
                                Yes
                        </Button>
                        </div>
                    }
                />
                {/* Breadcrumbs Component */}
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
                    <Typography className={classes.title}>User Management Dashboard</Typography>
                    <Typography color={"textPrimary"} className={classes.title}>Edit User</Typography>
                </Breadcrumbs>
                {/* end */}

                {/* Card Component */}
                <Card className={classes.card} variant="outlined">
                    <Container>
                        <div className={classes.body}>
                            <Grid container spacing={2}>

                                <Grid container spacing={2} justify="flex-end">
                                    <Grid item xs={12} sm={3}>
                                        <Typography variant='subtitle2' className={classes.text_title}>Remarks</Typography>
                                        <TextField size="small"
                                            value={firstname}
                                            onChange={(e) => { this.handlechange("firstname", e.target.value) }}
                                            variant="outlined" placeholder="Type Here" style={{ width: "100%" }} />
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>First Name <span className={classes.star}>*</span></Typography>
                                    <TextField size="small"
                                        value={firstname}
                                        onChange={(e) => { this.handlechange("firstname", e.target.value) }}
                                        variant="outlined" placeholder="First Name" style={{ width: "100%" }} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Last Name <span className={classes.star}>*</span></Typography>
                                    <TextField size="small" value={lastname}
                                        onChange={(e) => { this.handlechange("lastname", e.target.value) }}
                                        variant="outlined" placeholder="Last Name" style={{ width: "100%" }} />
                                </Grid>

                                <Grid item xs={12} sm={3}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Mobile Number <span className={classes.star}>*</span></Typography>
                                    <Grid container spacing={1}>
                                        <Grid item xs={4} sm={3}>
                                            <Autocomplete
                                                value={pincode}
                                                fullWidth={true}
                                                size="small"
                                                options={[
                                                    { value: "+91" },
                                                    { value: "+92" },
                                                ]}
                                                getOptionLabel={(option) => option.value}
                                                onChange={(e, value) => {
                                                    this.handlechange("pincode", value)
                                                }}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        variant="outlined"
                                                    />
                                                )}
                                            />
                                        </Grid>
                                        <Grid item xs={8} sm={9}>
                                            <TextField size="small" value={mobilenumber}
                                                onChange={(e) => { this.handlechange("mobilenumber", e.target.value) }}
                                                variant="outlined" placeholder="Mobile Number" style={{ width: "100%" }} />
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} sm={3}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Office Number</Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4} sm={3}>
                                            <Autocomplete
                                                value={pincode}
                                                fullWidth={true}
                                                size="small"
                                                options={[
                                                    { value: "+91" },
                                                    { value: "+92" },
                                                ]}
                                                getOptionLabel={(option) => option.value}
                                                onChange={(e, value) => {
                                                    this.handlechange("pincode", value)
                                                }}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        variant="outlined"
                                                    />
                                                )}
                                            />
                                        </Grid>
                                        <Grid item xs={8} sm={9}>
                                            <TextField size="small" value={officenumber}
                                                onChange={(e) => { this.handlechange("officenumber", e.target.value) }}
                                                variant="outlined" placeholder="Office Number" style={{ width: "100%" }} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Email ID <span className={classes.star}>*</span></Typography>
                                    <TextField size="small" value={email}
                                        onChange={(e) => { this.handlechange("email", e.target.value) }}
                                        variant="outlined" placeholder="Email ID" style={{ width: "100%" }} />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant='subtitle2' className={classes.text_title}>User ID <span className={classes.star}>*</span></Typography>
                                    <TextField size="small" value={userid}
                                        onChange={(e) => { this.handlechange("userid", e.target.value) }}
                                        variant="outlined" placeholder="User ID" style={{ width: "100%" }} />
                                </Grid>

                                <Grid item xs={12} sm={3}>
                                    <Typography variant='subtitle2' className={classes.text_title}>User Type <span className={classes.star}>*</span></Typography>
                                    <Autocomplete
                                        fullWidth={true}
                                        size="small"
                                        value={usertype}
                                        options={[
                                            { value: "FIS User" },
                                            { value: "FIS User2" },
                                        ]}
                                        getOptionLabel={(option) => option.value}
                                        onChange={(e, value) => {
                                            this.handlechange("usertype", value)
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                variant="outlined"
                                                placeholder="User Type"
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>User Group <span className={classes.star}>*</span></Typography>
                                    <Autocomplete
                                        fullWidth={true}
                                        size="small"
                                        value={usergroup}
                                        options={[
                                            { value: "FIS User" },
                                            { value: "FIS User2" },
                                        ]}
                                        getOptionLabel={(option) => option.value}
                                        onChange={(e, value) => {
                                            this.handlechange("usergroup", value)
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                variant="outlined"
                                                placeholder="User Group"
                                            />
                                        )}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Institution <span className={classes.star}>*</span></Typography>
                                    <Autocomplete
                                        fullWidth={true}
                                        size="small"
                                        value={institution}
                                        options={[
                                            { value: "Institution" },
                                            { value: "Institution2" },
                                        ]}
                                        getOptionLabel={(option) => option.value}
                                        onChange={(e, value) => {
                                            this.handlechange("institution", value)
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                variant="outlined"
                                                placeholder="Institution"
                                            />
                                        )}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Financial Entry <span className={classes.star}>*</span></Typography>
                                    <Autocomplete
                                        fullWidth={true}
                                        size="small"
                                        value={financialentry}
                                        options={[
                                            { value: "102518" },
                                            { value: "102519" },
                                        ]}
                                        getOptionLabel={(option) => option.value}
                                        onChange={(e, value) => {
                                            this.handlechange("financialentry", value)
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                variant="outlined"
                                                placeholder="Financial Entry"
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Company Name <span className={classes.star}>*</span></Typography>
                                    <TextField size="small" value={companyname}
                                        onChange={(e) => { this.handlechange("companyname", e.target.value) }}
                                        variant="outlined" placeholder="Company Name" style={{ width: "100%" }} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Department Name</Typography>
                                    <TextField size="small" value={departmentname}
                                        onChange={(e) => { this.handlechange("departmentname", e.target.value) }}
                                        variant="outlined" placeholder="Department Name" style={{ width: "100%" }} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <Typography variant='subtitle2' className={classes.text_title}>Activation Date <span className={classes.star}>*</span></Typography>
                                        <KeyboardDatePicker
                                            style={{ width: "100%", margin: 0 }}
                                            inputVariant="outlined"
                                            margin="normal"
                                            format="MM/dd/yyyy"
                                            value={activationdate}
                                            onChange={(e) => { this.handlechange("activationdate", e) }}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                            size="small"
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <Typography variant='subtitle2' className={classes.text_title}>Expiration Date <span className={classes.star}>*</span></Typography>
                                        <KeyboardDatePicker
                                            style={{ width: "100%", margin: 0 }}
                                            inputVariant="outlined"
                                            margin="normal"
                                            format="MM/dd/yyyy"
                                            value={expirationdate}
                                            onChange={(e) => { this.handlechange("expirationdate", e) }}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                            size="small"
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Divider className={classes.dividers} />
                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Address Line 1 <span className={classes.star}>*</span></Typography>
                                    <TextField size="small" value={address1}
                                        onChange={(e) => { this.handlechange("address1", e.target.value) }}
                                        variant="outlined" placeholder="Address Line 1" style={{ width: "100%" }} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Address Line 2</Typography>
                                    <TextField size="small" value={address2}
                                        onChange={(e) => { this.handlechange("address2", e.target.value) }}
                                        variant="outlined" placeholder="Address Line 2" style={{ width: "100%" }} />
                                </Grid>

                                <Grid item xs={12} sm={3}>
                                    <Typography variant='subtitle2' className={classes.text_title}>City <span className={classes.star}>*</span></Typography>
                                    <TextField size="small" value={city}
                                        onChange={(e) => { this.handlechange("city", e.target.value) }}
                                        variant="outlined" placeholder="City" style={{ width: "100%" }} />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant='subtitle2' className={classes.text_title}>State <span className={classes.star}>*</span></Typography>
                                    <TextField size="small" value={state}
                                        onChange={(e) => { this.handlechange("state", e.target.value) }}
                                        variant="outlined" placeholder="State" style={{ width: "100%" }} />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant='subtitle2' className={classes.text_title}>PIN code <span className={classes.star}>*</span></Typography>
                                    <TextField size="small" value={userpincode}
                                        onChange={(e) => { this.handlechange("userpincode", e.target.value) }}
                                        variant="outlined" placeholder="PIN code" style={{ width: "100%" }} />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Country</Typography>
                                    <TextField size="small" value={userpincode}
                                        onChange={(e) => { this.handlechange("userpincode", e.target.value) }}
                                        variant="outlined" placeholder="Country" style={{ width: "100%" }} />
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
                                    <Button className={classes.clear} >Clear</Button>
                                    <Button className={classes.clear} >Cancel</Button>
                                    <Button variant="contained" className={classes.submit}
                                        onClick={() => this.handleClosesubmit()}>
                                        {"saVE"}</Button>
                                    <Button variant="contained" className={classes.submit}
                                        onClick={() => this.handleClosesubmit()}>
                                        {"Submit"}</Button>
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
AdduserdashboardEdit.contextType = EdittablesContext;

export default withStyles(styles)(withRouter(AdduserdashboardEdit));