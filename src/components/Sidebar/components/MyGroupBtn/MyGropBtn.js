import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {changeLanguage, lang} from "../../../../localization";
// styles
import useStyles from "./styles";

export default function BasicButtonGroup() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        {lang === 'en' ? (
            <ButtonGroup color='primary' aria-label="outlined primary button group">
              <Button onClick={() => {
                changeLanguage('fa');
              }} varian="button" className={classes.faButton}>فارسی</Button>
              <Button onClick={() => {
                changeLanguage('en')
              }} varian="button" className={classes.enButton}>english</Button>
            </ButtonGroup>
        ) : (
            <ButtonGroup color='primary' aria-label="outlined primary button group">
              <Button style={{
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                borderRightColor: '#3f51b5',
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5
              }} onClick={() => {
                changeLanguage('fa')
              }} varian="button" className={classes.faButton}>فارسی</Button>
              <Button style={{
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
              }} onClick={() => {
                changeLanguage('en')
              }} varian="button" className={classes.enButton}>english</Button>
            </ButtonGroup>
        )}
      </div>
  );
}