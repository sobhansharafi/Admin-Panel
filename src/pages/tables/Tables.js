import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";

// translate
import { getTranslate } from "../../localization/index";

const translate = getTranslate();
const datatableData = [
  ["Joe James", "Example Inc.", "Yonkers", "NY"],
  ["John Walsh", "Example Inc.", "Hartford", "CT"],
  ["Bob Herm", "Example Inc.", "Tampa", "FL"],
  ["James Houston", "Example Inc.", "Dallas", "TX"],
  ["Prabhakar Linwood", "Example Inc.", "Hartford", "CT"],
  ["Kaui Ignace", "Example Inc.", "Yonkers", "NY"],
  ["Esperanza Susanne", "Example Inc.", "Hartford", "CT"],
  ["Christian Birgitte", "Example Inc.", "Tampa", "FL"],
  ["Meral Elias", "Example Inc.", "Hartford", "CT"],
  ["Deep Pau", "Example Inc.", "Yonkers", "NY"],
  ["Sebastiana Hani", "Example Inc.", "Dallas", "TX"],
  ["Marciano Oihana", "Example Inc.", "Yonkers", "NY"],
  ["Brigid Ankur", "Example Inc.", "Dallas", "TX"],
  ["Anna Siranush", "Example Inc.", "Yonkers", "NY"],
  ["Avram Sylva", "Example Inc.", "Hartford", "CT"],
  ["Serafima Babatunde", "Example Inc.", "Tampa", "FL"],
  ["Gaston Festus", "Example Inc.", "Tampa", "FL"],
];

const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function Tables() {
  const classes = useStyles();
  return (
    <>
      <PageTitle title={translate.tables} />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title={translate.employeeList}
            data={datatableData}
            columns={[translate.NAME, translate.company, translate.CITY, translate.state]}
            options={{
              filterType: "checkbox",
              textLabels: {
                pagination: {
                  next: translate.nextPage,
                  previous: translate.previousPage,
                  rowsPerPage: translate.rowsPerPage,
                  displayRows: translate.displayRows // 1-10 of 30
                },
                toolbar: {
                  search: translate.search,
                  downloadCsv: translate.downloadCsv,
                  print: translate.Print,
                  viewColumns: translate.viewColumns,
                  filterTable: translate.filterTable
                },
                filter: {
                  title: translate.filterTitle,
                  reset: translate.reset,
                },
                viewColumns: {
                  title: translate.viewColumns,
                  titleStyle: {
                    backgroundColor: '#f00 !important'
                  }
                },
                selectedRows: {
                  text: translate.deleteText,
                  delete: translate.deleteButtonText
                }
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Widget title={translate.supportRequests} upperTitle noBodyPadding bodyClass={classes.tableOverflow}>
            <Table data={mock.table} />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
