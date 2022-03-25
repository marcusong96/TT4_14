import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { ApplyloanListResults } from '../components/customer/applyloan-list-results';
import { ApplyloanListToolbar } from '../components/customer/applyloan-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { applyloan } from '../__mocks__/applyloan';

const Applyloan = () => (
  <>
    <Head>
      <title>
      Applyloan | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <ApplyloanListToolbar />
        <Box sx={{ mt: 3 }}>
          <ApplyloanListResults applyloan={applyloan} />
        </Box>
      </Container>
    </Box>
  </>
);
Applyloan.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Applyloan;
