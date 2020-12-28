import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    Container,
    Card,
    Typography,
    withStyles,
    Button,
    Breadcrumbs
} from '@material-ui/core';
import MaterialTable from 'material-table';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { EdittablesContext } from '../../../contexts/index';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import axios from "axios";
import config from "../../../config";
import moment from 'moment';

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
        boxShadow: "none",
        borderRadius: 16,
        opacity: 1,
        margin: "20px 0px",
        "& .MuiPaper-elevation2": {
            boxShadow: "none",
            // border: "1px solid #c9caca30"
        },
        "& .MuiToolbar-gutters": {
            borderBottom: "1px solid #c9caca30",
            marginBottom: 6
        },
        "& .MuiInput-root": {
            border: "1px solid #c9caca59",
            borderRadius: 6,
            padding: 4
        },
        "& .MuiInput-underline:before,.MuiInput-underline:hover:not(.Mui-disabled):before,.MuiInput-underline:after": {
            borderBottom: "unset"
        }
    },
    card_title: {
        fontWeight: "bold",
        fontSize: 14,
        [theme.breakpoints.only('xs')]: {
            height: "20px",
        }
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
    },
})
// end

class AddUsermanagementTable extends React.Component {
    // state
    constructor(props) {
        super(props);
        this.state = {
            institutionId: "",
            data: [],
        }
    }
    // end
    componentDidMount() {
        debugger
        const state = this.state;
        axios.get(`${config.api_url}api/v1/users/byinstitution/${window.location.pathname.split("/")[2]}`).then(res => {
            if (res.data) {
                const valData = res?.data
                const data = valData?.map(v => {
                    v.activationDate = moment(v.activationDate).format('MM/DD/YYYY')
                    v.expirationDate = moment(v.expirationDate).format('MM/DD/YYYY')
                    return v
                })
                this.setState({
                    ...state,
                    data,
                })
            }
        }).catch(err => {
            console.log("User management=>add user=> institution", err)
        })
    }
    // handle edit funcy
    handleedit = (val) => {
        this.props.history.push(`/add-usermanagement-form/${val.userId}`)
    }
    // end

    render() {

        const {
            data
        } = this.state;

        const {
            classes
        } = this.props;

        return <div className={classes.root}>
            <Container>

                {/* Breadcrumbs Component */}
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
                    <Typography className={classes.title}>User Management</Typography>
                    <Typography className={classes.title}> Add User</Typography>
                    <Typography color="textPrimary" className={classes.title}>Search Results</Typography>
                </Breadcrumbs>
                {/* end */}

                {/* Card Component */}
                <Card className={classes.card} variant="outlined">
                    <Container>
                        <div className={classes.body}>
                            {/* table Component */}
                            <MaterialTable
                                className={classes.table}
                                title="Search Results"
                                options={{
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
                                        field: "firstName",
                                        title: "First Name",
                                    },
                                    {
                                        field: "lastName",
                                        title: "Last Name",
                                    },
                                    {
                                        field: "phoneNumber",
                                        title: "Mobile Number",
                                    },
                                    {
                                        field: "officeNumber",
                                        title: "Office Number",
                                    },
                                    {
                                        field: "email",
                                        title: "Email ID",
                                    },
                                    {
                                        field: "userId",
                                        title: "User ID",
                                    },
                                    {
                                        field: "userType",
                                        title: "User Type",
                                    },
                                    {
                                        field: "userGroup",
                                        title: "User Group",
                                    },
                                    {
                                        field: "institution",
                                        title: "Institution",
                                    },
                                    {
                                        field: "financialEntityCode",
                                        title: "Financial Entry",
                                    },
                                    {
                                        field: "companyName",
                                        title: "Company Name",
                                    },
                                    {
                                        field: "departmentName",
                                        title: "Department Name",
                                    },
                                    {
                                        field: "activationDate",
                                        title: "Activation Date",
                                    },
                                    {
                                        field: "expirationDate",
                                        title: "Expiration Date",
                                    },
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
                        </div>
                    </Container>
                </Card>
                {/* end */}

                {/* back Button */}
                <Button variant="contained" className={classes.backbtn} onClick={() => this.props.history.push("/add-usermanagement-form")}>
                    <ArrowBackIcon className={classes.backicon} />Back</Button><br /><br />
                {/* end */}

            </Container>
        </div>
    }
}
AddUsermanagementTable.contextType = EdittablesContext;

export default withStyles(styles)(withRouter(AddUsermanagementTable));