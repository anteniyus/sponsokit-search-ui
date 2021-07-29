import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { v4 as uuidv4 } from "uuid";
import { isFunction } from "../../utility/Validator";
import { Colors } from "../../constants/ColorPalette";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  tableRow: {
    "&:hover": {
      backgroundColor: () => `${Colors.SHINE_GREEN} !important`,
      cursor: "pointer",
    },
  },
});

const CustomTable = ({ data, columns, onRowClick }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    setPage(0);
  }, [data]);

  const drawColumns = (item, column) =>
    isFunction(column.function)
      ? column.function(item[column.key])
      : item[column.key];

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="influencer table" size="small">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={uuidv4()}>{column.title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
                <TableRow
                  key={uuidv4()}
                  onClick={() => onRowClick(item)}
                  hover
                  className={classes.tableRow}
                >
                  {columns.map((column) => (
                    <TableCell key={column.key} component="th" scope="row">
                      {drawColumns(item, column)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={data.length ? page : 0}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

CustomTable.defaultProps = {
  data: [],
  onRowClick: () => {},
};

CustomTable.propTypes = {
  data: PropTypes.instanceOf(Array),
  onRowClick: PropTypes.func,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CustomTable;
