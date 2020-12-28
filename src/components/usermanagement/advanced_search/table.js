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
        boxShadow: "none",
        borderRadius: 16,
        opacity: 1,
        margin: "20px 0px",
        "& .MuiPaper-elevation2": {
            boxShadow: "none",
            // border: "1px solid #c9caca30"
        },
        "& .MTableToolbar-root-35": {
            borderBottom: "1px solid #c9caca30"
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

class AdvancedUsermanagementTable extends React.Component {
    // state
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                firstname: "Dinesh",
                lastname: "Babu",
                mobilenumber: "123456899",
                officenumber: "234567899",
                email: "example@gmail.com",
                userid: "4025435",
                usertype: "CSR Team",
                usergroup: "Super Admin",
                institution: "Bank",
                financialentry: "102518",
                companyname: "Dave Pvt lmd",
                departmentname: "Quality Control",
                activationdate: "05-07-2020",
                expirationdate: "05-07-2020",
                pincode: "+91",
                status: "Active"
            },
            {
                firstname: "Prakash",
                lastname: "P",
                mobilenumber: "123456899",
                officenumber: "234567899",
                email: "example@gmail.com",
                userid: "4025435",
                usertype: "FIS User",
                usergroup: "Super Admin",
                institution: "Bank",
                financialentry: "102518",
                companyname: "Dave Pvt lmd",
                departmentname: "Quality Control",
                activationdate: "05-07-2020",
                expirationdate: "05-07-2020",
                status: "Active",
                pincode: "+91",
            }],
        }
    }
    // end

    // handle edit funcy
    handleedit = (val) => {
        let data = {
            data: val
        }
        this.context.setData({ ...EdittablesContext, data: data })
        this.props.history.push("/view-usermanagement-advanced")
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
                    <Typography className={classes.title}>User Management </Typography>
                    <Typography className={classes.title}>Advanced search</Typography>
                    <Typography color="textPrimary" className={classes.title}>Search Results</Typography>
                </Breadcrumbs>
                {/* end */}

                {/* Card Component in Search Results*/}
                <Card className={classes.card} variant="outlined">
                    <Container>
                        <div className={classes.body}>
                            <MaterialTable
                                className={classes.table}
                                title="Search Results"
                                options={{
                                    actionsColumnIndex: -1,
                                    rowStyle: rowData => ({
                                        backgroundColor: rowData.tableData.id % 2 === 0 && '#F8F8FA'
                                    })
                                }}
                                columns={[
                                    {
                                        field: "institution",
                                        title: "name",
                                    },
                                    {
                                        field: "financialentry",
                                        title: "Financial Entity",
                                        minWidth: 70,
                                    },
                                    {
                                        field: "userid",
                                        title: "User ID",
                                    },
                                    {
                                        field: "firstname",
                                        title: "First Name",
                                    },
                                    {
                                        field: "lastname",
                                        title: "Last Name",
                                    },
                                    {
                                        field: "usertype",
                                        title: "User Type",
                                    },
                                    {
                                        field: "status",
                                        title: "Status",
                                    },
                                ]}
                                data={data}
                                actions={[
                                    {
                                        icon: 'save',
                                        tooltip: 'View',
                                        onClick: (event, rowData) => {
                                            this.handleedit(rowData)
                                        }
                                    }
                                ]}
                            />
                        </div>
                    </Container>
                </Card>
                {/* end */}

                {/* back Button */}
                <Button variant="contained" className={classes.backbtn}
                    onClick={() => this.props.history.push("/view-usermanagement-advanced")}>
                    <ArrowBackIcon className={classes.backicon} />Back</Button><br /><br />
                {/* end */}

            </Container>
        </div>
    }
}
AdvancedUsermanagementTable.contextType = EdittablesContext;

export default withStyles(styles)(withRouter(AdvancedUsermanagementTable));