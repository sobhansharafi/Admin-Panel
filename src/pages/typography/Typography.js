import React from "react";
import { Grid } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";
// translate
import { getTranslate } from "../../localization/index";

export default function TypographyPage() {
  var classes = useStyles();
  const translate = getTranslate();
  return (
    <>
      <PageTitle title={translate.typography} />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Widget title={translate.headings} disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography variant="h1" className={classes.text}>
                h1. {translate.headings}
              </Typography>
              <Typography variant="h2" className={classes.text}>
                h2. {translate.headings}
              </Typography>
              <Typography variant="h3" className={classes.text}>
                h3. {translate.headings}
              </Typography>
              <Typography variant="h4" className={classes.text}>
                h4. {translate.headings}
              </Typography>
              <Typography variant="h5" className={classes.text}>
                h5. {translate.headings}
              </Typography>
              <Typography variant="h6">h6. {translate.headings}</Typography>
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title={translate.typographyColors} disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography variant="h1" color="primary" className={classes.text}>
                h1. {translate.headings}
              </Typography>
              <Typography variant="h2" color="success" className={classes.text}>
                h2. {translate.headings}
              </Typography>
              <Typography
                variant="h3"
                color="secondary"
                className={classes.text}
              >
                h3. {translate.headings}
              </Typography>
              <Typography variant="h4" color="warning" className={classes.text}>
                h4. {translate.headings}
              </Typography>
              <Typography
                variant="h5"
                color="primary"
                colorBrightness="light"
                className={classes.text}
              >
                h5. {translate.headings}
              </Typography>
              <Typography variant="h6" color="info">
                h6. {translate.headings}
              </Typography>
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title={translate.basicTextSettings} disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography className={classes.text}>
                {translate.textSize}
              </Typography>
              <Typography className={classes.text} weight="light">
                {translate.basicText}
              </Typography>
              <Typography className={classes.text} weight="medium">
                {translate.basicLightText}
              </Typography>
              <Typography className={classes.text} weight="bold">
                {translate.basicBoldText}
              </Typography>
              <Typography className={classes.text}>
                {translate.basicUpperCaseText}
              </Typography>
              <Typography className={classes.text}>
                {translate.basicLowercaseText}
              </Typography>
              <Typography className={classes.text}>
                {translate.basicCapitalizedText}
              </Typography>
              <Typography>
                <i>{translate.basicCursiveText}</i>
              </Typography>
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title={translate.textSize} disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography className={classes.text} size="sm">
                SM. {translate.headingTypographyFontSize}
              </Typography>
              <Typography className={classes.text}>
                Regular. {translate.headingTypographyFontSize}
              </Typography>
              <Typography className={classes.text} size="md">
                MD. {translate.headingTypographyFontSize}
              </Typography>
              <Typography className={classes.text} size="xl">
                XL. {translate.headingTypographyFontSize}
              </Typography>
              <Typography className={classes.text} size="xxl">
                XXL. {translate.headingTypographyFontSize}
              </Typography>
            </div>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
