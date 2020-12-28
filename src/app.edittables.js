import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { EdittablesContext } from './contexts/index'



const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    }
}));

const MainApp = (props) => {
    let [data, setData] = useState(null);

    const classes = useStyles();

    return (
        <EdittablesContext.Provider value={{ ...data, setData }}>
            <div className={classes.root}>
                {props.children}
            </div>
        </EdittablesContext.Provider>
    )
}

export default MainApp;