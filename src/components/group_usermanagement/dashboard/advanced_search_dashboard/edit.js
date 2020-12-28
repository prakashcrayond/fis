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
    Breadcrumbs,
    Divider
} from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';
// import InputBase from '@material-ui/core/InputBase';
import { EdittablesContext } from '../../../../contexts/index';
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
    }, dividers: {
        margin: "30px 6px 6px",
        width: "100%"
    }, arr: {
        marginTop: -8,
        right: 10,
        position: "absolute"
    },
    title: {
        fontSize: 16,
        fontWeight: 600,
        [theme.breakpoints.down("xs")]: {
            fontSize: 14,
        },
        // color: theme.palette.secondary.main
    }, d_iconss: {
        marginBottom: 4,
        flexGrow: 1,
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
        marginRight: 12,
        [theme.breakpoints.down("xs")]: {
            marginTop: 14,
        },
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
        [theme.breakpoints.down("xs")]: {
            marginTop: 14,
        },
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
        "& th": {
            [theme.breakpoints.up('md')]: {
                lineHeight: 0
            },
        }
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
        padding: 6,
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
        padding: 6,
        "&:hover": {
            background: theme.palette.mainbackground.default,
        },
        [theme.breakpoints.down('sm')]: {
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
    checkboxui: {
        float: "right",
        "& .MuiTypography-body1": {
            fontSize: 14
        }
    }, card_title: {
        borderBottom: `2px solid ${theme.palette.mainbackground.default}`,
        fontWeight: "bold",
        fontSize: 16,
        [theme.breakpoints.only('xs')]: {
            height: "20px",
        }
    },
    slectall: {
        display: "flex", position: "relative", fontSize: 14,
        fontWeight: 500,
        [theme.breakpoints.only('xs')]: {
            fontSize: 13,
        }
    }
})
// end

class Advancesearchgroupuserdashboardedit extends React.Component {
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
            open: false,
            checkedA: false,
            checkedB: false,
            checkedC: false,
            checkedall: false,
            hidden: true,
            open1: false,
        }
    }
    // end

    //page render of component Did Mount
    componentDidMount() {
        const state = this.state;
        if (this.context?.data) {
            const data = this.context.data.data
            this.setState({
                ...state,
                name: data.name,
                description: data.description,
                usermanagement: ["Add User"],
                edit: true,
            })
        }
    }
    // end

    //input handlechange funy
    handlechange = (n, v) => {
        const state = this.state;
        this.setState({
            ...state,
            [n]: v
        })
    }
    // end

    //handle sumbit funy
    handlesubmit = () => {
        // const state = this.state;
        // this.setState({ ...state, submit: true, open: true })
        // setTimeout(() => {
        //     this.setState({ submit: false });
        //     this.props.history.push("/add-group-user-management-table")
        // }, 3000);
        this.props.history.push("/advancesearch-group-dashboard")
    }
    // end

    //handle close drawer funy
    handleClose = () => {
        const state = this.state;
        this.setState({ ...state, open: !state.open })
    }
    // end

    //handle checkbox validation funys
    update = () => {
        const state = this.state;
        if (state.checkedA &&
            state.checkedB &&
            state.checkedC) {
            this.setState({
                ...state,
                checkedall: true
            })
        } else {
            this.setState({
                ...state,
                checkedall: false
            })
        }
    }
    handlehidden = () => {
        const state = this.state;
        this.setState({
            ...state, hidden: !state.hidden,
        })
    }
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
            hidden,
        } = this.state;

        // choose sub menu datas
        const usermanagements = ["Add User", "Modify User", "Advanced Search"];
        const grpusermanagements = ["Add User Group", "Modify User Group", "Advanced Search"];
        const advance = ["Advanced Search"];
        // end

        return <div className={classes.root}>
            <Container>

                {/* Breadcrumbs component */}
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
                    <Typography className={classes.title}>User group Management Dashboard </Typography>
                    <Typography color="textPrimary" className={classes.title}>View user group</Typography>
                </Breadcrumbs>
                {/* end */}

                {/* card component */}
                <Card className={classes.card} variant="outlined">
                    <Container><br />
                        <Grid container spacing={2} justify="space-between">
                            <Grid item xs={12} sm={9}>
                                <Typography variant='subtitle2' className={classes.text_title}>Remarks</Typography>
                                <TextField size="small"
                                    // value={firstname}
                                    //    onChange={(e) => { this.handlechange("firstname", e.target.value) }}
                                    variant="outlined" placeholder="Type Here" style={{ width: "100%" }} />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Typography variant='subtitle2' className={classes.text_title}>Status</Typography>
                                <TextField size="small"
                                    // value={firstname}
                                    //    onChange={(e) => { this.handlechange("firstname", e.target.value) }}
                                    variant="outlined" placeholder="Type Here" style={{ width: "100%" }} />
                            </Grid>
                        </Grid>
                        <Divider className={classes.dividers} />
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
                            </Grid>
                            {/* <Grid
                                container
                                direction="row"
                                justify="flex-end"
                                alignItems="center"
                            >
                                <div className={classes.search}>
                                    <div className={classes.searchIcon}>
                                        <SearchIcon />
                                    </div>
                                    <InputBase
                                        placeholder="Search…"
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </div>
                            </Grid> */}<br /><br />
                            <Typography variant='subtitle2' className={classes.text_title}> &nbsp;Access</Typography>
                            <TableContainer className={classes.tablecontainer}>
                                <Table className={classes.table}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{ borderRight: "2px solid #EAEAEA" }} align="left"><br /> User Management Portal </TableCell>
                                            <TableCell>
                                                {<span className={classes.slectall}>
                                                    {!hidden && <ExpandLessIcon className={classes.arr} onClick={() => this.handlehidden()} />}
                                                    {hidden && <ExpandMoreIcon className={classes.arr} onClick={() => this.handlehidden()} />}</span>}


                                            </TableCell>
                                        </TableRow>
                                        {hidden && <>   <TableRow>
                                            <TableCell style={{ borderRight: "2px solid #EAEAEA" }} align="left"><br /> Screens </TableCell>
                                            <TableCell align="left"><br />  Sub Screens
                                                </TableCell>
                                        </TableRow></>}
                                    </TableHead>
                                    <TableBody>
                                        {hidden && <>  <TableRow>
                                            <TableCell className={classes.cell} style={{ borderRight: "2px solid #EAEAEA" }} align="left"> User Management </TableCell>
                                            <TableCell className={classes.cell} align="left"> {usermanagements.map(v => {
                                                return <Button onClick={(e) => this.choosebtn("usermanagement", v, 'checkedA', usermanagements?.length)} variant="contained" className={usermanagement?.length > 0 ? usermanagement.includes(v) ? classes.choosebtnactive : classes.choosebtn : classes.choosebtn}>{v}</Button>
                                            })}
                                            </TableCell>
                                        </TableRow>
                                            <TableRow>
                                                <TableCell className={classes.cell} style={{ borderRight: "2px solid #EAEAEA" }} align="left"> User Group Management </TableCell>
                                                <TableCell className={classes.cell} align="left"> {grpusermanagements.map(v => {
                                                    return <Button onClick={() => this.choosebtn("grpusermanagement", v, "checkedB", grpusermanagements?.length)} variant="contained" className={grpusermanagement?.length > 0 ? grpusermanagement.includes(v) ? classes.choosebtnactive : classes.choosebtn : classes.choosebtn}>{v}</Button>
                                                })}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className={classes.cell} style={{ borderRight: "2px solid #EAEAEA" }} align="left"> Audit Menu </TableCell>
                                                <TableCell className={classes.cell} align="left"> {advance.map(v => {
                                                    return <Button onClick={() => this.choosebtn("auditmenu", v, "checkedC", advance?.length)} variant="contained" className={auditmenu?.length > 0 ? auditmenu.includes(v) ? classes.choosebtnactive : classes.choosebtn : classes.choosebtn}>{v}</Button>
                                                })}
                                                </TableCell>
                                            </TableRow></>}
                                    </TableBody>
                                </Table>
                            </TableContainer>


                        </div>
                    </Container>
                </Card>
                {/* end */}

                {/* back button */}
                <Button variant="contained" className={classes.backbtn}
                    onClick={() =>
                        this.props.history.push("/advancesearch-group-dashboard")
                    }
                >
                    <ArrowBackIcon className={classes.backicon} />Back</Button><br /><br />
                {/* end */}
            </Container>
        </div>
    }
}
Advancesearchgroupuserdashboardedit.contextType = EdittablesContext;

export default withStyles(styles)(withRouter(Advancesearchgroupuserdashboardedit));