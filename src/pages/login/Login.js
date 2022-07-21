import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// logo
import logo from "./logo.svg";
import google from "../../images/google.svg";

// context
import { useUserDispatch, loginUser } from "../../context/UserContext";

// translate
import { getTranslate } from "../../localization/index";

//import button
import MyBtn from "./components/MyBtn";

function Login(props) {
  const testValue = (regex, errorText1, type, e) => {
    var value = e.target.value;
    var isNotValid = !regex.test(value);
    switch (type) {
      case 'email':
        setEmailError(isNotValid);
        isNotValid ? setEmailErrorText(errorText1) : setEmailErrorText("");
        break;
      case 'password':
        setPasswordError(isNotValid);
        isNotValid ? setPasswordErrorText(errorText1) : setPasswordErrorText("");
        break;
      case 'fullname':
        setFullNameError(isNotValid);
        isNotValid ? setFullNameErrorText(errorText1) : setFullNameErrorText("");
        break;
      case 'cpassword':
        setCPasswordError(isNotValid);
        isNotValid ? setCPasswordErrorText(errorText1) : setCPasswordErrorText("");
        break;
      case 'cemail':
        setCEmailError(isNotValid);
        isNotValid ? setCEmailErrorText(errorText1) : setCEmailErrorText("");
    }
  }
  const onFocusHandler = (type) => {
      switch (type) {
        case 'email':
          setEmailError(false);
          setEmailErrorText("");
          break;
        case 'password':
          setPasswordError(false);
          setPasswordErrorText("");
          break;
        case 'cpassword':
          setCPasswordError(false);
          setCPasswordErrorText("");
          break;
        case 'fullname':
          setFullNameError(false);
          setFullNameErrorText("");
          break;
        case 'cemail':
          setCEmailError(false);
          setCEmailErrorText("");
      }
    }
  const tabOptions = () => {
    setNameValue('');
    setLoginValue('');
    setPasswordValue('');
  }
  var classes = useStyles();
  const translate = getTranslate();
  // global
  var userDispatch = useUserDispatch();

  // local
  var [isLoading, setIsLoading] = useState(false);
  var [emailError, setEmailError] = useState(null);
  var [fullNameError, setFullNameError] = useState(null);
  var [passwordError, setPasswordError] = useState(null);
  var [cPasswordError, setCPasswordError] = useState(null); // password in create account tab.
  var [cEmailError, setCEmailError] = useState(null); // email in create account tab.
  var [emailErrorText, setEmailErrorText] = useState("");
  var [passwordErrorText, setPasswordErrorText] = useState("");
  var [fullNameErrorText, setFullNameErrorText] = useState("");
  var [cPasswordErrorText, setCPasswordErrorText] = useState(""); // password in create account tab.
  var [cEmailErrorText, setCEmailErrorText] = useState(""); // password in create account tab.
  var [error, setError] = useState(null);
  var [activeTabId, setActiveTabId] = useState(0);
  var [nameValue, setNameValue] = useState("");
  var [loginValue, setLoginValue] = useState("");
  var [passwordValue, setPasswordValue] = useState("");

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <img src={logo} alt="logo" className={classes.logotypeImage} />
        <Typography className={classes.logotypeText}>{translate.name}</Typography>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Tabs
            value={activeTabId}
            onChange={(e, id) => setActiveTabId(id)}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label={translate.login} onClick={() => {
              tabOptions();
              setCEmailError(false);
              setFullNameError(false);
              setCPasswordError(false);
              setCEmailErrorText('');
              setFullNameErrorText('');
              setCPasswordErrorText('');
            }}
                 classes={{root: classes.tab}}
            />
            <Tab label={translate.signin} onClick={() => {
              tabOptions();
              setEmailError(false);
              setPasswordError(false);
              setPasswordErrorText('');
              setEmailErrorText('');
            }} classes={{root: classes.tab}}
            />
          </Tabs>
          {activeTabId === 0 && (
            <React.Fragment>
              <Typography variant="h1" className={classes.greeting}>
                {translate.welcome}
              </Typography>
              <Button size="large" className={classes.googleButton}>
                <img src={google} alt="google" className={classes.googleIcon} />
                &nbsp;{translate.googleSignIn}
              </Button>
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}>{translate.or}</Typography>
                <div className={classes.formDivider} />
              </div>
              <TextField
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={loginValue}
                onChange={e => setLoginValue(e.target.value)}
                margin="normal"
                label={translate.emailAddress}
                type="email"
                fullWidth
                onBlur={(e) => {
                  if (e.target.value) {
                    testValue(/^[a-z0-9._]{3,}@[a-z]{2,}\.[a-z]{2,4}$/i, translate.emailErrorText, 'email', e);
                  }
                }}
                helperText={emailErrorText}
                error={emailError}
                onFocus={() => {onFocusHandler('email')}}
              />
              <TextField
                id="password"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                margin="normal"
                label={translate.password}
                type="password"
                fullWidth
                onBlur={(e) => {
                  if (e.target.value) {
                    testValue(/^[a-z0-9._!A-Z:,/&%$#@]{6,}/i, translate.passwordErrorText, 'password', e);
                  } else {}

                }}
                helperText={passwordErrorText}
                error={passwordError}
                onFocus={() => {
                  onFocusHandler('password');
                }}
              />
              <div className={classes.formButtons}>
                {isLoading ? (
                  <CircularProgress size={26} className={classes.loginLoader} />
                ) : (
                    <Button
                      disabled={
                        passwordError || emailError || passwordValue.length == 0 || loginValue.length == 0
                      }
                      onClick={() =>
                        loginUser(
                          userDispatch,
                          loginValue,
                          passwordValue,
                          props.history,
                          setIsLoading,
                          setError,
                        )
                      }
                      variant="contained"
                      color="primary"
                      size="large"
                    >
                      {translate.login}</Button>
                )}
                <Button
                  color="primary"
                  size="large"
                  className={classes.forgetButton}
                >
                  {translate.forgetPassword}
                </Button>
              </div>
            </React.Fragment>
          )}
          {activeTabId === 1 && (
            <React.Fragment>
              <Typography variant="h1" className={classes.greeting}>
          {translate.welcome}!
              </Typography>
              <Typography variant="h2" className={classes.subGreeting}>
          {translate.createYourAccout}
              </Typography>
              <TextField
                id="name"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={nameValue}
                onChange={e => setNameValue(e.target.value)}
                margin="normal"
                label={translate.fullName}
                type="text"
                fullWidth
                error={fullNameError}
                helperText={fullNameErrorText}
                onBlur={(e) => {
                  if (e.target.value) {
                    testValue(/[a-zA-Z0-9آ-ی\s]{3,}/i, translate.fullNameErrorText, 'fullname', e);
                  } else {

                  }
                }}
                onFocus={() => {
                  onFocusHandler('fullname')
                }}
              />
              <TextField
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={loginValue}
                onChange={e => setLoginValue(e.target.value)}
                margin="normal"
                label={translate.emailAddress}
                type="email"
                fullWidth
                error={cEmailError}
                helperText={cEmailErrorText}
                onBlur={(e) => {
                  if (e.target.value) {
                    testValue(/^[a-z0-9._]{3,}@[a-z]{2,}\.[a-z]{2,4}$/i, translate.emailErrorText, 'cemail', e);
                  } else {

                  }
                }}
                onFocus={() => {
                  onFocusHandler('cemail')
                }}
              />
              <TextField
                id="password"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                margin="normal"
                label={translate.password}
                type="password"
                fullWidth
                error={cPasswordError}
                helperText={cPasswordErrorText}
                onBlur={(e) => {
                  if (e.target.value) {
                    testValue(/^[a-z0-9._!A-Z:,/&%$#@]{6,}/i, translate.passwordErrorText,'cpassword' , e)
                  } else {

                  }
                }}
                onFocus={() => {
                  onFocusHandler('cpassword')
                }}
              />
              <div className={classes.creatingButtonContainer}>
                {isLoading ? (
                  <CircularProgress size={26} />
                ) : (
                  <Button
                    onClick={() =>
                      loginUser(
                        userDispatch,
                        loginValue,
                        passwordValue,
                        props.history,
                        setIsLoading,
                        setError,
                      )
                    }
                    disabled={
                      loginValue.length === 0 ||
                      passwordValue.length === 0 ||
                      nameValue.length === 0 ||
                      cPasswordError ||
                      cEmailError ||
                      fullNameError
                    }
                    size="large"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={classes.createAccountButton}
                  >
                      {translate.createAccount}
                    </Button>
                  )}
              </div>
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}>{translate.or}</Typography>
                <div className={classes.formDivider} />
              </div>
              <Button
                size="large"
                className={classnames(
                  classes.googleButton,
                  classes.googleButtonCreating,
                )}
              >
                <img src={google} alt="google" className={classes.googleIcon} />
                &nbsp;{translate.googleSignIn}
              </Button>
            </React.Fragment>
          )}
        </div>
        <MyBtn/>
        <Typography color="primary" className={classes.copyright}>
          {translate.copyRight}
        </Typography>
      </div>
    </Grid>
  );
}

export default withRouter(Login);
