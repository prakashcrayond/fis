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
    CardContent,
    Breadcrumbs
} from '@material-ui/core';
import { EdittablesContext } from '../../contexts/index';
import DialogComponent from "../../components/dialog/index";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
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
    text_title: {
        padding: "6px 0px",
        opacity: 0.9
    },
    body: {
        padding: "30px 0px"
    },
    btns: {
        margin: "30px 0px"
    },
    clear: {
        boxShadow: "0px 3px 6px #0049903D",
        border: `1px solid ${theme.palette.primary.main}`,
        opacity: 0.9,
        fontSize: 12,
        borderRadius: 8,
        fontWeight: 600,
        marginRight: 12
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
        }
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
    choosebtnactive: {
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
    backbtn: {
        background: theme.palette.background.default,
        boxShadow: "0px 5px 10px #00000014",
        border: "2px solid #EAEAEA",
        borderRadius: 8,
        fontSize: 14,
        textTransform: "capitalize",
        float: "right",
        opacity: 0.9,
        "&:hover": {
            background: theme.palette.background.default,
        }
    },
    backicon: {
        fontSize: 18,
        marginRight: 8,
    },
    card_title: {
        borderBottom: "1px solid #c9caca30",
        fontWeight: "bold",
        fontSize: 14,
        [theme.breakpoints.only('xs')]: {
            borderBottom: "1px solid #c9caca6b",
            height: "20px",
        }
    },
})
// end

class AuditMenu extends React.Component {
    // state
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            financial: null,
            select: null,
            userid: [{ value: "user1" },
            { value: "user2" }],
            from: new Date(),
            end: new Date(),
            edit: null,
            submit: false,
            open: false
        }
    }
    // end

    // input on changes
    handlechange = (n, v) => {
        const state = this.state;
        this.setState({
            ...state,
            [n]: v
        })
    }
    // end

    // handlesubmit
    handlemove = () => {
        const state = this.state;
        this.setState({ ...state, submit: true, open: true })
        setTimeout(() => {
            this.setState({ submit: false });
            this.props.history.push("/audit-menu-table")
        }, 3000);
    }
    // end

    // handleclose drawer
    handleClose = () => {
        const state = this.state;
        this.setState({ ...state, open: !state.open })
    }
    // end

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
            name,
            financial,
            select,
            userid,
            from,
            end,
            submit,
            open
        } = this.state;

        return <div className={classes.root}>
            <Container>

                {/* dialog component */}
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
                                onClick={() => this.props.history.push("/audit-menu-table")}
                            >
                                Ok
                        </Button>
                        </div>
                    }
                />}
                {/* end */}

                {/* Breadcrumbs */}
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
                    <Typography className={classes.title}>Audits</Typography>
                    <Typography color="textPrimary" className={classes.title}>Search User</Typography>
                </Breadcrumbs>
                {/* end */}

                {/* card component */}
                <Card className={classes.card} variant="outlined">
                    <CardContent className={classes.card_title}>Search User</CardContent>
                    <Container>
                        <div className={classes.body}>
                            <Grid container spacing={2}>

                                <Grid item xs={12}>
                                    <Typography variant="subtitle2" className={classes.text_title}>Select Log</Typography>
                                    {["User Activity Log", "Data Audit log"].map(v => {
                                        return <Button onClick={() => this.choosebtn(v)} variant="contained" className={select === v ? classes.choosebtnactive : classes.choosebtn}>{v}</Button>
                                    })}
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Institution Name</Typography>
                                    <TextField size="small"
                                        value={name}
                                        onChange={(e) => { this.handlechange("name", e.target.value) }}
                                        variant="outlined" placeholder="Institution Name" style={{ width: "100%" }} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Financial Entity</Typography>
                                    <Autocomplete
                                        value={financial}
                                        fullWidth={true}
                                        size="small"
                                        options={[
                                            { value: "2232" },
                                            { value: "23232" },
                                        ]}
                                        getOptionLabel={(option) => option.value}
                                        onChange={(e, value) => {
                                            this.handlechange("financial", value)
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                variant="outlined"
                                                placeholder="Financial Entity"
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Select User</Typography>

                                    <Autocomplete
                                        multiple
                                        value={userid}
                                        options={[
                                            { value: "user1" },
                                            { value: "user2" },
                                        ]}
                                        size="small"
                                        onChange={(e, value) => {
                                            this.handlechange("userid", value)
                                        }}
                                        getOptionLabel={(option) => option.value}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                variant="outlined"
                                                placeholder="Select User"
                                            />
                                        )}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={3}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <Typography variant='subtitle2' className={classes.text_title}>From Date</Typography>
                                        <KeyboardDatePicker
                                            style={{ width: "100%", margin: 0 }}
                                            inputVariant="outlined"
                                            margin="normal"
                                            format="MM/dd/yyyy"
                                            value={from}
                                            onChange={(e) => { this.handlechange("from", e) }}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                            size="small"
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <Typography variant='subtitle2' className={classes.text_title}>End Date</Typography>
                                        <KeyboardDatePicker
                                            style={{ width: "100%", margin: 0 }}
                                            inputVariant="outlined"
                                            margin="normal"
                                            format="MM/dd/yyyy"
                                            value={end}
                                            onChange={(e) => { this.handlechange("end", e) }}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                            size="small"
                                        />
                                    </MuiPickersUtilsProvider>
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
                                    <Button className={classes.clear}>Clear</Button>
                                    <Button variant="contained" className={classes.submit}
                                        onClick={() => this.handlemove()}>
                                        {"Submit"}</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </Card>
                {/* end */}

                {/*Back Button */}
                <Button variant="contained" className={classes.backbtn}
                //  onClick={() => this.props.history.push("")}
                >
                    <ArrowBackIcon className={classes.backicon} />Back</Button><br /><br />
                {/* end */}
            </Container>
        </div>
    }
}
AuditMenu.contextType = EdittablesContext;

export default withStyles(styles)(withRouter(AuditMenu));