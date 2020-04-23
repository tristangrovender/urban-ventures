import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#1a237e" // dark indigo
            // light: "#757ce8",
            // dark: "#002884",
            // contrastText: "#fff"
        },
        secondary: {
            main: "#424242" // dark grey
            // light: "#ff7961",
            // dark: "#ba000d",
            // contrastText: "#000"
        }
    }
});

export default theme;
