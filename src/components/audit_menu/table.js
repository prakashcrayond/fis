import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles,
    Container,
    Card,
    Button,
    Grid,
    MenuItem,
    Breadcrumbs,
    Divider
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MaterialTable from 'material-table';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import DownloadExcel from "../../components/download_excel/index";
// import jsPDF from 'jspdf';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const downloadpath = ["institution", "financial", "username", "date", "time", "activity"]
const Downloadeader = ["Institution", "Financial Entity", "User Name", "Date", "Time", "Activity"]

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
        boxShadow: "none",
        border: "none",
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        opacity: 1,
        // margin: "20px 0px",
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
        marginTop: 20,
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
    rootss: {
        flexGrow: 1,
        // backgroundColor: theme.palette.background.paper,
        "& .MuiTypography-root": {
            padding: "0px !important"
        }
    },
    appbartab: {
        background: theme.palette.mainbackground.default,
        color: theme.palette.secondary.main,
        boxShadow: "none",
        "& .MuiTab-wrapper": {
            textTransform: "capitalize"
        },
        "& span": {
            background: "unset"
        }
    },
    tabsactive: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: " 0px 5px 10px #00000014",
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
    },
    tabsdis: {
        backgroundColor: theme.palette.mainbackground.default,
        border: "0.5px solid #0000000f",
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        boxShadow: " 0px 5px 10px #00000014",
        opacity: 0.7,
    },
    body: {
        "& td": {
            height: "54px"
        }
    },
    menus: {
        backgroundColor: theme.palette.mainbackground.default,
        boxShadow: "0px 3px 6px #00000029",
        borderRadius: 8,
        marginTop: 6,
        position: "absolute",
        width: "100px",
        zIndex: 1
    },
    export: {
        backgroundColor: theme.palette.background.paper,
        border: "1px solid #4BCD3E",
        borderRadius: 30,
        opacity: 0.9,
        display: "flex",
        padding: "4px 16px",
        fontSize: 15,
        cursor: "pointer",
        [theme.breakpoints.only('xs')]: {
            marginTop: 20
        }
    }
});
// end

class AuditMenuTable extends React.Component {
    // state
    state = {
        value: 0,
        open: false,
        isDownload: false,
        title: "User Activity Log",
        data: [{
            institution: "Bank",
            financial: "102518",
            username: "Dinesh",
            date: "12-10-2020",
            time: "12.30 PM",
            activity: "Xyz",
        },
        {
            institution: "Banks",
            financial: "1025138",
            username: "Dinesh P",
            date: "12-11-2020",
            time: "11.30 PM",
            activity: "Xyz",
        }, {
            institution: "Bank",
            financial: "102518",
            username: "Dinesh",
            date: "12-10-2020",
            time: "12.30 PM",
            activity: "Xyz",
        },
        {
            institution: "Banks",
            financial: "1025138",
            username: "Dinesh P",
            date: "12-11-2020",
            time: "11.30 PM",
            activity: "Xyz",
        }, {
            institution: "Bank",
            financial: "102518",
            username: "Dinesh",
            date: "12-10-2020",
            time: "12.30 PM",
            activity: "Xyz",
        },
        {
            institution: "Banks",
            financial: "1025138",
            username: "Dinesh P",
            date: "12-11-2020",
            time: "11.30 PM",
            activity: "Xyz",
        }, {
            institution: "Bank",
            financial: "102518",
            username: "Dinesh",
            date: "12-10-2020",
            time: "12.30 PM",
            activity: "Xyz",
        },
        {
            institution: "Banks",
            financial: "1025138",
            username: "Dinesh P",
            date: "12-11-2020",
            time: "11.30 PM",
            activity: "Xyz",
        }, {
            institution: "Bank",
            financial: "102518",
            username: "Dinesh",
            date: "12-10-2020",
            time: "12.30 PM",
            activity: "Xyz",
        },
        {
            institution: "Banks",
            financial: "1025138",
            username: "Dinesh P",
            date: "12-11-2020",
            time: "11.30 PM",
            activity: "Xyz",
        }]
    };
    // end

    // input on changes
    handleChange = (event, value) => {
        this.setState({ value });
    };
    // end

    // handle open export
    handleProfileMenuOpen = () => {
        const state = this.state;
        this.setState({
            ...state,
            open: !state.open,
        })
    }
    // end

    // download csv file funcy
    downloaddocc = () => {
        const state = this.state;
        this.setState({ ...state, isDownload: true }, () => {
            this.setState({ ...state, open: !state.open, isDownload: false })
        })
    }
    // end

    // download pdf file funcy
    downloadpdf = () => {
        // const state = this.state;
        // const pdf = new jsPDF();
        // if (state.data && downloadpath) {
        //     pdf.table(1, 1, state.data, downloadpath, { autoSize: true })
        //     pdf.save("Audit.pdf")
        //     this.setState({
        //         ...state,
        //         open: !state.open,
        //     })
        // }
    }
    // end

    render() {
        const { classes } = this.props;
        const { data, open, isDownload, title } = this.state;
        return (
            <div className={classes.root}>

                <Container>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid item>
                            {/* Breadcrumbs */}
                            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
                                <Typography className={classes.title}>Audits</Typography>
                                <Typography color="textPrimary" className={classes.title}>Search Results</Typography>
                            </Breadcrumbs>
                            {/* end */}
                        </Grid>

                        <Grid item>
                            {/* export button and component */}
                            <Typography variant="subtitle1" className={classes.export}
                                onClick={() => this.handleProfileMenuOpen()} >Export <PlayForWorkIcon /></Typography>
                            {open && <div className={classes.menus} >
                                <MenuItem
                                // onClick={() => this.downloaddocc()}
                                >CSV</MenuItem>
                                <Divider />
                                <MenuItem
                                // onClick={() => this.downloadpdf()}
                                >PDF</MenuItem>
                            </div>}
                            {/* end */}
                        </Grid>

                    </Grid><br />

                    {/* DownloadExcel component*/}
                    {
                        (isDownload && open) &&
                        <DownloadExcel
                            filename={isDownload && "Audit"}
                            headers={isDownload && Downloadeader}
                            path={isDownload && downloadpath}
                            data={isDownload && data}
                        />
                    }
                    {/* end */}

                    <div className={classes.rootss}>

                        {/* card component */}
                        <Card className={classes.card} variant="outlined">
                            <Container>
                                <div className={classes.body}>
                                    {/* Table component */}
                                    <MaterialTable
                                        className={classes.table}
                                        title={`Search Results - ${title}`}
                                        options={{
                                            search: false,
                                            rowStyle: rowData => ({
                                                backgroundColor: rowData.tableData.id % 2 === 0 && '#F8F8FA'
                                            })
                                        }}
                                        columns={[
                                            {
                                                field: "institution",
                                                title: "Institution",
                                            },
                                            {
                                                field: "financial",
                                                title: "Financial Entity",
                                            },
                                            {
                                                field: "username",
                                                title: "User Name",
                                            },
                                            {
                                                field: "date",
                                                title: "Date",
                                            },
                                            {
                                                field: "time",
                                                title: "Time",
                                            },
                                            {
                                                field: "activity",
                                                title: "Activity",
                                            }
                                        ]}
                                        data={data}
                                    />
                                    {/* end */}
                                </div>
                            </Container>
                        </Card>
                        {/* end */}

                    </div>
                    {/*Back Button */}
                    <Button variant="contained" className={classes.backbtn}
                    //  onClick={() => this.props.history.push("")}
                    >
                        <ArrowBackIcon className={classes.backicon} />Back</Button><br /><br />
                    {/* end */}
                </Container>
            </div>
        );
    }
}

AuditMenuTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AuditMenuTable);