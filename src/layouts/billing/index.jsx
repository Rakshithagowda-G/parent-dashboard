/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React components
import MasterCard from "examples/Cards/MasterCard";
// Soft UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";


// Billing page components
import PaymentMethod from "layouts/billing/components/PaymentMethod";
import Invoices from "layouts/billing/components/Invoices";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Transactions from "layouts/billing/components/Transactions";
import CreditBalance from "./components/CreditBalance";

function Billing() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox 
        mt={{ xs: 2, sm: 3, md: 3.5, lg: 4, xl: 4 }} 
        sx={{ 
          fontFamily: '"Poppins", sans-serif', 
          width: "100%", 
          maxWidth: "none",
          overflowX: "hidden",
          "@media (min-width: 1366px)": {
            maxWidth: "none",
            width: "100%",
          },
        }}
      >
        <SoftBox mb={{ xs: 1.5, sm: 1.5, md: 1.5, lg: 1.5, xl: 1.5 }}>
          <Grid container spacing={{ xs: 1.5, sm: 2, md: 2.5, lg: 3, xl: 3 }}>
            <Grid item xs={12} lg={7} xl={8}>
              <Grid container spacing={{ xs: 1.5, sm: 2, md: 2.5, lg: 3, xl: 3 }}>
                <Grid item xs={12} sm={12} md={12} xl={6}>
                  <MasterCard number={7812213908237916} valid="05/24" cvv="09X" />
                </Grid>
                <Grid item xs={12} sm={12} md={12} xl={6}>
                  <CreditBalance />
                </Grid>
                <Grid item xs={12}>
                  <PaymentMethod />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={5} xl={4}>
              <Invoices />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox my={{ xs: 2, sm: 2.5, md: 3, lg: 3, xl: 3 }}>
          <Grid container spacing={{ xs: 1.5, sm: 2, md: 2.5, lg: 3, xl: 3 }}>
            <Grid item xs={12} md={12} lg={7} xl={7}>
              <BillingInformation />
            </Grid>
            <Grid item xs={12} md={12} lg={5} xl={5}>
              <Transactions />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Billing;
