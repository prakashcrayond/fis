import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    Container,
    Card,
    Typography,
    withStyles,
    Button,
    Breadcrumbs,
} from '@material-ui/core';
import MaterialTable from 'material-table';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { EdittablesContext } from '../../../contexts/index';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// style
const styles = theme => ({
    root: {
        width: "100%",
        background: "#F4F5F8 0% 0% no-repeat padding-box",
        opacity: 1,
        padding: "30px 0px"
    },
    title: {
        fontSize: 16,
        fontWeight: 600,
    },
    card: {
        background: "#FFFFFF 0% 0% no-repeat padding-box",
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
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 5px 10px #00000014",
        border: "2px solid #EAEAEA",
        borderRadius: 8,
        fontSize: 14,
        textTransform: "capitalize",
        float: "right",
        opacity: 0.9,
        "&:hover": {
            background: "#FFFFFF 0% 0% no-repeat padding-box",
        }
    },
    backicon: {
        fontSize: 18,
        marginRight: 8,
    },
    table: {
        background: "red !important",
        "& .MuiTableCell-root": {
            background: "red",
            padding: "6px !important"
        }
    }
})
// end

class ModifyGroupUsermanagementTable extends React.Component {
    // state
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                name: "DRS Tech",
                description: "This overview of the company description section of a small business plan...",
                usermanagement: "User Management",
            },
            {
                name: "FIS",
                description: "This overview of the company description section",
                usermanagement: "User Management",
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
        this.props.history.push("/modify-group-user-management-form")
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
                {/* Breadcrumbs component */}
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
                    <Typography className={classes.title}>User Group Management</Typography>
                    <Typography className={classes.title}>Modify User Group</Typography>
                    <Typography color="textPrimary" className={classes.title}>Search Results</Typography>
                </Breadcrumbs>
                {/* end */}

                {/* card component */}
                <Card className={classes.card} variant="outlined">
                    <Container>
                        <div className={classes.body}>
                            <MaterialTable
                                className={classes.table}
                                title="Search Results"
                                options={{
                                    search: false,
                                    actionsColumnIndex: -1,
                                    rowStyle: rowData => ({
                                        backgroundColor: rowData.tableData.id % 2 === 0 && '#F8F8FA'
                                    })
                                }}
                                columns={[
                                    {
                                        field: "name",
                                        title: "Group Name",
                                    },
                                    {
                                        field: "description",
                                        title: "Description",
                                        minWidth: 70,
                                    },
                                    {
                                        field: "usermanagement",
                                        title: "Selected Screen",
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
                        </div>
                    </Container>
                </Card>
                {/* end */}

                {/* back Button */}
                <Button variant="contained" className={classes.backbtn} onClick={() => this.props.history.push("/modify-group-user-management-form")}>
                    <ArrowBackIcon className={classes.backicon} />Back</Button><br /><br />
                {/* end */}
            </Container>
        </div>
    }
}
ModifyGroupUsermanagementTable.contextType = EdittablesContext;

export default withStyles(styles)(withRouter(ModifyGroupUsermanagementTable));