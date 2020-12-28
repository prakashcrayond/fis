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
    TableContainer,
    TableHead,
    TableRow,
    Table,
    TableCell,
    TableBody,
    CardContent,
    Breadcrumbs,
} from '@material-ui/core';
import { EdittablesContext } from '../../../contexts/index';
import DialogComponent from "../../dialog/index";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
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
        margin: "30px 0px"
    },
    clear: {
        boxShadow: "0px 3px 6px #0049903D",
        border: "2px solid #4BCD3E",
        opacity: 0.9,
        fontSize: 12,
        borderRadius: 8,
        fontWeight: 600,
        marginRight: 12
    }, card_title: {
        borderBottom: `2px solid ${theme.palette.mainbackground.default}`,
        fontWeight: "bold",
        fontSize: 16,
        [theme.breakpoints.only('xs')]: {
            height: "20px",
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
    search: {
        position: 'relative',
        width: '100%',
        margin: "40px 0px",
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: "rgba(0, 0, 0, 0.23)",
    },
    inputRoot: {
        color: 'inherit',
        [theme.breakpoints.only('xs')]: {
            width: '100%',
        },
    },
    inputInput: {
        border: "1px solid rgba(0, 0, 0, 0.23)",
        borderRadius: 6,
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    tablecontainer: {
        borderTop: `2px solid ${theme.palette.mainbackground.default}`,
        borderRight: `2px solid ${theme.palette.mainbackground.default}`,
        borderLeft: `2px solid ${theme.palette.mainbackground.default}`,
        borderRadius: 8,
        opacity: 1,
    },
    table: {
        minWidth: "100%",
    },
    cell: {
        borderBottom: `2px solid ${theme.palette.mainbackground.default}`,
        padding: "16px 20px !important"
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
            margin: "auto",
            display: "flex",
            marginBottom: 14,
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
            margin: "auto",
            display: "flex",
            marginBottom: 14,
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
})
// end

class AdvancedGroupUsermanagementForm extends React.Component {
    // state
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            description: null,
            usermanagement: [],
            grpusermanagement: [],
            auditmenu: [],
            edit: null,
            submit: false,
            hidden: true,
            open: false
        }
    }
    // end

    // page render of component did mount
    componentDidMount() {
        const state = this.state;
        if (this.context?.data) {
            const data = this.context.data.data
            this.setState({
                ...state,
                name: data.name,
                description: data.description,
                usermanagement: ["Add User"],
                edit: this.context.data.name,
            })
        }
    }
    // end

    // input handle change funy
    handlechange = (n, v) => {
        const state = this.state;
        this.setState({
            ...state,
            [n]: v
        })
    }
    // end

    // handle submit funy
    handlSubmit = () => {
        const state = this.state;
        this.setState({ ...state, submit: true, open: true })
        setTimeout(() => {
            this.setState({ submit: false });
            this.props.history.push("/advanced-group-user-management-table")
        }, 3000);
    }
    // end

    //handle close drawer funy
    handleClose = () => {
        const state = this.state;
        this.setState({ ...state, open: !state.open })
    }
    // end

    //handle submenu choosebtn funy
    choosebtn = (n, values) => {
        const state = this.state;
        let nCheckbox = this.state[n].slice();
        if (this.isValueExist(nCheckbox, values)) {
            const index = nCheckbox.indexOf(values);
            nCheckbox.splice(index, 1);
        } else {
            nCheckbox.push(values);
        }
        state[n] = nCheckbox;
        this.setState({
            ...state,
        });
    };

    isValueExist(data, event) {
        if (data.length === 0) {
            return false;
        }
        for (let i = 0; i <= data.length; i++) {
            if (event === data[i]) {
                return true;
            }
        }
        return false;
    }
    // end
    handlehidden = () => {
        const state = this.state;
        this.setState({
            ...state, hidden: !state.hidden,
        })
    }
    render() {

        const {
            classes
        } = this.props;

        const {
            name,
            description,
            usermanagement,
            grpusermanagement,
            auditmenu,
            submit,
            open,
            hidden
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
                                onClick={() => this.props.history.push("/advanced-group-user-management-table")}
                            >
                                Ok
                        </Button>
                        </div>
                    }
                />}
                {/* end */}

                {/* Breadcrumbs component */}
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
                    <Typography className={classes.title}>User Group Management</Typography>
                    <Typography className={classes.title}>Advanced User Group</Typography>
                    <Typography className={classes.title}>Search Results</Typography>
                    <Typography color="textPrimary" className={classes.title}>View</Typography>
                </Breadcrumbs>
                {/* end */}

                {/* card component */}
                <Card className={classes.card} variant="outlined">
                    <CardContent className={classes.card_title}>View User Group</CardContent>
                    <Container>
                        <div className={classes.body}>
                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>User Group Name</Typography>
                                    <TextField size="small"
                                        value={name}
                                        onChange={(e) => { this.handlechange("name", e.target.value) }}
                                        variant="outlined" placeholder="First Name" style={{ width: "100%" }} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Description</Typography>
                                    <TextField size="small" value={description}
                                        onChange={(e) => { this.handlechange("description", e.target.value) }}
                                        variant="outlined" placeholder="Description" style={{ width: "100%" }} />
                                </Grid>
                            </Grid><br /><br /><br />

                            <Typography variant='subtitle2' className={classes.text_title}> &nbsp;Access</Typography>
                            <TableContainer className={classes.tablecontainer}>
                                <Table className={classes.table}>

                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{ borderRight: "2px solid #EAEAEA" }} align="left"> User Management Portal </TableCell>
                                            <TableCell align="right"> {!hidden && <ExpandLessIcon className={classes.arr} onClick={() => this.handlehidden()} />}
                                                {hidden && <ExpandMoreIcon className={classes.arr} onClick={() => this.handlehidden()} />} </TableCell>
                                        </TableRow>
                                        {hidden && <TableRow>
                                            <TableCell style={{ borderRight: "2px solid #EAEAEA" }} align="left"> Screens </TableCell>
                                            <TableCell align="left"> Sub Screens </TableCell>
                                        </TableRow>}
                                    </TableHead>
                                    {hidden && <TableBody>
                                        <TableRow>
                                            <TableCell className={classes.cell} style={{ borderRight: "2px solid #EAEAEA" }} align="left"> User Management </TableCell>
                                            <TableCell className={classes.cell} align="left"> {["Add User", "Modify User", "Advanced Search"].map(v => {
                                                return <Button onClick={() => this.choosebtn("usermanagement", v)} variant="contained" className={usermanagement?.length > 0 ? usermanagement.includes(v) ? classes.choosebtnactive : classes.choosebtn : classes.choosebtn}>{v}</Button>
                                            })} </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className={classes.cell} style={{ borderRight: "2px solid #EAEAEA" }} align="left"> User Group Management </TableCell>
                                            <TableCell className={classes.cell} align="left"> {["Add User Group", "Modify User Group", "Advanced Search"].map(v => {
                                                return <Button onClick={() => this.choosebtn("grpusermanagement", v)} variant="contained" className={grpusermanagement?.length > 0 ? grpusermanagement.includes(v) ? classes.choosebtnactive : classes.choosebtn : classes.choosebtn}>{v}</Button>
                                            })} </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className={classes.cell} style={{ borderRight: "2px solid #EAEAEA" }} align="left"> Audit Menu </TableCell>
                                            <TableCell className={classes.cell} align="left"> {["Advanced Search"].map(v => {
                                                return <Button onClick={() => this.choosebtn("auditmenu", v)} variant="contained" className={auditmenu?.length > 0 ? auditmenu.includes(v) ? classes.choosebtnactive : classes.choosebtn : classes.choosebtn}>{v}</Button>
                                            })} </TableCell>
                                        </TableRow>
                                    </TableBody>}
                                </Table>
                            </TableContainer>

                            {/* <Grid
                                container
                                direction="row"
                                justify="flex-end"
                                alignItems="center"
                                className={classes.btns}
                            >
                                <Grid item>
                                    <Button className={classes.clear}>Clear</Button>
                                    <Button variant="contained" className={classes.submit}
                                        onClick={() => this.handlSubmit()}>
                                        {!edit ? "Submit" : "Update"}</Button>
                                </Grid>
                            </Grid> */}
                        </div>
                    </Container>
                </Card>
                {/* end */}

                {/* back button */}
                <Button variant="contained" className={classes.backbtn}
                    onClick={() => this.props.history.push("/advanced-group-user-management-table")}
                >
                    <ArrowBackIcon className={classes.backicon} />Back</Button><br /><br />
                {/* end */}
            </Container>
        </div>
    }
}
AdvancedGroupUsermanagementForm.contextType = EdittablesContext;

export default withStyles(styles)(withRouter(AdvancedGroupUsermanagementForm));