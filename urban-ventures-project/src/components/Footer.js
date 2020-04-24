import React from "react";
import AppBar from "@material-ui/core/AppBar";

export default function footer() {
    return (
        <AppBar className="footer" color="secondary" position="static">
            ©2020 Grovender Designs, Inc. This website is powered by the
            Grovender Designs platform, but is owned by and subject to the Urban
            Ventures Athletics privacy policy.
        </AppBar>
    );
}
