import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import { ToastContainer, toast } from "react-toastify";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import classnames from "classnames";

// styles
import "react-toastify/dist/ReactToastify.css";
import useStyles from "./styles";

// components
import Widget from "../../components/Widget/Widget";
import PageTitle from "../../components/PageTitle/PageTitle";
import Notification from "../../components/Notification";
import { Typography, Button } from "../../components/Wrappers/Wrappers";

// translate
import { getTranslate } from "../../localization/index";

const positions = [
  toast.POSITION.TOP_LEFT,
  toast.POSITION.TOP_CENTER,
  toast.POSITION.TOP_RIGHT,
  toast.POSITION.BOTTOM_LEFT,
  toast.POSITION.BOTTOM_CENTER,
  toast.POSITION.BOTTOM_RIGHT,
];

export default function NotificationsPage(props) {
  var classes = useStyles();
  const translate = getTranslate();

  // local
  var [notificationsPosition, setNotificationPosition] = useState(2);
  var [errorToastId, setErrorToastId] = useState(null);

  return (
    <>
      <PageTitle title={translate.notifications} />
      <Grid container spacing={4}>
        <ToastContainer
          className={classes.toastsContainer}
          closeButton={
            <CloseButton className={classes.notificationCloseButton} />
          }
          closeOnClick={false}
          progressClassName={classes.notificationProgress}
        />
        <Grid item xs={12}>
        <Widget disableWidgetMenu>
          <Grid container item xs={12}>
          <Grid item xs={4}>
          <Widget title={translate.layoutOptions} noWidgetShadow disableWidgetMenu noBodyPadding noHeaderPadding style={{paddingRight: 15}} headerClass={classes.widgetHeader}>
            <Typography>
              {translate.layoutOptionsText}
            </Typography>
            <div className={classes.layoutContainer}>
              <div className={classes.layoutButtonsRow}>
                <button
                  onClick={() => changeNotificationPosition(0)}
                  className={classnames(classes.layoutButton, {
                    [classes.layoutButtonActive]: notificationsPosition === 0,
                  })}
                />
                <button
                  onClick={() => changeNotificationPosition(1)}
                  className={classnames(classes.layoutButton, {
                    [classes.layoutButtonActive]: notificationsPosition === 1,
                  })}
                />
                <button
                  onClick={() => changeNotificationPosition(2)}
                  className={classnames(classes.layoutButton, {
                    [classes.layoutButtonActive]: notificationsPosition === 2,
                  })}
                />
              </div>
              <Typography className={classes.layoutText} size="md">
                {translate.clickAnyPosition}
              </Typography>
              <div className={classes.layoutButtonsRow}>
                <button
                  onClick={() => changeNotificationPosition(3)}
                  className={classnames(classes.layoutButton, {
                    [classes.layoutButtonActive]: notificationsPosition === 3,
                  })}
                />
                <button
                  onClick={() => changeNotificationPosition(4)}
                  className={classnames(classes.layoutButton, {
                    [classes.layoutButtonActive]: notificationsPosition === 4,
                  })}
                />
                <button
                  onClick={() => changeNotificationPosition(5)}
                  className={classnames(classes.layoutButton, {
                    [classes.layoutButtonActive]: notificationsPosition === 5,
                  })}
                />
              </div>
            </div>
          </Widget>
            </Grid>
            <Grid item xs={4}>
          <Widget title={translate.notificationsTypes} disableWidgetMenu noBodyPadding noWidgetShadow noHeaderPadding style={{paddingRight: 15}} headerClass={classes.widgetHeader}>
            <Typography>
              {translate.notificationsTypesText}
            </Typography>
            <div className={classes.buttonsContainer}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleNotificationCall("info")}
                className={classnames(classes.notificationCallButton)}
              >
                {translate.infoMessage}
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleNotificationCall("error")}
                className={classnames(classes.notificationCallButton)}
              >
                {translate.ErrorRetryMessage}
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={() => handleNotificationCall("success")}
                className={classnames(classes.notificationCallButton)}
              >
                {translate.successMessage}
              </Button>
            </div>
          </Widget>
            </Grid>
            <Grid item xs={4}>
          <Widget title={translate.usage} disableWidgetMenu noBodyPadding noWidgetShadow noHeaderPadding style={{paddingRight: 15}} headerClass={classes.widgetHeader}>
            <Typography>
              {translate.usageText}
              <a href="https://github.com/fkhadra/react-toastify">
                react-toastify
              </a>
              {translate.create}
            </Typography>
            <div className={classes.codeContainer}>
              <SyntaxHighlighter
                  className={classes.codeComponent}
                  language="javascript"
                  style={docco}
              >{`
  // import needed components, functions and styles
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  const Page = () => {
    <div>
      <ToastContainer />
      <button onClick={() => toast('Toast Message')}>
        show notification
      </button>
    </div>
  };
            `}
              </SyntaxHighlighter>
              <Typography variant="caption" style={{textAlign:'right'}}>
                {translate.usageText2}
              </Typography>
            </div>
          </Widget>
            </Grid>
          </Grid>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Widget title={translate.notificationTypesExamples} disableWidgetMenu>
            <Notification
              className={classes.notificationItem}
              shadowless
              type="message"
              message={translate.thanksForCheckingOutMessenger}
              variant="contained"
              color="secondary"
            />
            <Notification
              className={classes.notificationItem}
              shadowless
              type="feedback"
              message={translate.newUserFeedbackReceived}
              variant="contained"
              color="primary"
            />
            <Notification
              className={classes.notificationItem}
              shadowless
              type="customer"
              message={translate.newCustomerIsRegistered}
              variant="contained"
              color="success"
            />
            <Notification
              className={classes.notificationItem}
              shadowless
              type="shipped"
              message={translate.theOrderWasShipped}
              variant="contained"
              color="warning"
            />
            <Notification
              className={classes.notificationItem}
              shadowless
              type="delivered"
              message={translate.theOrderWasDelivered}
              variant="contained"
              color="primary"
            />
            <Notification
              className={classes.notificationItem}
              shadowless
              type="defence"
              message={translate.defenceAlerts}
              variant="contained"
              color="info"
            />
          </Widget>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Widget title={translate.notificationTypesExamples} disableWidgetMenu>
            <Notification
              className={classes.notificationItem}
              type="report"
              message={translate.newReportHasBeenReceived}
              color="secondary"
            />
            <Notification
              className={classes.notificationItem}
              type="feedback"
              message={translate.newUserFeedbackReceived}
              color="primary"
            />
            <Notification
              className={classes.notificationItem}
              type="shipped"
              message={translate.theOrderWasShipped}
              color="success"
            />
            <Notification
              className={classes.notificationItem}
              type="message"
              message={translate.newMessageText}
              color="warning"
            />
            <Notification
              className={classes.notificationItem}
              type="upload"
              message={translate.youFileIsReadyToUpload}
              color="primary"
            />
            <Notification
              className={classes.notificationItem}
              type="disc"
              message={translate.theDiscIsFull}
              color="info"
            />
          </Widget>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Widget title={translate.notificationTypesExamples} disableWidgetMenu>
            <Notification
              className={classes.notificationItem}
              type="report"
              message={translate.newReportHasBeenReceived}
              variant="rounded"
              color="secondary"
            />
            <Notification
              className={classes.notificationItem}
              type="feedback"
              message={translate.newUserFeedbackReceived}
              variant="rounded"
              color="primary"
            />
            <Notification
              className={classes.notificationItem}
              type="shipped"
              message={translate.theOrderWasShipped}
              variant="rounded"
              color="success"
            />
            <Notification
              className={classes.notificationItem}
              type="message"
              message={translate.newMessageText}
              variant="rounded"
              color="warning"
            />
            <Notification
              className={classes.notificationItem}
              type="upload"
              message={translate.youFileIsReadyToUpload}
              variant="rounded"
              color="primary"
            />
            <Notification
              className={classes.notificationItem}
              type="disc"
              message={translate.theDiscIsFull}
              variant="rounded"
              color="info"
            />
          </Widget>
        </Grid>
      </Grid>
    </>
  );

  // #############################################################
  function sendNotification(componentProps, options) {
    return toast(
      <Notification
        {...componentProps}
        className={classes.notificationComponent}
      />,
      options,
    );
  }

  function retryErrorNotification() {
    var componentProps = {
      type: "message",
      message: "Message was sent successfully!",
      variant: "contained",
      color: "success",
    };
    toast.update(errorToastId, {
      render: <Notification {...componentProps} />,
      type: "success",
    });
    setErrorToastId(null);
  }

  function handleNotificationCall(notificationType) {
    var componentProps;

    if (errorToastId && notificationType === "error") return;

    switch (notificationType) {
      case "info":
        componentProps = {
          type: "feedback",
          message: translate.newUserFeedbackReceived,
          variant: "contained",
          color: "primary",
        };
        break;
      case "error":
        componentProps = {
          type: "message",
          message: translate.messageWasNotSent,
          variant: "contained",
          color: "secondary",
          extraButton: translate.resend,
          extraButtonClick: retryErrorNotification,
        };
        break;
      default:
        componentProps = {
          type: "shipped",
          message: translate.theOrderWasShipped,
          variant: "contained",
          color: "success",
        };
    }

    var toastId = sendNotification(componentProps, {
      type: notificationType,
      position: positions[notificationsPosition],
      progressClassName: classes.progress,
      onClose: notificationType === "error" && (() => setErrorToastId(null)),
      className: classes.notification,
    });

    if (notificationType === "error") setErrorToastId(toastId);
  }

  function changeNotificationPosition(positionId) {
    setNotificationPosition(positionId);
  }
}

// #############################################################
function CloseButton({ closeToast, className }) {
  return <CloseIcon className={className} onClick={closeToast} />;
}
