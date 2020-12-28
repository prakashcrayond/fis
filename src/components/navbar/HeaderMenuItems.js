import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    withStyles,
    Toolbar,
    Typography,
    MenuItem,
    AppBar,
    ListItem,
    Hidden,
    Drawer,
    List,
    ListItemText,
    Menu,
    Button,

} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
// import axios from "axios";
// import config from "../../config";

// mobile account of data
const myacc = [{
    name: "My Account",
    icon: "assets/icons8-home.svg",
    childrens: [
        {
            name: "Profile Details",
            url: "/home",
        }, {
            name: "Change Password",
            url: "/change-password",
        },
        {
            name: "Log Out",
            url: "/",
        }
    ]
}];
// end

// menu list of datas
const menulists = [
    {
        name: "Home",
        icon: "assets/icons8-home.svg",
        url: "/welcome"
    },
    {
        name: "Checker Dashboard",
        icon: "assets/comment.svg",
        url: "checker-dashboard",
        childrens: [
            {
                name: "User management",
                url: "/checker-dashboard-user"
            },
            {
                name: "User Group management",
                url: "/checker-dashboard-user-grp"
            }
        ]
    },
    {
        name: "User Management",
        icon: "assets/icons8-administrator-male.svg",
        url: "usermanagement",
        childrens: [
            {
                name: "Add User",
                url: "/add-usermanagement-form"
            },
            {
                name: "Modify User",
                url: "/modify-usermanagement-form"
            },
            {
                name: "Advanced Search",
                url: "/advanced-usermanagement-form"
            }
        ]
    },
    {
        name: "User Group Management",
        icon: "assets/icons8-user-account.svg",
        url: "group",
        childrens: [
            {
                name: "Add Group User",
                url: "/add-group-user-management-form"
            },
            {
                name: "Modify User",
                url: "/modify-group-user-management-search",
            },
            {
                name: "Advanced Search",
                url: "/usergroup-advanced-search"
            }
        ]
    },
    {
        name: "Audit Menu",
        icon: "assets/FIS_Icon-02.svg",
        url: "/audit-menu"
    }
];
// end

// style
const styles = theme => ({
    root: {
        width: "100%",
    }, btnss: {
        borderLeft: "1px solid #fff",
        borderRadius: "unset",
        color: "#fff",
        textTransform: "capitalize",
        display: "block",
        [theme.breakpoints.down('sm')]: {
            display: "none",
        }, [theme.breakpoints.only('xs')]: {
            padding: "6px 16px",
        }
    },
    iconcolor: {
        color: theme.palette.primary.main,
        marginBottom: -8
    }, menus: {
        "& .MuiMenu-paper": {
            top: "130px !important",
            borderRadius: 8,
            "& li": {
                borderBottom: "1px solid #eaebee",
                fontSize: 14,
                fontWeight: 500,
                padding: "10px",
                background: theme.palette.mainbackground.default
            }
        },
        "& .MuiList-padding": {
            padding: 0,
        },
    }, icons: {
        color: theme.palette.text.disabled,
        fontSize: 22,
        marginRight: 4
    },
    appbar: {
        background: theme.palette.secondary.dark,
        opacity: 1,
        boxShadow: "0px 5px 10px #00000014",
    },
    btn: {
        textTransform: "capitalize",
        [theme.breakpoints.only('xs')]: {
            padding: "6px 16px",
            fontSize: 12
        },
        [theme.breakpoints.between('sm', 'md')]: {
            padding: 8,
        }
    },
    icon: {
        height: 16,
        width: 16,
        marginRight: 4,
        marginTop: -4,
    },
    mbl_icon: {
        marginRight: 12,
        height: 18,
        width: 18,
    },
    menulist: {
        position: "absolute",
        zIndex: 10,
        height: "auto",
        background: theme.palette.background.paper,
        boxShadow: "0px 5px 10px #00000014",
        borderRadius: 4,
        color: theme.palette.secondary.main,
        padding: "2px",
        marginTop: 42
    },
    mbl_menulist: {

    },
    mbls_li: {
        borderBottom: `1px solid ${theme.palette.mainbackground.default}`,
        fontSize: 14,
        fontWeight: 500,
        padding: "14px 36px",
        cursor: "pointer"
    },
    li: {
        borderBottom: `1px solid ${theme.palette.mainbackground.default}`,
        padding: 14,
        fontSize: 14,
        fontWeight: 500,
        cursor: "pointer"
    },
    m_li: {
        fontSize: 14,
        opacity: 0.9,
        letterSpacing: 1,
        // [theme.breakpoints.between('sm', 'md')]: {
        //     fontSize: 12
        // }
    },
    loginid: {
        color: theme.palette.background.paper,
        fontSize: 13,
        opacity: 0.8,
        right: 16,
        position: "absolute"
    },
    drawer: {
        "& .MuiDrawer-paper": {
            borderTopRightRadius: 12,
            borderBottomRightRadius: 12
        }
    },
    drawer_list: {
        width: 250,
        marginTop: 30
    },
    mbl_li: {
        borderBottom: "1px solid #eaeaeaad",
        padding: "14px 18px",
        "& .MuiTypography-body1": {
            fontSize: 14,
            fontWeight: 500
        },

    },
    close: {
        right: 14,
        top: 6,
        color: theme.palette.primary.main,
        position: "absolute",
    },
    texts: {
        padding: 13,
        // [theme.breakpoints.between('sm', 'md')]: {
        //     padding: 0,
        // }
    },
    main: {
        // [theme.breakpoints.between('sm', 'md')]: {
        //     padding: 0,
        // }
    }
})
// end

class HeaderMenuLists extends React.Component {
    // state
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            activemenu: null,
            mblactivemenu: null,
            mappingdata: []
        }
    }
    // end
    componentDidMount() {
        // const state = this.state;
        // the fetch api
        // axios.get(`${config.api_url}api/v1/menu`).then(res => {
        //     if (res.data) {
        //         const valData = res?.data?.content
        //         this.setState({
        //             ...state,
        //             mappingdata: valData
        //         })
        //     }
        // }).catch(err => {
        //     console.log("Menu details", err)
        // })
    }
    // handle hover lists funcy
    Handlehover = (i) => {
        this.setState({ activemenu: i })
    }
    // end

    // handle leave lists funcy
    Handleleave = () => {
        this.setState({ activemenu: null })
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
    // handle mobile hover lists funcy
    Handlemblhover = (i) => {
        if (i || i >= 0) {
            const v = this.state.mblactivemenu === i ? null : i
            this.setState({ mblactivemenu: v })
        } else {
            this.setState({ mblactivemenu: null })
        }
    }
    // end

    render() {

        const {
            activemenu, mblactivemenu, open
        } = this.state;

        const {
            classes, drawer, handledraer
        } = this.props;
        const menu_active = window.location.pathname;
        return <div className={classes.root}>
            <Hidden smDown>
                {/* menu lists AppBar component in desktop */}
                <AppBar position="static" className={classes.appbar}>
                    <Toolbar className={classes.main} onMouseLeave={() => this.Handleleave()}>
                        {menulists?.map((list, i) => {
                            if (list?.childrens) {
                                return <div
                                    key={list.name}
                                    // className={classes.texts}
                                    style={{
                                        justifyContent: "center",
                                        display: "flex",
                                        padding: 11,
                                        borderBottom: (activemenu === i || menu_active === list.url || menu_active.includes(list.url) || menu_active.includes(list.url)) ? "3px solid #4BCD3E" : "3px solid #012834"
                                    }}>
                                    <MenuItem className={classes.btn} onMouseOver={() => this.Handlehover(i)}>
                                        <img alt="img" width="100%" src={list.icon} className={classes.icon}
                                            style={{
                                                objectFit: "cover",
                                                height: list.name === "User Group Management" ? "14px" : "",
                                                width: list.name === "User Group Management" ? "auto" : "",
                                                marginTop: list.name === "Checker Dashboard" ? -1 : "",
                                            }}
                                        />
                                        <Typography className={classes.m_li}>{list.name}</Typography><ExpandMoreIcon style={{ color: "#4BCD3E" }} />
                                    </MenuItem>
                                    {
                                        (activemenu === i) &&
                                        <div className={classes.menulist} onMouseOver={() => this.Handlehover(i)} onMouseLeave={() => this.Handleleave()}>
                                            {list?.childrens?.map(s_l => {
                                                return <ListItem key={s_l.name} component="li" className={classes.li}
                                                    onClick={() => {
                                                        this.props.history.push(
                                                            s_l.url === "/add-usermanagement-form" ? s_l.url + "/add" : s_l.url
                                                         )
                                                        this.Handlehover()
                                                    }}
                                                >{s_l.name}</ListItem>
                                            })}
                                        </div>}
                                </div>
                            } else {
                                return <div
                                    key={list.name}
                                    className={classes.texts}
                                    style={{
                                        padding: 12,
                                        borderBottom: (activemenu === i || menu_active === list.url || menu_active.includes(list.url)) ? "3px solid #4BCD3E" : "3px solid #012834"
                                    }}>
                                    <MenuItem
                                        onClick={() => this.props.history.push(list.url)}
                                        className={classes.btn} onMouseOver={() => this.Handlehover(i)}
                                        onMouseLeave={() => this.Handleleave()}>
                                        <img alt="img" width="100%" src={list.icon} className={classes.icon} style={{
                                            objectFit: "cover",
                                            height: list.name === "Audit Menu" ? "20px" : "",
                                            width: list.name === "Audit Menu" ? "30px" : "",
                                            marginRight: list.name === "Audit Menu" ? -6 : "",
                                        }} />
                                        <Typography className={classes.m_li}>{list.name}</Typography>
                                    </MenuItem>
                                </div>
                            }
                        })}
                        <Typography className={classes.loginid}>
                            <Button className={classes.btnss} onClick={() => this.handleProfileMenuOpen()}>
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
                            </Button></Typography>
                    </Toolbar>
                </AppBar>
                {/* end */}

            </Hidden>
            <Hidden mdUp>

                {/* menu lists drawer component in mobile */}
                <Drawer anchor={"left"} open={drawer} onClose={() => handledraer()} className={classes.drawer}>
                    <HighlightOffIcon className={classes.close} onClick={() => handledraer()} />
                    <div className={classes.drawer_list}>
                        <List>
                            {menulists?.map((text, i) => {
                                if (text?.childrens) {
                                    return <div
                                        key={text.name}
                                    >
                                        <ListItem button key={text.name}
                                            className={classes.mbl_li}
                                            onClick={() => {
                                                this.Handlemblhover(i)
                                            }}
                                            style={{
                                                background: (mblactivemenu === i || menu_active === text.url) && "#4BCD3E",
                                                color: (mblactivemenu === i || menu_active === text.url) && "#fff"
                                            }}>
                                            <img alt="img" width="100%" src={text.icon} className={classes.mbl_icon} />
                                            <ListItemText primary={text.name} /><ExpandMoreIcon style={{ color: (mblactivemenu === i || menu_active === text.url) ? "#fff" : "#4BCD3E" }} />
                                        </ListItem>
                                        {
                                            mblactivemenu === i &&
                                            <div className={classes.mbl_menulist}>
                                                {text?.childrens?.map(s_l => {
                                                    return <ListItem onClick={() => {
                                                        handledraer()
                                                        this.props.history.push(s_l.url)
                                                    }} component="li" className={classes.mbls_li}>{s_l.name}</ListItem>
                                                })}
                                            </div>
                                        }

                                    </div>
                                } else {
                                    return <ListItem button
                                        key={text.name}
                                        className={classes.mbl_li}
                                        onClick={() => {
                                            this.Handlemblhover(i)
                                            this.props.history.push(text.url)
                                            handledraer()
                                        }}
                                        style={{
                                            background: (mblactivemenu === i || menu_active === text.url) && "#4BCD3E",
                                            color: (mblactivemenu === i || menu_active === text.url) && "#fff"
                                        }}>
                                        <img alt="img" width="100%" src={text.icon} className={classes.mbl_icon} style={{
                                            height: text.name === "Audit Menu" ? "28px" : "",
                                            width: text.name === "Audit Menu" ? "18px" : "",
                                            objectFit: "cover"
                                        }} />
                                        <ListItemText primary={text.name} />
                                    </ListItem>
                                }
                            })}
                        </List>
                        {myacc?.map(a => {
                            return <div
                                key={a.name}
                            >
                                <ListItem button key={a.name}
                                    className={classes.mbl_li}
                                    onClick={() => {
                                        this.Handlemblhover(6)
                                    }}
                                    style={{
                                        background: mblactivemenu === 6 && "#4BCD3E",
                                        color: mblactivemenu === 6 && "#fff"
                                    }}>
                                    <img alt="img" width="100%" src={a.icon} className={classes.mbl_icon} />
                                    <ListItemText primary={a.name} /><ExpandMoreIcon style={{ color: mblactivemenu === 6 ? "#fff" : "#4BCD3E" }} />
                                </ListItem>
                                {
                                    mblactivemenu === 6 &&
                                    <div className={classes.mbl_menulist}>
                                        {a?.childrens?.map(s_l => {
                                            return <ListItem key={s_l.name} component="li" className={classes.mbls_li} onClick={() => {
                                                handledraer()
                                                this.props.history.push(s_l.url)
                                            }}>{s_l.name}</ListItem>
                                        })}
                                    </div>
                                }
                            </div>
                        })}
                    </div>
                </Drawer>
                {/* end */}

            </Hidden>
        </div>
    }
}

export default withStyles(styles)(withRouter(HeaderMenuLists));