import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    withStyles,
    Toolbar,
    Typography,
    Avatar,
    AppBar,
} from '@material-ui/core';
import HeaderMenuLists from "./HeaderMenuItems";
import MenuIcon from '@material-ui/icons/Menu';


// style
const styles = theme => ({
    root: {
        flexGrow: 1,
        width: "100%",
        background: theme.palette.background.paper,
        opacity: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        height: "32px",
        width: "100px",
        [theme.breakpoints.only('xs')]: {
            marginRight: 0,
        }
    },
    title: {
        flexGrow: 1,
        textAlign: "center",
        color: theme.palette.secondary.main,
        fontWeight: "bold",
        fontSize: 18,
        [theme.breakpoints.only('xs')]: {
            textAlign: "left",
            fontSize: 16,
            display: "none"
        }
    },
    square: {
        borderRadius: 8,
        margin: "0px 4px",
        width: "32px",
        height: "32px",
        float: "right"
    },
    appbar: {
        background: theme.palette.background.paper,
        boxShadow: "none",
        color: "rgba(0, 0, 0, 0.87)",
        borderBottom: "1px solid #f5f5f5"
    },

    menuicon: {
        color: theme.palette.primary.main,
        fontSize: 26,
        marginRight: 8,
        display: "none",
        cursor: "pointer",
        [theme.breakpoints.down('sm')]: {
            display: "block",
        }
    },


})
// end

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            drawer: false
        }
    }
    // end

    // handle Profile MenuOpen lists funcy
    handleProfileMenuOpen = () => {
        const state = this.state;
        this.setState({
            ...state,
            open: !state.open
        })
    }
    // end

    // handle Drawer funcy
    handledraer = () => {
        const state = this.state;
        this.setState({
            ...state,
            drawer: !state.drawer
        })
    }
    // end

    render() {

        const {
            drawer
        } = this.state;
        const {
            classes
        } = this.props;

        return <div className={classes.root}>

            {/* AppBar Component in Top navar */}
            <AppBar position="static" className={classes.appbar}>
                <Toolbar>
                    <MenuIcon className={classes.menuicon} onClick={() => this.handledraer()} />
                    <div className={classes.menuButton}>
                        <img
                            alt="img"
                            width="100%"
                            height="100%"
                            src="assets/logo.svg"
                        />
                    </div>
                    <Typography variant="h6" className={classes.title}>
                        User Management Portal </Typography>
                    <span style={{ margin: "4px 0px", textAlign: "right" }}>
                        <Avatar
                            variant="square"
                            src="https://static.toiimg.com/thumb/msid-68386125,width-800,height-600,resizemode-75,imgsize-106319,pt-32,y_pad-40/68386125.jpg"
                            className={classes.square}
                        />
                        {/* <div style={{ color: "#728691", fontSize: 11, fontWeight: 500 }}>Parntner Logo</div> */}
                        <div style={{ color: "#728691", fontSize: 13, fontWeight: 600, float: "right", width: "100%" }}>Last Login: 18 Feb 2020 15:22 IST</div>
                    </span>
                    {/* <Button className={classes.btn} onClick={() => this.handleProfileMenuOpen()}>
                        My&nbsp;Account <ExpandMoreIcon className={classes.iconcolor} />
                        <Menu
                            keepMounted
                            anchorOrigin={{ vertical: "top", horizontal: "right" }}
                            open={open}
                            onClose={() => this.handleProfileMenuOpen()}
                            className={classes.menus}
                        >
                            <MenuItem onClick={() => {
                                this.handleProfileMenuOpen()
                                this.props.history.push("/home")
                            }}><PersonOutlineOutlinedIcon className={classes.icons} /> Profile Details</MenuItem>
                            <MenuItem onClick={() => {
                                this.handleProfileMenuOpen()
                                this.props.history.push("/change-password")
                            }}><LockOutlinedIcon className={classes.icons} /> Change Password</MenuItem>
                            <MenuItem onClick={() => {
                                this.handleProfileMenuOpen()
                                this.props.history.push("/")
                            }}><ExitToAppOutlinedIcon className={classes.icons} /> Log Out</MenuItem>
                        </Menu>
                    </Button> */}
                </Toolbar>
            </AppBar>
            {/* end */}

            {/* AppBar Component in second level Top navar menu lists*/}
            <HeaderMenuLists drawer={drawer} handledraer={this.handledraer} />
            {/* end */}

        </div>
    }
}

export default withStyles(styles)(withRouter(Header));