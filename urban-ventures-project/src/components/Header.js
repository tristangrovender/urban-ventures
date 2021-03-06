import React from "react";
// this is how we make small css changes in material-ui
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "./Icon";

// this is how we make small css changes in material-ui
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

export default function Header() {
    // this is how we make small css changes in material-ui
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        // this is how we make small css changes in material-ui
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <HomeIcon fontSize="large" />
                        {/* Route here? */}
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Urban Ventures
                    </Typography>
                    <Button
                        color="inherit"
                        // example event
                        onClick={() => {
                            console.log("onClick");
                        }}
                    >
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
