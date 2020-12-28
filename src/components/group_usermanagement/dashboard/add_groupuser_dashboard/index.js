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
    Breadcrumbs
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import MaterialTable from 'material-table';
import { EdittablesContext } from '../../../../contexts/index';

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
        // color: "#012834"
    },
    card: {
        background: theme.palette.background.paper,
        boxShadow: "0px 5px 10px #00000014",
        borderRadius: 16,
        opacity: 1,
        margin: "20px 0px",
        padding: 24,
        "& .MuiPaper-elevation2": {
            boxShadow: "none",
            // border: "1px solid #c9caca30"
        },
        "& .MuiInput-root": {
            // border: "1px solid #c9caca59",
            borderRadius: 6,
            padding: 4
        },
        "& .MuiInput-underline:before,.MuiInput-underline:hover:not(.Mui-disabled):before,.MuiInput-underline:after": {
            borderBottom: "unset"
        },
        "& .MTableToolbar-root-50": {
            marginBottom: 6,
            display: "none",
        }
    },
    card_title: {
        borderTop: `2px solid ${theme.palette.mainbackground.default}`,
        borderRight: `2px solid ${theme.palette.mainbackground.default}`,
        borderLeft: `2px solid ${theme.palette.mainbackground.default}`,
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
        padding: "30px 0px 0px",
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
        marginRight: 12,
        padding: "6px 20px"
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
    }
})
// end

class Addgroupuserdashboard extends React.Component {
    // state
    constructor(props) {
        super(props);
        this.state = {
            from: new Date(),
            to: new Date(),
            data: [{
                sno: "1",
                institution: "Bank | 34890",
                makerid: "LG123456",
                menu: "User Management",
                submenu: "Add User",
                createddate: "24-12-2020",
                approvalsatus: "Pending Approval",
                remarks: "Invalid Information",
            }, {
                sno: "2",
                institution: "Bank | 34332",
                makerid: "LG123456",
                menu: "User Management",
                submenu: "Add User",
                createddate: "24-12-2020",
                approvalsatus: "Approval",
                remarks: "",
            },
            {
                sno: "3",
                institution: "Bank | 34332",
                makerid: "LG123456",
                menu: "User Management",
                submenu: "Add User",
                createddate: "24-12-2020",
                approvalsatus: "Approval",
                remarks: "",
            }, {
                sno: "4",
                institution: "Bank | 34890",
                makerid: "LG123456",
                menu: "User Management",
                submenu: "Add User",
                createddate: "24-12-2020",
                approvalsatus: "Pending Approval",
                remarks: "Invalid Information",
            }, {
                sno: "5",
                institution: "Bank | 34332",
                makerid: "LG123456",
                menu: "User Management",
                submenu: "Add User",
                createddate: "24-12-2020",
                approvalsatus: "Approval",
                remarks: "",
            },
            {
                sno: "6",
                institution: "Bank | 34332",
                makerid: "LG123456",
                menu: "User Management",
                submenu: "Add User",
                createddate: "24-12-2020",
                approvalsatus: "Approval",
                remarks: "",
            }],
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
        // const state = this.state;
        // this.setState({ ...state, submit: true, open: true })
        // setTimeout(() => {
        //     this.setState({ submit: false });
        //     this.props.history.push("/modify-usermanagement-table")
        // }, 3000);
    }
    // end
    // handle edit funcy
    handleedit = (val) => {
        let data = {
            name: true,
            data: val
        }
        this.context.setData({ ...EdittablesContext, data: data })
        this.props.history.push("/add-group-dashboard-edit")
    }
    // end
    render() {

        const {
            classes
        } = this.props;

        const {
            from, to, data
        } = this.state;

        return <div className={classes.root}>
            <Container>

                {/* Breadcrumbs Component */}
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
                    <Typography color="textPrimary" className={classes.title}>
                        User Group Management Dashboard</Typography>
                </Breadcrumbs>
                {/* end */}

                {/* Card Component in add form in modify user*/}
                <Card className={classes.card} variant="outlined">
                    <CardContent className={classes.card_title}>Filter</CardContent>

                    <Container style={{ border: "2px solid #F4F5F8" }}>
                        <div className={classes.body}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Institution Name</Typography>
                                    <Autocomplete
                                        fullWidth={true}
                                        size="small"
                                        // value={area}
                                        options={[
                                            { value: "Bank | 34890" },
                                            { value: "Bank | 34891" },
                                        ]}
                                        getOptionLabel={(option) => option.value}
                                        // onChange={(e, value) => {
                                        //     this.handleChange("area", value);
                                        // }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                variant="outlined"
                                                placeholder="Institution Name"
                                            />
                                        )}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={3}>
                                    <Typography variant='subtitle2' className={classes.text_title}>Status</Typography>
                                    <Autocomplete
                                        fullWidth={true}
                                        size="small"
                                        // value={area}
                                        options={[
                                            { value: "All" },
                                            { value: "All" },
                                        ]}
                                        getOptionLabel={(option) => option.value}
                                        // onChange={(e, value) => {
                                        //     this.handleChange("area", value);
                                        // }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                variant="outlined"
                                                placeholder="Status"
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
                                        <Typography variant='subtitle2' className={classes.text_title}>To Date</Typography>
                                        <KeyboardDatePicker
                                            style={{ width: "100%", margin: 0 }}
                                            inputVariant="outlined"
                                            margin="normal"
                                            format="MM/dd/yyyy"
                                            value={to}
                                            onChange={(e) => { this.handlechange("to", e) }}
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
                                        onClick={() => this.handlesubmit()}>AppLY</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>

                    {/* table Component */}<br />
                    <MaterialTable
                        className={classes.table}
                        title={false}
                        options={{
                            search: false,
                            sorting: true,
                            pageSize: 5,
                            pageSizeOptions: [5, 10, 50, 100, 200],
                            actionsColumnIndex: -1,
                            rowStyle: rowData => ({
                                backgroundColor: rowData.tableData.id % 2 === 0 && '#F8F8FA'
                            })
                        }}
                        columns={[
                            {
                                field: "sno",
                                title: "S No.",
                            },
                            {
                                field: "institution",
                                title: "Institution",
                            },
                            {
                                field: "makerid",
                                title: "Maker Id",
                            }, {
                                field: "menu",
                                title: "Menu",
                            },
                            {
                                field: "submenu",
                                title: "Sub Menu",
                            },
                            {
                                field: "createddate",
                                title: "Created Date",
                            },
                            {
                                field: "approvalsatus",
                                title: "Approval Satus",
                            },
                            {
                                field: "remarks",
                                title: "Remarks",
                            }
                        ]}
                        data={data}
                        actions={[
                            {
                                icon: 'edit',
                                tooltip: 'Edit',
                                onClick: (event, rowData) => {
                                    this.handleedit(rowData)
                                }
                            }
                        ]}
                    />
                    {/* end */}
                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="center"
                        className={classes.btns}
                    >
                        <Grid item>
                            <Button className={classes.clear}>Add User Group</Button>
                        </Grid></Grid>
                </Card>
                {/* end */}
            </Container>
        </div>
    }
}
Addgroupuserdashboard.contextType = EdittablesContext;

export default withStyles(styles)(withRouter(Addgroupuserdashboard));