import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { PaymentProfile } from '../components/payment/payment-profile';
import { PaymentProfileDetails } from '../components/payment/payment-profile-details';
import { DashboardLayout } from '../components/dashboard-layout';

const Payment = () => (
  <>
    <Head>
      <title>
        Payment for outstanding loans | Loan Management
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Payment for outstanding loans
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <PaymentProfile />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <PaymentProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Payment.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Payment;
