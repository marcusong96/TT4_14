import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography
 } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Payment = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      amount: '',
    },
    validationSchema: Yup.object({
      amount: Yup
        .string()
        .max(255)
        .required(
          'Please input your payment amount'),
    }),
    onSubmit: () => {
      router.push('/');
    }
  });

  return (
    <>
      <Head>
        <title>
          Pay Loan | Loan Management System
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Pay Outstanding Loans
              </Typography>
            </Box>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textSecondary"
                variant="h5"
              >
                Outstanding amount: $23,032
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.amount && formik.errors.amount)}
              fullWidth
              helperText={formik.touched.amount && formik.errors.amount}
              label="Payment Amount"
              margin="normal"
              name="amount"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="number"
              value={formik.values.amount}
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Submit Payment
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};


Payment.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Payment;
