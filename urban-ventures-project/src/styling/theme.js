import { createMuiTheme } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: {
            main: "#124116"
        }
    }
});

export default theme;
