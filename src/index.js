import React from "react";
import ReactDOM from "react-dom";
import {ThemeProvider} from "@material-ui/styles";
import {CssBaseline} from "@material-ui/core";

import Themes from "./themes";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import {LayoutProvider} from "./context/LayoutContext";
import {UserProvider} from "./context/UserContext";
// import IRANSans font css
import './assets/css/fontiran.css'
// import jss-rtl
import {create} from "jss";
import rtl from "jss-rtl";
import {jssPreset, StylesProvider} from "@material-ui/core/styles";
// get site direction
import {getDirections} from "./localization";

// set body tag drection to rtl
document.getElementsByTagName("body")[0].setAttribute("dir", getDirections());

const jss = create({plugins: [...jssPreset().plugins, rtl()]});
getDirections() === "rtl" ? (
    ReactDOM.render(
        <LayoutProvider>
          <UserProvider>
            <ThemeProvider theme={Themes.default}>
              <StylesProvider jss={jss}>
                <CssBaseline/>
                <App/>
              </StylesProvider>
            </ThemeProvider>
          </UserProvider>
        </LayoutProvider>,
        document.getElementById("root"),
    )
) : (
    ReactDOM.render(
        <LayoutProvider>
          <UserProvider>
            <ThemeProvider theme={Themes.default}>
              <StylesProvider>
                <CssBaseline/>
                <App/>
              </StylesProvider>
            </ThemeProvider>
          </UserProvider>
        </LayoutProvider>,
        document.getElementById("root"),
    ))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
