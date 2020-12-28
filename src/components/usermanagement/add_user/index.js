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
    CardContent
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { EdittablesContext } from '../../../contexts/index';
import moment from 'moment';
import DialogComponent from "../../dialog/index";
import CloseIcon from '@material-ui/icons/Close';
import axios from "axios";
import config from "../../../config";
// style
const styles = theme => ({
    root: {
        width: "100%",
        background: theme.palette.mainbackground.default,
        opacity: 1,
        padding: "30px 0px",
        "& input": {
            opacity: 0.9,
            fontSize: 13,
            fontWeight: 500
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
        opacity: 0.9,
        margin: "10px 0px",
        fontSize: 13
    },
    body: {
        padding: "30px 0px",
        [theme.breakpoints.up("md")]: {
            padding: "30px 40px"
        }
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

class AddUsermanagementForm extends React.Component {
    // state
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            officeNumber: "",
            email: "",
            userId: "",
            usertype: [],
            usergroup: "",
            usergroupvalue: null,
            institution: [],
            institutionvalue: null,
            financialentry: [],
            financialEntityCode: null,
            companyName: "",
            usertypevalue: null,
            departmentName: "",
            officepincode: null,
            activationDate: "",
            expirationDate: "",
            edit: false,
            path: null,
            submit: false,
            open: false,
            open1: false,
            addressLine1: "",
            addressLine2: "",
            city: "",
            state: "",
            pincode: "",
            error: {},
            country: "",
            mobilepincode: null,
            userGroupId: "",
            userTypeId: ""
        }
    }
    // end

    // page render component did mount funcy
    componentDidMount() {
        // the fetch api
        axios.get(`${config.api_url}api/v1/userType`).then(res => {
            if (res.data) {
                const valData = res?.data
                this.setState({
                    usertype: valData
                })
            }
        }).catch(err => {
            console.log("User management=>add user=> institution", err)
        })
        axios.get(`${config.api_url}api/v1/institution`).then(res => {
            if (res.data) {
                const valData = res?.data
                this.setState({
                    institution: valData
                })
            }
        }).catch(err => {
            console.log("User management=>add user=> institution", err)
        })
        axios.get(`${config.api_url}api/v1/usergroups`).then(res => {
            if (res.data) {
                const valData = res?.data?.content
                this.setState({
                    usergroup: valData
                })
            }
        }).catch(err => {
            console.log("User management=>add user=> usergroupvalue", err)
        })
        if (window.location.pathname.split("/")[2] !== "add") {
            axios.get(`${config.api_url}api/v1/users/${window.location.pathname.split("/")[2]}`).then(res => {
                if (res.data) {
                    const data = res.data;
                    this.setState({
                        ...data,
                        statevalue: data.state,
                        officepincode: data.officeNumber ? data.officeNumber.split(" ")[0] : "",
                        mobilepincode: data.phoneNumber ? data.phoneNumber.split(" ")[0] : "",
                        phoneNumber: data.phoneNumber ? data.phoneNumber.split(" ")[1] : "",
                        officeNumber: data.officeNumber ? data.officeNumber.split(" ")[1] : "",
                        financialEntityCode: { value: data.financialEntityCode },
                        activationDate: moment(data.activationDate).format('MM/DD/YYYY'),
                        expirationDate: moment(data.expirationDate).format('MM/DD/YYYY'),
                    })
                }
            }).catch(err => {
                console.log("User management=> edit user", err)
            })
        }
    }
    // end
    handleusertypevalue = (n, v) => {
        const state = this.state;
        this.setState({
            ...state,
            userTypeId: v?.label,
            [n]: v
        })
    }
    // input handle change funcy
    handlechange = (n, v) => {
        const state = this.state;
        state.error[n] = false;
        if (n === "usergroupvalue") {
            axios.get(`${config.api_url}api/v1/userGroupListing/${v?.value}`).then(res => {
                if (res?.data) {
                    const valData = res?.data;
                    this.setState({
                        usergroup: valData && valData?.map(v => { return { value: v?.groupName || v?.value, id: v?.id } }),
                        userGroupId: v?.label
                    })
                }
            }).catch(err => {
                console.log("User management=>add user=> usergroupvalue", err)
            })
        }
        else if (n === "institutionvalue") {
            axios.get(`${config.api_url}api/v1/financialEntity/${v?.instId}`).then(reslist => {
                if (reslist.data) {
                    const valData = reslist?.data
                    this.setState({
                        financialentry: { value: valData?.fecode },
                    })
                }
            }).catch(err => {
                console.log("User management=>add user=> financialEntity", err)
            })
        }
        this.setState({
            ...state,
            [n]: v
        })
    }
    // end


    // handle close dialogbox funcy
    handleClose = () => {
        const state = this.state;
        this.setState({ ...state, open: !state.open, open1: !state.open1 })
    }
    // end

    validate = () => {
        const validator = [
            // "country",
            "firstName",
            "lastName",
            "phoneNumber",
            "officeNumber",
            "email",
            "userId",
            "usergroupvalue",
            "institutionvalue",
            "financialEntityCode",
            "companyName",
            "usertypevalue",
            // "departmentName",
            "officepincode",
            "activationDate",
            "expirationDate",
            "addressLine1",
            // "addressLine2",
            "city",
            "state",
            "pincode",
            "mobilepincode",
        ]
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const error = {};
        let isValidate = true;
        validator.map(val => {
            if (!this.state[val] && !this.state[val.value]) {
                error[val] = true;
                isValidate = false;
                if (this.state[val] === 0) {
                    error[val] = false;
                    isValidate = true;
                }
            } else {
                if (val === "email") {
                    if (!regex.test(String(this.state.email).toLowerCase())) {
                        error[val] = true;
                        isValidate = true;
                    }
                } else if (val === "phoneNumber" && val === "officeNumber") {
                    if (JSON.parse(this.state.phoneNumber.length) !== 10) {
                        error[val] = true;
                        isValidate = true;
                    }
                } else {
                    error[val] = false;
                }
            }
        })
        this.setState({ error: { ...error } })
        return isValidate;
    }


    // handle submit funcy
    handlesubmit = () => {
        const state = this.state;
        if (this.validate()) {
            this.setState({ ...state, open: !state.open, open1: !state.open1 }, () => {
                if (state.open1) {
                    this.handleClosesubmit()
                }
            })
        }
    }
    // end

    // handle close dialogbox funcy
    handleClosesubmit = (api) => {
        debugger
        const state = this.state;
        const apiUrl = api === "save" ? "api/v1/makerchecker/addUserSave" : "api/v1/makerchecker/addUserSubmit";
        const payload = {
            "makerRequest": {
                "currentVersionNumber": localStorage.getItem("currentVersionNumber"),
                "makerId": localStorage.getItem("userId"),
                "makerInstitute": localStorage.getItem("institutionId"),
                "menuId": "5509afc2-7131-4389-bcce-f116cea9b85e"
            },
            "userRequest": {
                "activationDate": state?.activationDate,
                "addressLine1": state.addressLine1,
                "addressLine2": state.addressLine2,
                "city": state.city,
                "companyName": state.companyName,
                "departmentName": state.departmentName,
                "email": state.email,
                "expirationDate": state.expirationDate,
                "financialEntityCode": state?.financialEntityCode?.value,
                "firstName": state.firstName,
                "institutionId": state?.institutionvalue?.instId,
                "lastName": state.lastName,
                "officeNumber": state?.officepincode?.value + state.officeNumber,
                "phoneNumber": state?.mobilepincode?.value + state.phoneNumber,
                "pincode": state.pincode,
                "state": state.state,
                "userGroupId": state.userGroupId,
                "userId": state.userId,
                "userTypeId": state.userTypeId
            }
        }
        if (this.validate()) {
            debugger
            axios.post(`${config.api_url}${apiUrl}`, payload).then(res => {
                if (res.data) {
                    if (state.open1) {
                        localStorage.setItem("currentVersionNumber", res.data)
                        this.props.history.push(`/success/${state?.institutionvalue?.instId}`)
                    }
                }
            }).catch(err => { 
                // alert("n")
                console.log("User management=>add user=> save", err)
            })
        }
    }
    // end
    oncancel = () => {
        const state = this.state;
        this.setState({ ...state, open1: !state.open1 })
    }
    txtFieldChange(e) {
        if (!(e.which >= 48 && e.which <= 57)) e.preventDefault();
    }
    render() {

        const {
            classes
        } = this.props;

        const {
            pincode,
            officepincode,
            firstName,
            lastName,
            phoneNumber,
            officeNumber,
            email,
            userId,
            usertype,
            usergroup,
            usergroupvalue,
            institution,
            institutionvalue,
            financialentry,
            financialEntityCode,
            companyName,
            departmentName,
            activationDate,
            expirationDate,
            edit,
            usertypevalue,
            country,
            open1,
            addressLine1,
            addressLine2,
            city,
            state,
            mobilepincode,
            error
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
                            <Typography variant="subtitle2" className={classes.d_title}>Are you sure, would you like to add this user?</Typography>
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
                    <Typography className={classes.title}>User Management</Typography>
                    <Typography color={!edit ? "textPrimary" : ""} className={classes.title}>Add User</Typography>
                    {edit && <Typography color="textPrimary" className={classes.title}>
                        {"Edit"}</Typography>}
                </Breadcrumbs>
                {/* end */}

                {/* Card Component */}
                <Card className={classes.card} variant="outlined">
                    <CardContent className={classes.card_title}>{!edit ? "Add User" : "Edit User"}</CardContent>
                    <Container>
                        <div className={classes.body}>
                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>First Name <span className={classes.star}>*</span></Typography>
                                    <TextField size="small"
                                        value={firstName}
                                        helperText={error?.firstName && "Please enter your FirstName"}
                                        error={error?.firstName}
                                        onChange={(e) => { this.handlechange("firstName", e.target.value) }}
                                        variant="outlined" placeholder="First Name" style={{ width: "100%" }} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Last Name <span className={classes.star}>*</span></Typography>
                                    <TextField size="small" value={lastName}
                                        helperText={error?.lastName && "Please enter your LastName"}
                                        error={error?.lastName}
                                        onChange={(e) => { this.handlechange("lastName", e.target.value) }}
                                        variant="outlined" placeholder="Last Name" style={{ width: "100%" }} />
                                </Grid>

                                <Grid item xs={12} sm={3}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Mobile Number <span className={classes.star}>*</span></Typography>
                                    <Grid container spacing={1}>
                                        <Grid item xs={4} sm={4}>
                                            <Autocomplete
                                                value={mobilepincode}
                                                fullWidth={true}
                                                size="small"
                                                options={[
                                                    { value: "+91" },
                                                    { value: "+92" },
                                                ]}
                                                getOptionLabel={(option) => option.value}
                                                onChange={(e, value) => {
                                                    this.handlechange("mobilepincode", value)
                                                }}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        helperText={error?.mobilepincode && "Please enter your Mobile Pincode"}
                                                        error={error?.mobilepincode}
                                                        variant="outlined"
                                                    />
                                                )}
                                            />
                                        </Grid>
                                        <Grid item xs={8} sm={8}>
                                            <TextField size="small" value={phoneNumber}
                                                onKeyPress={(e) => { this.txtFieldChange(e) }}
                                                helperText={error?.phoneNumber && "Please enter only 10 digits number"}
                                                error={error?.phoneNumber}
                                                onChange={(e) => { this.handlechange("phoneNumber", e.target.value) }}
                                                variant="outlined" placeholder="Mobile Number" style={{ width: "100%" }} />
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} sm={3}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Office Number</Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4} sm={4}>
                                            <Autocomplete
                                                value={officepincode && officepincode}
                                                fullWidth={true}
                                                size="small"
                                                options={[
                                                    { value: "+91" },
                                                    { value: "+92" },
                                                ]}
                                                getOptionLabel={(option) => option.value}
                                                onChange={(e, value) => {
                                                    this.handlechange("officepincode", value)
                                                }}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        helperText={error?.officepincode && "Please enter your Officepincode"}
                                                        error={error?.officepincode}
                                                        variant="outlined"
                                                    />
                                                )}
                                            />
                                        </Grid>
                                        <Grid item xs={8} sm={8}>
                                            <TextField size="small"
                                                value={officeNumber}
                                                onKeyPress={(e) => { this.txtFieldChange(e) }}
                                                helperText={error?.officeNumber && "Please enter only 10 digits number"}
                                                error={error?.officeNumber}
                                                onChange={(e) => { this.handlechange("officeNumber", e.target.value) }}
                                                variant="outlined" placeholder="Office Number" style={{ width: "100%" }} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Email ID <span className={classes.star}>*</span></Typography>
                                    <TextField size="small" value={email}
                                        helperText={error?.email && "Invalid email"}
                                        error={error?.email}
                                        onChange={(e) => { this.handlechange("email", e.target.value) }}
                                        variant="outlined" placeholder="Email ID" style={{ width: "100%" }} />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant='subtitle2' className={classes.text_title}>User ID <span className={classes.star}>*</span></Typography>
                                    <TextField size="small" value={userId}
                                        helperText={error?.userId && "Please enter your UserId"}
                                        error={error?.userId}
                                        onChange={(e) => { this.handlechange("userId", e.target.value) }}
                                        variant="outlined" placeholder="User ID" style={{ width: "100%" }} />
                                </Grid>

                                <Grid item xs={12} sm={3}>
                                    <Typography variant='subtitle2' className={classes.text_title}>User Type <span className={classes.star}>*</span></Typography>
                                    <Autocomplete
                                        fullWidth={true}
                                        size="small"
                                        value={usertypevalue}
                                        options={usertype && usertype?.map(v => { return { value: v.type, label: v?.id } })}
                                        getOptionLabel={(option) => option.value}
                                        onChange={(e, value) => {
                                            this.handleusertypevalue("usertypevalue", value)
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                helperText={error?.usertypevalue && "Please enter your Usertype"}
                                                error={error?.usertypevalue}
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
                                        value={usergroupvalue && usergroupvalue}
                                        options={usergroup && usergroup?.map(v => { return { value: v?.groupName || v?.value, id: v?.id } })}
                                        getOptionLabel={(option) => option.value}
                                        onChange={(e, value) => {
                                            this.handlechange("usergroupvalue", value)
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                helperText={error?.usergroupvalue && "Please enter your Usergroup"}
                                                error={error?.usergroupvalue}
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
                                        value={institutionvalue && institutionvalue}
                                        options={institution && institution?.map(v => { return { value: v?.instcode, instId: v?.instId } })}
                                        getOptionLabel={(option) => option.value}
                                        onChange={(e, value) => {
                                            this.handlechange("institutionvalue", value)
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                helperText={error?.institutionvalue && "Please enter your Institution"}
                                                error={error?.institutionvalue}
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
                                        disabled={institutionvalue ? false : true}
                                        value={financialEntityCode && financialEntityCode}
                                        options={[financialentry]}
                                        getOptionLabel={(option) => option.value}
                                        onChange={(e, value) => {
                                            this.handlechange("financialEntityCode", value)
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                helperText={error?.financialEntityCode && "Please enter your Financial Entity"}
                                                error={error?.financialEntityCode}
                                                variant="outlined"
                                                placeholder="Financial Entry"
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Company Name <span className={classes.star}>*</span></Typography>
                                    <TextField size="small" value={companyName}
                                        helperText={error?.companyName && "Please enter your CompanyName"}
                                        error={error?.companyName}
                                        onChange={(e) => { this.handlechange("companyName", e.target.value) }}
                                        variant="outlined" placeholder="Company Name" style={{ width: "100%" }} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Department Name</Typography>
                                    <TextField size="small" value={departmentName}
                                        helperText={error?.departmentName && "Please enter your Department Name"}
                                        error={error?.departmentName}
                                        onChange={(e) => { this.handlechange("departmentName", e.target.value) }}
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
                                            value={activationDate}
                                            helperText={error?.activationDate && "Please enter your Activation Date"}
                                            error={error?.activationDate}
                                            onChange={(e) => { this.handlechange("activationDate", e) }}
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
                                            value={expirationDate}
                                            helperText={error?.expirationDate && "Please enter your Expiration Date"}
                                            error={error?.expirationDate}
                                            onChange={(e) => { this.handlechange("expirationDate", e) }}
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
                                    <TextField size="small" value={addressLine1}
                                        helperText={error?.addressLine1 && "Please enter your Address Line 1"}
                                        error={error?.addressLine1}
                                        onChange={(e) => { this.handlechange("addressLine1", e.target.value) }}
                                        variant="outlined" placeholder="Address Line 1" style={{ width: "100%" }} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Address Line 2</Typography>
                                    <TextField size="small" value={addressLine2}
                                        helperText={error?.addressLine2 && "Please enter your Address Line 2"}
                                        error={error?.addressLine2}
                                        onChange={(e) => { this.handlechange("addressLine2", e.target.value) }}
                                        variant="outlined" placeholder="Address Line 2" style={{ width: "100%" }} />
                                </Grid>

                                <Grid item xs={12} sm={3}>
                                    <Typography variant='subtitle2' className={classes.text_title}>City <span className={classes.star}>*</span></Typography>
                                    <TextField size="small" value={city}
                                        helperText={error?.city && "Please enter your City"}
                                        error={error?.city}
                                        onChange={(e) => { this.handlechange("city", e.target.value) }}
                                        variant="outlined" placeholder="City" style={{ width: "100%" }} />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant='subtitle2' className={classes.text_title}>State <span className={classes.star}>*</span></Typography>
                                    <TextField size="small" value={state}
                                        helperText={error?.state && "Please enter your State"}
                                        error={error?.state}
                                        onChange={(e) => { this.handlechange("state", e.target.value) }}
                                        variant="outlined" placeholder="State" style={{ width: "100%" }} />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant='subtitle2' className={classes.text_title}>PIN code <span className={classes.star}>*</span></Typography>
                                    <TextField size="small" value={pincode}
                                        helperText={error?.pincode && "Please enter your Pincode"}
                                        error={error?.pincode}
                                        onChange={(e) => { this.handlechange("pincode", e.target.value) }}
                                        variant="outlined" placeholder="PIN code" style={{ width: "100%" }} />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Country</Typography>
                                    <TextField size="small" value={country}
                                        helperText={error?.country && "Please enter your Country"}
                                        error={error?.country}
                                        onChange={(e) => { this.handlechange("country", e.target.value) }}
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
                                    <Button className={classes.clear}>{"Cancel"}</Button>
                                    <Button variant="contained" className={classes.submit}
                                        onClick={() => this.handlesubmit("save")}>
                                        {"Save"}</Button>
                                    <Button variant="contained" className={classes.submit}
                                        onClick={() => this.handlesubmit("submit")}>
                                        {window.location.pathname.split("/")[2] === "add" ? "Submit" : "Update"}</Button>
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
AddUsermanagementForm.contextType = EdittablesContext;

export default withStyles(styles)(withRouter(AddUsermanagementForm));