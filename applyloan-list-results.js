import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';

export const ApplyloanListResults = ({ loan, ...rest }) => {
  const [selectedLoanId, setSelectedLoanId] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedLoanId;

    if (event.target.checked) {
      newSelectedLoanId = loan.map((loan) => loan.LoanId);
    } else {
      newSelectedLoanId = [];
    }

    setSelectedLoadId(newSelectedLoanId);
  };

  const handleSelectOne = (event, loanid) => {
    const selectedIndex = selectedLoanId.indexOf(loanid);
    let newSelectedLoanId = [];

    if (selectedIndex === -1) {
      newSelectedLoanId = newSelectedLoanId.concat(selectedLoanId, loanid);
    } else if (selectedIndex === 0) {
      newSelectedLoanId = newSelectedLoanId.concat(selectedLoanId.slice(1));
    } else if (selectedIndex === newSelectedLoanId.length - 1) {
      newSelectedLoanId = newSelectedLoanId.concat(selectedLoanId.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedLoanId = newSelectedLoanId.concat(
        selectedLoanId.slice(0, selectedIndex),
        selectedLoanId.slice(selectedIndex + 1)
      );
    }

    setSelectedLoadId(newSelectedLoanId);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedLoanId.length === loan.length}
                    color="primary"
                    indeterminate={
                      selectedLoanId.length > 0
                      && selectedLoanId.length < loan.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Loan Amount
                </TableCell>
                <TableCell>
                  Payment Amount
                </TableCell>
                <TableCell>
                  Application Status
                </TableCell>
                <TableCell>
                  Payment Status
                </TableCell>
                <TableCell>
                 Date of Application
                </TableCell>
                <TableCell>
                 Payment Due Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loan.slice(0, limit).map((loan) => (
                <TableRow
                  hover
                  key={loan.loanid}
                  selected={selectedLoanId.indexOf(loan.loanid) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedLoanId.indexOf(loan.loanid) !== -1}
                      onChange={(event) => handleSelectOne(event, loan.loanid)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {loan.loanamount}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {loan.appstatus}
                  </TableCell>
                  <TableCell>
                    {loan.paystatus}
                  </TableCell>
                  <TableCell>
                   {format(loan.appdate, 'dd/MM/yyyy')}
                  </TableCell>
                  <TableCell>
                    {format(loan.paydate, 'dd/MM/yyyy')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={loan.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

ApplyLoanListResults.propTypes = {
  loan: PropTypes.array.isRequired
};
