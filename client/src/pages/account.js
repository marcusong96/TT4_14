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
 }  from '@mui/material';
import { AccountProfile } from '../components/account/account-profile';
import { AccountProfileDetails } from '../components/account/account-profile-details';
import { DashboardLayout } from '../components/dashboard-layout';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Account = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      amount: '',
      policy: false
    },
    validationSchema: Yup.object({
      amount: Yup
        .string()
        .max(255)
        .required(
          'Please input your loan amount'),
      policy: Yup
        .boolean()
        .oneOf(
          [true],
          'This field must be checked'
        )
    }),
    onSubmit: () => {
      router.push('/');
    }
  });

  return (
  <>
    <Head>
      <title>
        Payment | Loan Management System
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
                   Payment for outstanding Loan
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.amount && formik.errors.amount)}
              fullWidth
              helperText={formik.touched.amount && formik.errors.amount}
              label="Loan Amount"
              margin="normal"
              name="amount"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="number"
              value={formik.values.amount}
              variant="outlined"
            />
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1
              }}
            >
              <Checkbox
                checked={formik.values.policy}
                name="policy"
                onChange={formik.handleChange}
              />
              <Typography
                color="textSecondary"
                variant="body2"
              >
                  
         Confirm Payment
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};


Account.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Account;
