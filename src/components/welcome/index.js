import React from "react";
import {
    Grid,
    Container,
    Typography
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

// style
const styles = (theme) => ({
    root: {
        width: "100%",
        background: theme.palette.mainbackground.default,
        padding: "60px 0px",
        [theme.breakpoints.down("xs")]: {
            padding: "70px 0px",
        },
    },
    rootCard: {
        // backgroundImage: `url("../assets/Mask Group 2.png")`,
        backgroundImage: `url("/assets/business-woman-hand-typing-laptop-keyboard-with-financial-cha.png")`,
        backgroundPosition: 'center',
        // backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: 16,
        boxShadow: "0px 35px 50px #70707028 !important",
        padding: "86px 40px",
        // margin: "40px",
        [theme.breakpoints.down("xs")]: {
            margin: "0px",
            padding: "60px 40px",
        },
    },
    illustrator: {
        textAlign: "center",
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 5px 10px #00000029",
        borderRadius: "16px",
        padding: 60,
        [theme.breakpoints.down("xs")]: {
            padding: "30px 20px",
        },
    },
    illustratorGrid: {
        // borderRight: `1px solid ${theme.palette.mainbackground.default}`,
    },
    mainContent: {
        display: "flex",
        alignItems: "center",
    },
    Welcome: {
        color: theme.palette.primary.main,
        fontSize: 22,
        fontWeight: 600
    },
    username: {
        opacity: 0.9,
        fontWeight: 600
    },
    userid: {
        fontSize: 16,
        opacity: 0.8,
        marginTop: 8
    },
    img: {
        width: "100%",
        height: "100%",
        [theme.breakpoints.down("xs")]: {
            marginTop: 40,
        },
    }
})
// end

class Welcome extends React.Component {
    // state
    constructor(props) {
        super(props);
        this.state = {};
    }
    // end

    render() {

        const { classes } = this.props;

        return (
            <Grid container className={classes.root}>
                <Container maxWidth="lg" style={{ margin: "auto" }}>
                    {/* Card Component in welcome page*/}
                    <Card className={classes.rootCard}>
                        <Grid container item xs={12} className={classes.mainContent}>
                            <Grid item xs={12} sm={6} className={classes.illustratorGrid}>
                                <Grid item xs={12} className={classes.illustrator}>

                                    <Typography variant="h5" className={classes.Welcome}
                                    >Welcome</Typography>

                                    <Typography variant="h4" className={classes.username}
                                    >Vijay kumar</Typography>

                                    <Typography variant="h6" className={classes.userid}
                                    >Last Login: 18 Feb 2020 15:22 IST</Typography>
                                </Grid>
                            </Grid>
                            {/* <Grid
                                item
                                xs={12}
                                sm={12}
                                md={6}
                                lg={6}
                                xl={6}
                                className={classes.formGrid}
                            >
                                <img
                                    className={classes.img}
                                    src="/assets/FIS-Illustration-01.svg"
                                    alt="fis logo"
                                />
                            </Grid> */}
                        </Grid>
                    </Card>
                    {/* end */}
                </Container>
            </Grid>
        );
    }
}

export default withStyles(styles)(withRouter(Welcome));